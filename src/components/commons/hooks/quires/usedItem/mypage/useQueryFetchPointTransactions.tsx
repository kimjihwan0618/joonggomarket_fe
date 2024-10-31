import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchPointTransactionsArgs } from 'src/commons/types/generated/types'

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      createdAt
      status
      amount
      balance
    }
  }
`

export const useQueryFetchPointTransactions = () => {
  const result = useQuery<Pick<IQuery, 'fetchPointTransactions'>, IQueryFetchPointTransactionsArgs>(
    FETCH_POINT_TRANSACTIONS
  )

  return result
}
