import * as S from 'src/components/commons/layout/header/Header.styles'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <S.Header>
      <S.HeaderInner>
        <Link href="/boards">
          <S.Logo>
            <Image src="/images/logo.png" alt="App Lo" width={210} height={32} />
          </S.Logo>
        </Link>
        <S.ButtonWrapper>
          <Link href="/login">
            <S.LodginButton>로그인</S.LodginButton>
          </Link>
          <Link href="/signup">
            <S.JoinButton>회원가입</S.JoinButton>
          </Link>
        </S.ButtonWrapper>
      </S.HeaderInner>
    </S.Header>
  )
}
