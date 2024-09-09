import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from 'src/commons/types/generated/types'
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from 'src/components/commons/hooks/quires/usedItem/question/answer/useQueryFetchUsedItemQuestionAnswers'

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
    }
  }
`
export const useMutationCreateUseditemQuestionAnswer = () => {
  const [createUsedItemQuestionAnswerMutation] = useMutation<
    Pick<IMutation, 'createUseditemQuestionAnswer'>,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER)

  const createUsedItemQuestionAnswer = async (props): Promise<void> => {
    try {
      const { useditemQuestionId, contents } = props
      const result = await createUsedItemQuestionAnswerMutation({
        variables: {
          useditemQuestionId,
          createUseditemQuestionAnswerInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createUsedItemQuestionAnswer }
}
