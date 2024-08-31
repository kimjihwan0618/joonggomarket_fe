import { gql, useMutation } from '@apollo/client'
import type { IMutation, IMutationDeleteBoardCommentArgs } from 'src/commons/types/generated/types'
import { FETCH_BOARD_COMMENTS } from 'src/components/commons/hooks/quires/board/comment/useQueryFetchBoardComments'
import { Modal } from 'antd'

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`

export const useMutationDeleteBoardComment = (props) => {
  const [deleteBoardCommentMutation] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT)

  const deleteBoardComment = async (): Promise<void> => {
    try {
      if (props.passwordCheck === '') {
        Modal.warning({ content: '비밀번호를 입력해주세요.' })
        return
      }
      const result = await deleteBoardCommentMutation({
        variables: {
          boardCommentId: props.deleteCommentId,
          password: props.passwordCheck,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: props.boardId },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  return { deleteBoardComment }
}
