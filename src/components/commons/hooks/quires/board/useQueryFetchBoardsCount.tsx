import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchBoardsCountArgs } from 'src/commons/types/generated/types'

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($endDate: DateTime, $startDate: DateTime, $search: String) {
    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)
  }
`

export const useQueryFetchBoardsCount = () => {
  const result = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(
    FETCH_BOARDS_COUNT
  )

  return result
}
