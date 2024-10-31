import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchPointTransactionsOfBuyingArgs } from 'src/commons/types/generated/types'

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      createdAt
      amount
      balance
      useditem {
        name
      }
      statusDetail
    }
  }
`

export const useQueryFetchPointTransactionsOfBuying = () => {
  const result = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfBuying'>,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING)

  return result
}
