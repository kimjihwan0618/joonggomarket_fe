import theme from 'src/commons/styles/theme'
import Button02 from 'src/components/commons/buttons/02/Button02.index'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import * as S from 'src/components/commons/layout/header/Header.styles'

export default function ButtonsUI(): JSX.Element {
  const { moveToPage } = useMoveToPage()

  return (
    <S.ButtonWrapper>
      <Button02 onClick={moveToPage('/login')} name={'로그인'} />
      <Button02 onClick={moveToPage('/signup')} background={theme.colors.main} name={'회원가입'} />
    </S.ButtonWrapper>
  )
}
