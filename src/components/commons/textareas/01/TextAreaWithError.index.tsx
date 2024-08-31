import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './TextAreaWithError.styles'

interface ITextAreaWithErrorProps {
  // onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  register: UseFormRegisterReturn
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  label?: string
  error?: string
  width?: string
  height: string
}

export default function TextAreaWithError(props: ITextAreaWithErrorProps): JSX.Element {
  return (
    <S.Wrapper data-width={props.width ?? '100%'}>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.TextAreaItem>
        <S.TextArea
          {...props.register}
          disabled={props.disabled ?? false}
          readOnly={props.readOnly ?? false}
          placeholder={props.placeholder ?? ''}
          data-height={props.height}
        />
        {props.error && <S.Error>{props.error}</S.Error>}
      </S.TextAreaItem>
    </S.Wrapper>
  )
}
