import { gql, useMutation } from '@apollo/client'
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationDeleteUseditemQuestionArgs,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'
import { FETCH_USED_ITEM_QUESTIONS } from '../../../quires/usedItem/question/useQueryFetchUsedItemQuestions'

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`

export const useMutationDeleteUsedItemQuestion = (props) => {
  const [deleteUsedItemMutation] = useMutation<
    Pick<IMutation, 'deleteUseditemQuestion'>,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION)

  const deleteUsedItemQuestion = async (): Promise<void> => {
    try {
      if (props.passwordCheck === '') {
        Modal.warning({ content: '비밀번호를 입력해주세요.' })
        return
      }
      const result = await deleteUsedItemMutation({
        variables: {
          useditemQuestionId: props.deleteQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  return { deleteUsedItemQuestion }
}
