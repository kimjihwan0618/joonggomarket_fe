import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './InputWithError.styles'
import type { ChangeEvent } from 'react'

interface IInputWithErrorProps {
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  register: UseFormRegisterReturn
  type?: 'number' | 'text' | 'password' | 'email'
  value?: number | string
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  label?: string
  error?: string
  width?: string
  color?: string
  style?: object
  maxLength?: number
}

export default function InputWithError(props: IInputWithErrorProps): JSX.Element {
  return (
    <S.Wrapper data-width={props.width ?? '100%'}>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.InputItem>
        <S.Input
          // onChange={props.onChange}
          color={props.color ?? '#000'}
          {...props.register}
          type={props.type ?? 'text'}
          disabled={props.disabled ?? false}
          readOnly={props.readOnly ?? false}
          style={props.style && props.style}
          placeholder={props.placeholder ?? ''}
          maxLength={props.maxLength || undefined}
        />
        {props.error && <S.Error>{props.error}</S.Error>}
      </S.InputItem>
    </S.Wrapper>
  )
}
