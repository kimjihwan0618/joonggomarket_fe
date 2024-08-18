import { useRouter } from 'next/router'
import * as S from './Login.styles'
import Image from 'next/image'

export default function LoginUI(): JSX.Element {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.LoginFormBox>
        <S.Logo>
          <Image src="/images/logo_light.png" alt="joongomarket 로고" width={288} height={44} />
        </S.Logo>
        <S.InputItem>
          <S.EmailInput placeholder="이메일을 입력해주세요." />
          <S.ValidationText>이메일은 필수 입력입니다.</S.ValidationText>
        </S.InputItem>
        <S.InputItem>
          <S.PasswordInput placeholder="비밀번호를 입력해주세요." />
          <S.ValidationText>비밀번호는 필수 입력입니다.</S.ValidationText>
        </S.InputItem>
        <S.LoginButton data-disable={false}>로그인하기</S.LoginButton>
        <S.ButtonListWrapper>
          <S.BottomButton>이메일 찾기</S.BottomButton>
          <S.BottomButton>비밀번호 찾기</S.BottomButton>
          <S.BottomButton onClick={() => router.push('/signup')}>회원가입</S.BottomButton>
        </S.ButtonListWrapper>
      </S.LoginFormBox>
    </S.Wrapper>
  )
}
