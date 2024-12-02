import { gql, useMutation } from '@apollo/client'
import type {
  IMutation,
  IMutationUpdateBoardCommentArgs,
  IQueryFetchBoardCommentsArgs,
} from 'src/commons/types/generated/types'
import { UseFormGetValues } from 'react-hook-form'
import { IBoardCommentWriterForm } from 'src/components/units/board/detail/comment/write/BoardCommentWrite.schema'
import { Modal } from 'antd'

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $boardCommentId: ID!
    $password: String
    $updateBoardCommentInput: UpdateBoardCommentInput!
  ) {
    updateBoardComment(
      boardCommentId: $boardCommentId
      password: $password
      updateBoardCommentInput: $updateBoardCommentInput
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`

interface IuseMutationUpdateBoardCommentProps {
  getValues: UseFormGetValues<IBoardCommentWriterForm>
  boardCommentId: IMutationUpdateBoardCommentArgs['boardCommentId']
}

export const useMutationUpdateBoardComment = (boardId: IQueryFetchBoardCommentsArgs['boardId']) => {
  const [updateBoardCommentMutation] = useMutation<
    Pick<IMutation, 'updateBoardComment'>,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT)

  const updateBoardComment = async (props: IuseMutationUpdateBoardCommentProps): Promise<void> => {
    try {
      const { rating, contents, password } = props.getValues()
      const result = await updateBoardCommentMutation({
        variables: {
          boardCommentId: props.boardCommentId,
          password,
          updateBoardCommentInput: {
            contents,
            rating,
          },
        },
        update(cache, { data }) {
          const updatedBoardComment = data.updateBoardComment
          cache.modify({
            fields: {
              fetchBoardComments(existingBoardComments = [], { readField }) {
                if (readField('_id', existingBoardComments) === updatedBoardComment._id) {
                  return {
                    ...existingBoardComments,
                    ...updatedBoardComment,
                  }
                }
                return existingBoardComments // 일치하지 않으면 기존 댓글 반환
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_BOARD_COMMENTS
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { updateBoardComment }
}
