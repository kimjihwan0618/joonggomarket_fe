import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from 'src/commons/types/generated/types'

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      createdAt
      impUid
      statusDetail
      amount
    }
  }
`

export const useQueryFetchPointTransactionsOfLoading = () => {
  const result = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfLoading'>,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING)

  return result
}
