import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IQueryFetchUseditemQuestionAnswersArgs,
} from 'src/commons/types/generated/types'
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from 'src/components/commons/hooks/quires/usedItem/question/answer/useQueryFetchUsedItemQuestionAnswers'

export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
      contents
      user {
        name
      }
    }
  }
`

interface IUpdateUseditemQuestionAnswerProps {
  contents: IMutationUpdateUseditemQuestionAnswerArgs['updateUseditemQuestionAnswerInput']['contents']
  useditemQuestionId: IQueryFetchUseditemQuestionAnswersArgs['useditemQuestionId']
  useditemQuestionAnswerId: IMutationUpdateUseditemQuestionAnswerArgs['useditemQuestionAnswerId']
}

export const useMutationUpdateUseditemQuestionAnswer = () => {
  const [updateUsedItemQuestionAnswerMutation] = useMutation<
    Pick<IMutation, 'updateUseditemQuestionAnswer'>,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER)

  const updateUsedItemQuestionAnswer = async (
    props: IUpdateUseditemQuestionAnswerProps
  ): Promise<void> => {
    try {
      const { useditemQuestionAnswerId, contents, useditemQuestionId } = props
      const result = await updateUsedItemQuestionAnswerMutation({
        variables: {
          useditemQuestionAnswerId,
          updateUseditemQuestionAnswerInput: {
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

  return { updateUsedItemQuestionAnswer }
}
