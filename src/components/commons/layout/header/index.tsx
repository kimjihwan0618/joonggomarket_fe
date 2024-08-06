import * as S from 'src/components/commons/layout/header/Header.styles'
import Image from 'next/image'

export default function Header(): JSX.Element {
  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo>
          <Image src="/images/logo.png" alt="App Lo" width={210} height={32} />
        </S.Logo>
        <S.ButtonWrapper>
          <S.LodginButton>로그인</S.LodginButton>
          <S.JoinButton>회원가입</S.JoinButton>
        </S.ButtonWrapper>
      </S.HeaderInner>
    </S.Header>
  )
}
