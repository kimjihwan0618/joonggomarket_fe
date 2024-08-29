import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IMutation, IMutationLikeBoardArgs } from 'src/commons/types/generated/types'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from 'src/components/commons/hooks/quires/board/useQueryFetchBoard'

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`

export const useMutationLikeBoard = (boardId: IMutationLikeBoardArgs['boardId']) => {
  const router = useRouter()
  const [likeBoardMutation] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(
    LIKE_BOARD
  )
  const likeBoard = async (): Promise<void> => {
    try {
      const result = await likeBoardMutation({
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

  return { likeBoard }
}
