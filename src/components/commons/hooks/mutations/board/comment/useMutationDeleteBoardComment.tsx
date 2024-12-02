import { gql, useMutation } from '@apollo/client'
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQueryFetchBoardCommentsArgs,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`

interface IDeleteBoardCommentProps {
  boardId: IQueryFetchBoardCommentsArgs['boardId']
  deleteCommentId: IMutationDeleteBoardCommentArgs['boardCommentId']
  passwordCheck: IMutationDeleteBoardCommentArgs['password']
}

export const useMutationDeleteBoardComment = (props: IDeleteBoardCommentProps) => {
  const [deleteBoardCommentMutation, { loading }] = useMutation<
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
        update(cache) {
          cache.modify({
            fields: {
              fetchBoardComments(existingBoardComments = [], { readField }) {
                return existingBoardComments.filter(
                  (boardComment) => readField('_id', boardComment) !== props.deleteCommentId
                )
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_BOARD_COMMENTS
      })
      if (!result?.data?.deleteBoardComment) Modal.warning({ content: '비밀번호를 확인해주세요!' })
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  return { deleteBoardComment, loading }
}
