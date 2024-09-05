import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchUseditemQuestionsArgs } from 'src/commons/types/generated/types'

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
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

export const useQueryFetchUsedItemQuestions = (
  useditemId: IQueryFetchUseditemQuestionsArgs['useditemId']
) => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestions'>,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId },
    skip: !useditemId,
  })
  return { data, fetchMore }
}
