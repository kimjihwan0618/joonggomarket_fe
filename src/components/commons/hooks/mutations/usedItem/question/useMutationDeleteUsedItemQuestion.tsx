import { gql, useMutation } from '@apollo/client'
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationDeleteUseditemQuestionArgs,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'
import { FETCH_USED_ITEM_QUESTIONS } from '../../../quires/usedItem/question/useQueryFetchUsedItemQuestions'

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`

export const useMutationDeleteUsedItemQuestion = (props) => {
  const [deleteUsedItemMutation, { loading }] = useMutation<
    Pick<IMutation, 'deleteUseditemQuestion'>,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION)

  const deleteUsedItemQuestion = async (): Promise<void> => {
    try {
      const result = await deleteUsedItemMutation({
        variables: {
          useditemQuestionId: props.deleteQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: props.useditemId },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  return { deleteUsedItemQuestion, loading }
}
