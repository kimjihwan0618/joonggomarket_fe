import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchUseditemQuestionAnswersArgs } from 'src/commons/types/generated/types'

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      updatedAt
      user {
        _id
        name
        picture
      }
    }
  }
`

export const useQueryFetchUsedItemQuestionAnswers = (
  useditemQuestionId: IQueryFetchUseditemQuestionAnswersArgs['useditemQuestionId']
) => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestionAnswers'>,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId },
    skip: !useditemQuestionId,
  })
  return { data, fetchMore }
}
