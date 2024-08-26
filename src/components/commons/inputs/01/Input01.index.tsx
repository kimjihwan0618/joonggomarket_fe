import * as S from './Input01.styles'
import type { ChangeEvent } from 'react'

interface IInput01Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: 'number' | 'text' | 'password' | 'email'
  value: number | string
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  fullWidth?: boolean
}

export default function Input01(props: IInput01Props): JSX.Element {
  return (
    <S.Input
      onChange={props.onChange}
      type={props.type ?? 'text'}
      value={props.value}
      disabled={props.disabled ?? false}
      readOnly={props.readOnly ?? false}
      placeholder={props.placeholder ?? ''}
      data-fullwidth={props.fullWidth ?? false}
    />
  )
}
