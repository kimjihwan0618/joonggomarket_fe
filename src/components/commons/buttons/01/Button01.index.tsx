import * as S from './Button01.styles'
import Image from 'next/image'
import type { MouseEvent } from 'react'
import theme from 'src/commons/styles/theme'

type ThemeColorValues = (typeof theme.colors)[keyof typeof theme.colors]

interface IButton01Props {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  background?: ThemeColorValues
  color?: string
  iconSrc?: string
  width?: '01' | '02' | '03' | '04'
  name: string
}

export default function Button01(props: IButton01Props): JSX.Element {
  return (
    <S.Button
      onClick={props.onClick}
      disabled={props.disabled ?? false}
      data-background={props.background ?? 'white'}
      data-width={props.width ?? '01'}
    >
      {props.iconSrc && <Image src={props.iconSrc} width={18} height={18} />}
      <S.Text data-color={props.color ?? theme.colors.dark01}>{props.name}</S.Text>
    </S.Button>
  )
}
