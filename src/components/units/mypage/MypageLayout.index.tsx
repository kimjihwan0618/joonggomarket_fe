import { useAuth } from 'src/components/commons/hooks/custom/useAuth'
import * as S from './MypageLayout.styles'
import MypageNavigation from './navigation/Navigation.index'

interface IMypageLayoutUIProps {
  children: React.ReactNode
  page: '/market' | '/point' | 'profile'
}

export default function MypageLayoutUI(props: IMypageLayoutUIProps): JSX.Element {
  useAuth()
  return (
    <S.Wrapper>
      <MypageNavigation page={props.page} />
      <S.MypageContentWrapper>{props.children}</S.MypageContentWrapper>
    </S.Wrapper>
  )
}
