import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import SignupUI from './Signup.presenter'
import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { IMutation, IMutationCreateUserArgs } from 'src/commons/types/generated/types'
import { CREATE_USER } from './Signup.queries'
import { useRouter } from 'next/router'

export default function Signup(): JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordCheckError, setPasswordCheckError] = useState('')
  const [formValidation, setFormValidation] = useState(false)
  const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(
    CREATE_USER
  )

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

  const onClickSignup = async (): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            name,
            password,
          },
        },
      })
      Modal.success({ content: '회원가입이 완료되었습니다.' })
      router.push('/login')
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  useEffect(() => {
    email && name && password && passwordCheck ? setFormValidation(true) : setFormValidation(false)
  }, [email, name, password, passwordCheck])

  return (
    <SignupUI
      onChangeFormInput={onChangeFormInput}
      email={email}
      setEmail={setEmail}
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      passwordCheck={passwordCheck}
      setPasswordCheck={setPasswordCheck}
      emailError={emailError}
      setEmailError={setEmailError}
      nameError={nameError}
      setNameError={setNameError}
      passwordError={passwordError}
      setPasswordError={setPasswordError}
      passwordCheckError={passwordCheckError}
      setPasswordCheckError={setPasswordCheckError}
      formValidation={formValidation}
      onClickSignup={onClickSignup}
    />
  )
}
