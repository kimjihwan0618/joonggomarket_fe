import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IBoard, IMutation, IMutationLikeBoardArgs } from 'src/commons/types/generated/types'

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
                const newBoardRef = cache.writeFragment({
                  data: {
                    __typename: 'Board',
                    ...board,
                    likeCount: data.likeBoard,
                  },
                  fragment: gql`
                    fragment NewBoard on Board {
                      _id
                      images
                      likeCount
                      createdAt
                      title
                      writer
                    }
                  `,
                })
                const updatedBoards = [...existingBoards]
                const newBoard = { ...board, likeCount: data.likeBoard }

                // 기존 보드 중 likeCount가 높은 보드만 필터링
                const filteredBoards = updatedBoards.filter((existingBoard) => {
                  return (
                    readField('_id', existingBoard) !== newBoard._id ||
                    parseInt(readField('likeCount', existingBoard), 10) >= newBoard.likeCount
                  )
                })

                // 새로운 보드가 기존 보드와 중복되지 않는 경우에만 추가
                const isNewBoardExists = filteredBoards.some(
                  (existingBoard) => readField('_id', existingBoard) === newBoard._id
                )

                if (
                  !isNewBoardExists &&
                  newBoard.likeCount >
                    Math.min(...filteredBoards.map((b) => parseInt(readField('likeCount', b), 10)))
                ) {
                  filteredBoards.push(newBoardRef)
                }
                // likeCount 기준으로 정렬 후 상위 4개 반환
                return filteredBoards
                  .sort(
                    (a, b) =>
                      parseInt(readField('likeCount', b), 10) -
                      parseInt(readField('likeCount', a), 10)
                  )
                  .slice(0, 4)
              },
            },
          })
        },
        // 리패치제거
        // FETCH_BOARD, FETCH_BOARDS_BEST
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { likeBoard }
}
