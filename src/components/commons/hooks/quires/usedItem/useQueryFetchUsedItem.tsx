import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchUseditemArgs } from 'src/commons/types/generated/types'

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      seller {
        _id
        name
        picture
      }
      updatedAt
      useditemAddress {
        lat
        lng
        address
        addressDetail
        zipcode
      }
      remarks
      pickedCount
      price
      images
      contents
      tags
    }
  }
`

export const useQueryFetchUsedItem = (useditemId: IQueryFetchUseditemArgs['useditemId']) => {
  const { data } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(
    FETCH_USED_ITEM,
    {
      variables: { useditemId },
      skip: !useditemId,
    }
  )

  return { data }
}
