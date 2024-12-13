import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import type { IMutation } from 'src/commons/types/generated/types'

export const USER_LOGOUT = gql`
  mutation {
    logoutUser
  }
`

export const useMutationLogout = () => {
  const [logoutUserMutation] = useMutation<Pick<IMutation, 'logoutUser'>>(USER_LOGOUT)
  const router = useRouter()

  const logoutUser = async () => {
    try {
      const result = await logoutUserMutation()
      if (result?.data?.logoutUser) {
        router.reload()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { logoutUser }
}
