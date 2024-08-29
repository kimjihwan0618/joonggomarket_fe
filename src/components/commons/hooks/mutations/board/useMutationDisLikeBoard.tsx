import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IMutation, IMutationDislikeBoardArgs } from 'src/commons/types/generated/types'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from 'src/components/commons/hooks/quires/board/useQueryFetchBoard'

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`

export const useMutationDisLikeBoard = (boardId: IMutationDislikeBoardArgs['boardId']) => {
  const router = useRouter()
  const [dislikeBoardMutation] = useMutation<
    Pick<IMutation, 'dislikeBoard'>,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD)
  const disLikeBoard = async (): Promise<void> => {
    try {
      const result = await dislikeBoardMutation({
        variables: {
          boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { disLikeBoard }
}
