import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchPointTransactionsCountArgs } from 'src/commons/types/generated/types'

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactionsCount($status: String) {
    fetchPointTransactionsCount(status: $status)
  }
`

export const useQueryFetchPointTransactionsCount = () => {
  const result = useQuery<
    Pick<IQuery, 'fetchPointTransactionsCount'>,
    IQueryFetchPointTransactionsCountArgs
  >(FETCH_POINT_TRANSACTIONS)

  return result
}
