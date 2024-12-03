import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from 'src/commons/types/generated/types'
import { useRouter } from 'next/router'
import { FETCH_USER_LOGGEDIN } from '../../quires/user/useQueryFetchUserLoggedIn'

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`

export const useMutationCreatePointTransactionOfLoading = () => {
  const [createPointTransactionOfLoadingMutation, { loading }] = useMutation<
    Pick<IMutation, 'createPointTransactionOfLoading'>,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING)

  const createPointTransactionOfLoading = async (
    impUid: IMutationCreatePointTransactionOfLoadingArgs['impUid']
  ): Promise<void> => {
    try {
      const result = await createPointTransactionOfLoadingMutation({
        variables: {
          impUid,
        },
        update(cache, { data }) {
          if (!data) return // 데이터가 없으면 아무 작업도 하지 않음

          const newAmount = data.createPointTransactionOfLoading.amount

          // 기존 캐시에서 fetchUserLoggedIn 데이터를 가져오기
          const existingData = cache.readQuery<Pick<IQuery, 'fetchUserLoggedIn'>>({
            query: FETCH_USER_LOGGEDIN,
          })

          if (existingData?.fetchUserLoggedIn) {
            // 캐시를 업데이트하여 새로운 포인트 반영
            cache.writeQuery({
              query: FETCH_USER_LOGGEDIN,
              data: {
                fetchUserLoggedIn: {
                  ...existingData.fetchUserLoggedIn,
                  userPoint: {
                    ...existingData.fetchUserLoggedIn.userPoint,
                    amount: existingData.fetchUserLoggedIn.userPoint.amount + newAmount,
                  },
                },
              },
            })
          }
        },
      })
      // 리패치 제거
      // FETCH_USER_LOGGEDIN
      Modal.success({
        content: `${new Intl.NumberFormat('en-US').format(result?.data.createPointTransactionOfLoading.amount)}원 포인트 충전이 완료되었습니다.`,
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createPointTransactionOfLoading, loading }
}
