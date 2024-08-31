import { gql, useMutation } from '@apollo/client'
import type {
  IMutation,
  IMutationUpdateBoardCommentArgs,
  IQueryFetchBoardCommentsArgs,
} from 'src/commons/types/generated/types'
import { FETCH_BOARD_COMMENTS } from 'src/components/commons/hooks/quires/board/comment/useQueryFetchBoardComments'
import { UseFormGetValues } from 'react-hook-form'
import { IBoardCommentWriterForm } from 'src/components/units/board/detail/comment/write/BoardCommentWriter.schema'
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
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { updateBoardComment }
}
