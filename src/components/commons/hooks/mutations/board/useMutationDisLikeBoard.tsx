import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IBoard,
  IMutation,
  IMutationDislikeBoardArgs,
} from 'src/commons/types/generated/types'

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`

export const useMutationDisLikeBoard = (board: IBoard) => {
  const [dislikeBoardMutation] = useMutation<
    Pick<IMutation, 'dislikeBoard'>,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD)
  const disLikeBoard = async (): Promise<void> => {
    try {
      const result = await dislikeBoardMutation({
        variables: {
          boardId: board._id,
        },
        update(cache, { data }) {
          cache.modify({
            id: cache.identify(board), // 보드의 캐시 ID를 명시적으로 지정
            fields: {
              dislikeCount(existingDislikeCount) {
                return data?.dislikeBoard ?? existingDislikeCount
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_BOARD
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { disLikeBoard }
}
