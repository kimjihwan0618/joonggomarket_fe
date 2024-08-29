import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDeleteBoardsArgs,
} from 'src/commons/types/generated/types'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useRouter } from 'next/router'

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`

export const useMutationDeletaBoard = (boardId: IMutationDeleteBoardArgs['boardId']) => {
  const router = useRouter()
  const { moveToPage } = useMoveToPage()
  const [deleteBoardMutation] = useMutation<
    Pick<IMutation, 'deleteBoard'>,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD)
  const deleteBoard = async (): Promise<void> => {
    try {
      const result = await deleteBoardMutation({
        variables: {
          boardId,
        },
      })
      if (result?.data?.deleteBoard) {
        Modal.success({ content: '해당 게시글이 삭제되었습니다.' })
        moveToPage('/boards')()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { deleteBoard }
}
