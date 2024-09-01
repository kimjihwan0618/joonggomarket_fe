import { gql, useQuery } from '@apollo/client'
import { IQuery } from 'src/commons/types/generated/types'

export const FETCH_USED_ITEMS_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      images
      pickedCount
      price
      updatedAt
      remarks
    }
  }
`

export const useQueryFetchUsedItemsOfTheBest = () => {
  const result = useQuery<Pick<IQuery, 'fetchUseditemsOfTheBest'>>(FETCH_USED_ITEMS_BEST)

  return result
}
