import { gql, useMutation } from '@apollo/client'
import type {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IQueryFetchUseditemQuestionAnswersArgs,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from 'src/components/commons/hooks/quires/usedItem/question/answer/useQueryFetchUsedItemQuestionAnswers'

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(useditemQuestionAnswerId: $useditemQuestionAnswerId)
  }
`

interface IDeleteUseditemQuestionAnswerProps {
  useditemQuestionId: IQueryFetchUseditemQuestionAnswersArgs['useditemQuestionId']
  deleteQuestionAnswerId: IMutationDeleteUseditemQuestionAnswerArgs['useditemQuestionAnswerId']
}

export const useMutationDeleteUseditemQuestionAnswer = (
  props: IDeleteUseditemQuestionAnswerProps
) => {
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
        update(cache) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers(existingUseditemQuestionAnswers = [], { readField }) {
                return existingUseditemQuestionAnswers.filter(
                  (useditemQuestionAnswer) =>
                    readField('_id', useditemQuestionAnswer) !== props.deleteQuestionAnswerId
                )
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_USED_ITEM_QUESTION_ANSWERS
      })
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  return { deleteUsedItemQuestionAnswer, loading }
}
