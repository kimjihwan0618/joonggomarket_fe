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
                const newBoardId = board._id // 새로 추가된 보드의 ID
                const newLikeCount = data.likeBoard // 새로 추가된 보드의 좋아요 수

                const likeCountMap = new Map<string, number>()

                // 기존 보드의 __ref에서 ID를 읽어와서 좋아요 수를 맵에 저장
                existingBoards.forEach((boardRef) => {
                  const boardId = readField('_id', boardRef) as string
                  likeCountMap.set(boardId, likeCountMap.get(boardId) || 0) // 기본값 0
                })

                // 새 보드의 좋아요 수 업데이트
                likeCountMap.set(newBoardId, newLikeCount)

                // 맵을 배열로 변환하고 좋아요 수에 따라 정렬
                const updatedBoards = Array.from(likeCountMap.entries())
                  .map(([id, likeCount]) => ({ _id: id, likeCount }))
                  .sort((a, b) => b.likeCount - a.likeCount)

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
