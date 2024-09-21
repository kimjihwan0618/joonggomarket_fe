import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationLoginUserArgs,
  IMutationResetUserPasswordArgs,
} from 'src/commons/types/generated/types'
import { useMutationLoginUser } from './useMutationLoginUser'
import { useMutationLogoutUser } from './useMutationLogout'
import { useMoveToPage } from '../../custom/useMoveToPage'

interface IUseMutationResetUserPasswordProps {
  email: IMutationLoginUserArgs['email']
  password: IMutationLoginUserArgs['password']
  newPassword: IMutationResetUserPasswordArgs['password']
}

export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`

export const useMutationResetUserPassword = (props: IUseMutationResetUserPasswordProps) => {
  const { email, password, newPassword } = props
  const { moveToPage } = useMoveToPage()
  const { loginUser } = useMutationLoginUser()
  const { logoutUser } = useMutationLogoutUser()
  const [resetUserPasswordMutation] = useMutation<
    Pick<IMutation, 'resetUserPassword'>,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD)

  const resetUserPassword = async (): Promise<void> => {
    try {
      const checkResult = await loginUser({ email, password })
      if (checkResult) {
        const resetPasswordResult = await resetUserPasswordMutation({
          variables: {
            password: newPassword,
          },
        })
        if (resetPasswordResult?.data?.resetUserPassword) {
          Modal.success({ content: '비밀번호가 변경되었습니다. 다시 로그인해주세요.' })
          const logoutResult = await logoutUser()
          if (logoutResult?.data?.logoutUser) {
            moveToPage(`/login`)()
          }
        }
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { resetUserPassword }
}
