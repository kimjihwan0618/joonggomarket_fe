import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { UseFormGetValues } from 'react-hook-form'
import type {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IQueryFetchUseditemQuestionsArgs,
} from 'src/commons/types/generated/types'
import { IUsedItemQuestionWriteForm } from 'src/components/units/useditem/detail/question/write/UsedItemQuestionWrite.schema'

export const CREATE_USED_ITEM_COMMENTS = gql`
  mutation createUseditemQuestion(
    $useditemId: ID!
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
  ) {
    createUseditemQuestion(
      useditemId: $useditemId
      createUseditemQuestionInput: $createUseditemQuestionInput
    ) {
      _id
      contents
    }
  }
`
export const useMutationCreateUsedItemQuestion = (
  useditemId: IQueryFetchUseditemQuestionsArgs['useditemId']
) => {
  const [createUsedItemQuestionMutation] = useMutation<
    Pick<IMutation, 'createUseditemQuestion'>,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_COMMENTS)

  const createUsedItemQuestion = async (
    getValues: UseFormGetValues<IUsedItemQuestionWriteForm>
  ): Promise<void> => {
    try {
      const { contents } = getValues()
      const result = await createUsedItemQuestionMutation({
        variables: {
          useditemId,
          createUseditemQuestionInput: {
            contents,
          },
        },
        update(cache, { data }) {
          const newUseditemQuestionRef = cache.writeFragment({
            data: {
              __typename: 'UseditemQuestion',
              ...data?.createUseditemQuestion,
            },
            fragment: gql`
              fragment NewUseditemQuestion on UseditemQuestion {
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
              fetchUseditemQuestions(existingUseditemQuestions = []) {
                return [...existingUseditemQuestions, newUseditemQuestionRef]
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

  return { createUsedItemQuestion }
}
