import { gql, useMutation } from '@apollo/client'
import type {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from 'src/components/commons/hooks/quires/usedItem/question/answer/useQueryFetchUsedItemQuestionAnswers'

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(useditemQuestionAnswerId: $useditemQuestionAnswerId)
  }
`

export const useMutationDeleteUseditemQuestionAnswer = (props) => {
  const [deleteUsedItemQuestionAnswerMutation, { loading }] = useMutation<
    Pick<IMutation, 'deleteUseditemQuestionAnswer'>,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER)

  const deleteUsedItemQuestionAnswer = async (): Promise<void> => {
    try {
      const result = await deleteUsedItemQuestionAnswerMutation({
        variables: {
          useditemQuestionAnswerId: props.deleteQuestionAnswerId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  return { deleteUsedItemQuestionAnswer, loading }
}
