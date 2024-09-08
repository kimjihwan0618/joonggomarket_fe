import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchUseditemsArgs } from 'src/commons/types/generated/types'

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
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

export const useQueryFetchUsedItems = () => {
  const result = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(
    FETCH_USED_ITEMS,
    {
      variables: {
        isSoldout: false,
      },
    }
  )

  return result
}
