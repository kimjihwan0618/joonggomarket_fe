import type { ChangeEvent, MouseEvent, Dispatch, SetStateAction } from 'react'
import { IMutationLoginUserArgs } from 'src/commons/types/generated/types'

export interface ILoginUIProps {
  email: IMutationLoginUserArgs['email']
  password: IMutationLoginUserArgs['password']
  setEmail: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  emailError: string
  setEmailError: Dispatch<SetStateAction<string>>
  passwordError: string
  setPasswordError: Dispatch<SetStateAction<string>>
  formValidation: boolean
  onClickLogin: (event: MouseEvent<HTMLButtonElement>) => Promise<void>
  onChangeFormInput: (
    event: ChangeEvent<HTMLInputElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>>,
    message: string
  ) => void
}
