import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from 'src/commons/types/generated/types'

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      createdAt
      useditem {
        name
      }
      statusDetail
      amount
    }
  }
`

export const useQueryFetchPointTransactionsOfSelling = () => {
  const result = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfSelling'>,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING)

  return result
}
