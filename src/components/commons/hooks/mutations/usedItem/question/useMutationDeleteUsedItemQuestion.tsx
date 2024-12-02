import { gql, useMutation } from '@apollo/client'
import type {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQueryFetchUseditemQuestionsArgs,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`

interface IDeleteUsedItemQuestionProps {
  useditemId: IQueryFetchUseditemQuestionsArgs['useditemId']
  deleteQuestionId: IMutationDeleteUseditemQuestionArgs['useditemQuestionId']
}

export const useMutationDeleteUsedItemQuestion = (props: IDeleteUsedItemQuestionProps) => {
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
        update(cache) {
          cache.modify({
            fields: {
              fetchUseditemQuestions(existingUseditemQuestions = [], { readField }) {
                return existingUseditemQuestions.filter(
                  (useditemQuestion) =>
                    readField('_id', useditemQuestion) !== props.deleteQuestionId
                )
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_USED_ITEM_QUESTIONS
      })
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  return { deleteUsedItemQuestion, loading }
}
