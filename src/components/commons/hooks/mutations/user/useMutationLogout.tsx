import { gql, useMutation } from '@apollo/client'
import type { IMutation } from 'src/commons/types/generated/types'

export const USER_LOGOUT = gql`
  mutation {
    logoutUser
  }
`

export const useMutationLogoutUser = () => {
  const [logoutUser] = useMutation<Pick<IMutation, 'logoutUser'>>(USER_LOGOUT)

  return { logoutUser }
}
