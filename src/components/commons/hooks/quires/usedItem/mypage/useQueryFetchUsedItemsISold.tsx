import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IQueryFetchUseditemsISoldArgs,
} from 'src/commons/types/generated/types'

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      soldAt
      createdAt
    }
  }
`

export const useQueryFetchUsedItemsISold = () => {
  const result = useQuery<Pick<IQuery, 'fetchUseditemsISold'>, IQueryFetchUseditemsISoldArgs>(
    FETCH_USED_ITEMS_I_SOLD
  )

  return result
}
