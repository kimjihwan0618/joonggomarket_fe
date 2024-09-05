import { useAuth } from 'src/components/commons/hooks/custom/useAuth'
import * as S from './Mypage.styles'

interface MypageWrapperUIProps {
  children: React.ReactNode
}

export default function MypageWrapperUI(props: MypageWrapperUIProps): JSX.Element {
  useAuth()
  return <S.Wrapper>{props.children}</S.Wrapper>
}
