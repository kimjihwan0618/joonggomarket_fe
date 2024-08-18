import { useRouter } from 'next/router'
import * as S from './Signup.styles'
import Image from 'next/image'

export default function SignupUI(): JSX.Element {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.PageBackButton onClick={() => router.back()}>
        <Image src="/images/ic_close-white.png" width={24} height={24} alt="이전 페이지 버튼" />
      </S.PageBackButton>
      <S.SignupFormBox>
        <S.PageTitle>회원가입</S.PageTitle>
        <S.InputItem>
          <S.EmailInput placeholder="이메일을 입력해주세요." />
          <S.ValidationText>이메일은 필수 입력입니다.</S.ValidationText>
        </S.InputItem>
        <S.InputItem>
          <S.NameInput placeholder="이름을 입력해주세요." />
          <S.ValidationText>이름은 필수 입력입니다.</S.ValidationText>
        </S.InputItem>
        <S.InputItem>
          <S.PasswordInput placeholder="비밀번호를 입력해주세요." />
          <S.ValidationText>비밀번호는 필수 입력입니다.</S.ValidationText>
        </S.InputItem>
        <S.InputItem>
          <S.PasswordInput placeholder="비밀번호를 재입력해주세요." />
          <S.ValidationText>비밀번호를 확인해주세요.</S.ValidationText>
        </S.InputItem>
        <S.SignupButton data-disable={false}>회원가입하기</S.SignupButton>
      </S.SignupFormBox>
    </S.Wrapper>
  )
}
