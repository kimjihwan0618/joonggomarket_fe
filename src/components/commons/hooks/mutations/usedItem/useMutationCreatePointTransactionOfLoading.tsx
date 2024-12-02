import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from 'src/commons/types/generated/types'
import { useRouter } from 'next/router'

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`

export const useMutationCreatePointTransactionOfLoading = () => {
  const router = useRouter()
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
          cache.modify({
            fields: {
              // fetchUserLoggedIn(existingUserData = {}) {
              //   console.log(data)
              //   return {
              //     ...existingUserData,
              //     userPoint: {
              //       ...existingUserData.userPoint,
              //       amount:
              //         (existingUserData.userPoint.amount || 0) +
              //         (data?.createPointTransactionOfLoading.amount || 0),
              //     },
              //   }
              // },
            },
          })
        },
        // 리패치 제거
        // FETCH_USER_LOGGEDIN
        // refetchQueries: [
        //   {
        //     query: FETCH_USER_LOGGEDIN,
        //   },
        //   {
        //     query: FETCH_POINT_TRANSACTIONS,
        //   },
        //   {
        //     query: FETCH_POINT_TRANSACTIONS_OF_LOADING,
        //   },
        // ],
      })
      Modal.success({
        content: `${new Intl.NumberFormat('en-US').format(result?.data.createPointTransactionOfLoading.amount)}원 포인트 충전이 완료되었습니다.`,
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createPointTransactionOfLoading, loading }
}
