import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IQuery,
} from 'src/commons/types/generated/types'
import { useRouter } from 'next/router'
import { FETCH_USER_LOGGEDIN } from '../../quires/user/useQueryFetchUserLoggedIn'
import { FETCH_USED_ITEM } from '../../quires/usedItem/useQueryFetchUsedItem'

export const CREATE_POINT_TRANSACTION_BUY_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      soldAt
      price
    }
  }
`

export const useMutationCreatePointTransactionOfBuyingAndSelling = () => {
  const router = useRouter()
  const [createPointTransactionOfBuyingAndSellingMutation, { loading }] = useMutation<
    Pick<IMutation, 'createPointTransactionOfBuyingAndSelling'>,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_BUY_SELLING)

  const createPointTransactionOfBuyingAndSelling = async (): Promise<void> => {
    if (typeof router.query.useditemId !== 'string') {
      Modal.error({ content: '시스템에 문제가 있습니다.' })
      return
    }
    try {
      const result = await createPointTransactionOfBuyingAndSellingMutation({
        variables: {
          useritemId: router.query.useditemId,
        },
        update(cache, { data }) {
          if (!data) return // 데이터가 없으면 아무 작업도 하지 않음

          const usedItem = data.createPointTransactionOfBuyingAndSelling
          const price = usedItem.price
          const existingData1 = cache.readQuery<Pick<IQuery, 'fetchUserLoggedIn'>>({
            query: FETCH_USER_LOGGEDIN,
          })
          const existingData2 = cache.readQuery<Pick<IQuery, 'fetchUseditem'>>({
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query.useditemId },
          })

          if (existingData1?.fetchUserLoggedIn) {
            cache.writeQuery({
              query: FETCH_USER_LOGGEDIN,
              data: {
                fetchUserLoggedIn: {
                  ...existingData1.fetchUserLoggedIn,
                  userPoint: {
                    ...existingData1.fetchUserLoggedIn.userPoint,
                    amount: existingData1.fetchUserLoggedIn.userPoint.amount - price, // amount에서 price 만큼 차감
                  },
                },
              },
            })
          }

          // fetchUsedItem 캐시 업데이트
          cache.writeQuery({
            query: FETCH_USED_ITEM,
            data: {
              fetchUseditem: {
                ...existingData2.fetchUseditem,
                soldAt: usedItem.soldAt,
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_USED_ITEM
        // FETCH_USER_LOGGEDIN
      })
      Modal.success({ content: '해당제품 구입이 완료되었습니다.' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createPointTransactionOfBuyingAndSelling, loading }
}
