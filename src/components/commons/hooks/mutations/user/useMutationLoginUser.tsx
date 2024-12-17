import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IMutation, IMutationLoginUserArgs } from 'src/commons/types/generated/types'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useRecoilState } from 'recoil'
import { accessTokenState, vistedPageState } from 'src/commons/stores'

interface IUseMutationLoginUserProps {
  email: IMutationLoginUserArgs['email']
  password: IMutationLoginUserArgs['password']
  pageMoveFlag?: boolean
}

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`

export const useMutationLoginUser = () => {
  const { moveToPage } = useMoveToPage()
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [vistedPage, setVisitedPage] = useRecoilState(vistedPageState)
  const [loginUserMutation, { data, loading }] = useMutation<
    Pick<IMutation, 'loginUser'>,
    IMutationLoginUserArgs
  >(LOGIN_USER)

  const loginUser = async (props: IUseMutationLoginUserProps): Promise<boolean> => {
    const { email, password } = props
    try {
      const result = await loginUserMutation({
        variables: {
          email,
          password,
        },
      })
      const accessToken = result?.data?.loginUser.accessToken
      if (accessToken === undefined) {
        Modal.error({ content: '로그인에 실패했습니다!. 다시 시도해 주세요!' })
        return false
      }
      setAccessToken(accessToken)
      if (props.pageMoveFlag) !vistedPage ? moveToPage('/')() : moveToPage(vistedPage)()
      return true
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { loginUser, data, loading }
}
