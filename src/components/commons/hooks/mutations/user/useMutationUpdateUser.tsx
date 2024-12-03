import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationUpdateUserArgs,
  IQuery,
  IUpdateUserInput,
} from 'src/commons/types/generated/types'
import { FETCH_USER_LOGGEDIN } from '../../quires/user/useQueryFetchUserLoggedIn'

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
      picture
    }
  }
`

export const useMutationUpdateUser = () => {
  const [updateUserMutation, { loading }] = useMutation<
    Pick<IMutation, 'updateUser'>,
    IMutationUpdateUserArgs
  >(UPDATE_USER)

  const updateUser = async (props: IUpdateUserInput): Promise<void> => {
    try {
      const result = await updateUserMutation({
        variables: {
          updateUserInput: {
            picture: props.picture,
          },
        },
        update(cache, { data }) {
          if (!data) return // 데이터가 없으면 아무 작업도 하지 않음

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
                  picture: data.updateUser.picture,
                },
              },
            })
          }
        },
        // 리패치 제거
        // FETCH_USER_LOGGEDIN
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { updateUser, loading }
}
