import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from 'src/commons/types/generated/types'
import { useRouter } from 'next/router'
import { FETCH_USER_LOGGEDIN } from '../../quires/user/useQueryFetchUserLoggedIn'
import { FETCH_POINT_TRANSACTIONS } from '../../quires/usedItem/mypage/useQueryFetchPointTransactions'
import { FETCH_POINT_TRANSACTIONS_OF_LOADING } from '../../quires/usedItem/mypage/useQueryFetchPointTransactionsOfLoading'

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
        refetchQueries: [
          {
            query: FETCH_USER_LOGGEDIN,
          },
          {
            query: FETCH_POINT_TRANSACTIONS,
          },
          {
            query: FETCH_POINT_TRANSACTIONS_OF_LOADING,
          },
        ],
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
