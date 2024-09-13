import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationUpdateUserArgs,
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
  const [updateUserMutation] = useMutation<Pick<IMutation, 'updateUser'>, IMutationUpdateUserArgs>(
    UPDATE_USER
  )

  const updateUser = async (props: IUpdateUserInput): Promise<void> => {
    try {
      const result = await updateUserMutation({
        variables: {
          updateUserInput: {
            picture: props.picture,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGEDIN,
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { updateUser }
}
