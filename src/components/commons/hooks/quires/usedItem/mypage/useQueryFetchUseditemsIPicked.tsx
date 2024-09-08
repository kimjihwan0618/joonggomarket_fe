import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchUseditemsIPickedArgs } from 'src/commons/types/generated/types'

export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      images
      pickedCount
      price
      updatedAt
      remarks
      tags
      soldAt
      seller {
        name
        picture
      }
    }
  }
`

export const useQueryFetchUseditemsIPicked = () => {
  const result = useQuery<Pick<IQuery, 'fetchUseditemsIPicked'>, IQueryFetchUseditemsIPickedArgs>(
    FETCH_USED_ITEMS_I_PICKED
  )

  return result
}
