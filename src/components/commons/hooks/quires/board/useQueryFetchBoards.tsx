import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchBoardsArgs } from 'src/commons/types/generated/types'

export const FETCH_BOARDS = gql`
  query fetchBoards($endDate: DateTime, $startDate: DateTime, $search: String, $page: Int) {
    fetchBoards(endDate: $endDate, startDate: $startDate, search: $search, page: $page) {
      _id
      title
      contents
      writer
      createdAt
    }
  }
`

export const useQueryFetchBoards = () => {
  const result = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS, {
    fetchPolicy: 'cache-first',
  })

  return result
}
