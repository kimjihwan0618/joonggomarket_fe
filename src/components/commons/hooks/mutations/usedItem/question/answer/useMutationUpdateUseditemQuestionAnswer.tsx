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
        update(cache, { data }) {
          const updatedUseditemQuestionAnswer = data.updateUseditemQuestionAnswer
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers(existingUseditemQuestionAnswers = [], { readField }) {
                if (
                  readField('_id', existingUseditemQuestionAnswers) ===
                  updatedUseditemQuestionAnswer._id
                ) {
                  return {
                    ...existingUseditemQuestionAnswers,
                    ...updatedUseditemQuestionAnswer,
                  }
                }
                return existingUseditemQuestionAnswers // 일치하지 않으면 기존 댓글 반환
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_USED_ITEM_QUESTION_ANSWERS
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { updateUsedItemQuestionAnswer }
}
