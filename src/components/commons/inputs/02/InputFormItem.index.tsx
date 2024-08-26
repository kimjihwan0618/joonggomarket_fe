import * as S from './InputFormItem.styles'
import type { ChangeEvent, MouseEvent } from 'react'
import theme from 'src/commons/styles/theme'

interface IInputWithErrorProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: 'number' | 'text' | 'password' | 'email'
  value?: number | string
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  label: string
  error: string
  width?: string
}

export default function InputWithError(props: IInputWithErrorProps): JSX.Element {
  return (
    <S.Wrapper data-width={props.width ?? '100%'}>
      <S.Label>{props.label}</S.Label>
      <S.InputItem>
        <S.Input
          onChange={props.onChange}
          type={props.type ?? 'text'}
          value={props.value}
          disabled={props.disabled ?? false}
          readOnly={props.readOnly ?? false}
          placeholder={props.placeholder ?? ''}
        />
        <S.Error>{props.error}</S.Error>
      </S.InputItem>
    </S.Wrapper>
  )
}
