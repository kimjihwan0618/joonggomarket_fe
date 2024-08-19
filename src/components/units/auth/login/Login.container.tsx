import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import LoginUI from './Login.presenter'
import { useMutation } from '@apollo/client'
import { IMutation, IMutationLoginUserArgs } from 'src/commons/types/generated/types'
import { LOGIN_USER } from './Login.queries'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'
import { accessTokenState } from 'src/commons/stores'

export default function Login(): JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formValidation, setFormValidation] = useState(false)
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER)

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
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
      localStorage.setItem('accessToken', accessToken)
      setAccessToken(accessToken)
      void router.push('/')
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  const onChangeFormInput = (
    event: ChangeEvent<HTMLInputElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>> | null,
    message: string
  ): void => {
    setInput(event.target.value)
    if (setError) {
      if (event.target.value !== '') {
        setError('')
      } else {
        setError(message)
      }
    }
  }

  useEffect(() => {
    email && password ? setFormValidation(true) : setFormValidation(false)
  }, [email, password])

  return (
    <LoginUI
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      emailError={emailError}
      setEmailError={setEmailError}
      passwordError={passwordError}
      setPasswordError={setPasswordError}
      onChangeFormInput={onChangeFormInput}
      formValidation={formValidation}
      onClickLogin={onClickLogin}
    />
  )
}
