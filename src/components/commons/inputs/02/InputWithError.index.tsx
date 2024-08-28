import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './InputWithError.styles'
import type { ChangeEvent } from 'react'
import { DefaultValue } from 'recoil'

interface IInputWithErrorProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  register: UseFormRegisterReturn
  type?: 'number' | 'text' | 'password' | 'email'
  value?: number | string
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  label: string
  error?: string
  width?: string
}

export default function InputWithError(props: IInputWithErrorProps): JSX.Element {
  return (
    <S.Wrapper data-width={props.width ?? '100%'}>
      <S.Label>{props.label}</S.Label>
      <S.InputItem>
        <S.Input
          {...props.register}
          onChange={props.onChange}
          type={props.type ?? 'text'}
          disabled={props.disabled ?? false}
          readOnly={props.readOnly ?? false}
          placeholder={props.placeholder ?? ''}
        />
        {props.error && <S.Error>{props.error}</S.Error>}
      </S.InputItem>
    </S.Wrapper>
  )
}
