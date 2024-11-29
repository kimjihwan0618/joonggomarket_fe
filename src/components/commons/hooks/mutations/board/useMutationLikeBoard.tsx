import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IBoard, IMutation, IMutationLikeBoardArgs } from 'src/commons/types/generated/types'
import { FETCH_BOARD } from 'src/components/commons/hooks/quires/board/useQueryFetchBoard'
import { FETCH_BOARDS_BEST } from '../../quires/board/useQueryFetchBoardsOfTheBest'

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`

export const useMutationLikeBoard = (board: IBoard) => {
  const [likeBoardMutation] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(
    LIKE_BOARD
  )
  const likeBoard = async (): Promise<void> => {
    try {
      const result = await likeBoardMutation({
        variables: {
          boardId: board._id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoard(existingBoard, { readField }) {
                if (readField('_id') === board._id) {
                  return {
                    ...existingBoard,
                    likeCount: data.likeBoard,
                  }
                }
              },
              fetchBoardsOfTheBest(existingBoards = [], { readField }) {
                const newBoardId = readField('_id') // 새로 추가된 보드의 ID
                const newLikeCount = data.likeBoard // 새로 추가된 보드의 좋아요 수

                // 기존 보드에서 새 보드의 좋아요 수와 비교하여 순위 조정
                const updatedBoards = [...existingBoards]

                // 새 보드가 기존 보드에 있는지 확인
                const existingBoardIndex = updatedBoards.findIndex(
                  (board) => readField('_id') === board._id
                )

                if (existingBoardIndex !== -1) {
                  // 기존 보드의 좋아요 수 업데이트
                  updatedBoards[existingBoardIndex] = {
                    ...updatedBoards[existingBoardIndex], // Create a new object
                    likeCount: newLikeCount,
                  }
                } else {
                  // 새 보드 추가
                  updatedBoards.push({ _id: newBoardId, likeCount: newLikeCount })
                }

                // 좋아요 수에 따라 정렬
                updatedBoards.sort((a, b) => b.likeCount - a.likeCount)

                // 최대 4개로 제한
                return updatedBoards.slice(0, 4)
              },
            },
          })
        },
        // 리패치제거
        // FETCH_BOARD, FETCH_BOARDS_BEST
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD,
        //     variables: { boardId },
        //   },
        //   {
        //     query: FETCH_BOARDS_BEST,
        //   },
        // ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { likeBoard }
}
