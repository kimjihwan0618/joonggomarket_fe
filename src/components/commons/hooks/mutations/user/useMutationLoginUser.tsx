import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IMutation, IMutationLoginUserArgs } from 'src/commons/types/generated/types'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useRecoilState } from 'recoil'
import { accessTokenState, vistedPageState } from 'src/commons/stores'
import { ILoginForm } from 'src/components/units/auth/login/Login.schema'

interface IUseMutationLoginUserProps {
  getValues: UseFormGetValues<ILoginForm>
}

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`

export const useMutationLoginUser = (props: IUseMutationLoginUserProps) => {
  const { moveToPage } = useMoveToPage()
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [vistedPage, setVisitedPage] = useRecoilState(vistedPageState)
  const [loginUserMutation] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(
    LOGIN_USER
  )

  const loginUser = async (): Promise<void> => {
    const { email, password } = props.getValues()
    try {
      const result = await loginUserMutation({
        variables: {
          email,
          password,
        },
      })
      const accessToken = result.data?.loginUser.accessToken
      if (accessToken === undefined) {
        Modal.error({ content: '로그인에 실패했습니다!. 다시 시도해 주세요!' })
        return
      }
      setAccessToken(accessToken)
      !vistedPage ? moveToPage('/')() : moveToPage(vistedPage)()
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { loginUser }
}
