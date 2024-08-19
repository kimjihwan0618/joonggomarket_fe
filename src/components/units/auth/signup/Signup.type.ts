import type { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from 'react'
import { ICreateUserInput } from 'src/commons/types/generated/types'

export interface ISignupUIProps {
  email: ICreateUserInput['email']
  setEmail: Dispatch<SetStateAction<string>>
  name: ICreateUserInput['name']
  setName: Dispatch<SetStateAction<string>>
  password: ICreateUserInput['password']
  setPassword: Dispatch<SetStateAction<string>>
  passwordCheck: ICreateUserInput['password']
  setPasswordCheck: Dispatch<SetStateAction<string>>
  emailError: string
  setEmailError: Dispatch<SetStateAction<string>>
  nameError: string
  setNameError: Dispatch<SetStateAction<string>>
  passwordError: string
  setPasswordError: Dispatch<SetStateAction<string>>
  passwordCheckError: string
  setPasswordCheckError: Dispatch<SetStateAction<string>>
  formValidation: boolean
  onClickSignup: (event: MouseEvent<HTMLButtonElement>) => Promise<void>
  onChangeFormInput: (
    event: ChangeEvent<HTMLInputElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>>,
    message: string
  ) => void
}
