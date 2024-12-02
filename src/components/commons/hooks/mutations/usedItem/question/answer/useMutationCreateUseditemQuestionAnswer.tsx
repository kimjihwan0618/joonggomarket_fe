import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQueryFetchUseditemQuestionAnswersArgs,
} from 'src/commons/types/generated/types'

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
interface ICreateUsedItemQuestioAnswerProps {
  contents: IMutationCreateUseditemQuestionAnswerArgs['createUseditemQuestionAnswerInput']['contents']
  useditemQuestionId: IQueryFetchUseditemQuestionAnswersArgs['useditemQuestionId']
}

export const useMutationCreateUseditemQuestionAnswer = () => {
  const [createUsedItemQuestionAnswerMutation] = useMutation<
    Pick<IMutation, 'createUseditemQuestionAnswer'>,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER)

  const createUsedItemQuestionAnswer = async (
    props: ICreateUsedItemQuestioAnswerProps
  ): Promise<void> => {
    try {
      const { useditemQuestionId, contents } = props
      const result = await createUsedItemQuestionAnswerMutation({
        variables: {
          useditemQuestionId,
          createUseditemQuestionAnswerInput: {
            contents,
          },
        },
        update(cache, { data }) {
          const newUseditemQuestionAnswerRef = cache.writeFragment({
            data: {
              __typename: 'UseditemQuestionAnswer',
              ...data?.createUseditemQuestionAnswer,
            },
            fragment: gql`
              fragment NewUseditemQuestionAnswer on UseditemQuestionAnswer {
                _id
                contents
                updatedAt
                user {
                  _id
                  name
                  picture
                }
              }
            `,
          })

          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers(existingUseditemQuestionAnswers = []) {
                return [...existingUseditemQuestionAnswers, newUseditemQuestionAnswerRef]
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

  return { createUsedItemQuestionAnswer }
}
