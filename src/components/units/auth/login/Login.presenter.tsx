import { useRouter } from 'next/router'
import * as S from './Login.styles'
import Image from 'next/image'
import { ILoginUIProps } from './Login.type'

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.LoginFormBox>
        <S.Logo>
          <Image src="/images/logo_light.png" alt="joongomarket 로고" width={288} height={44} />
        </S.Logo>
        <S.InputItem>
          <S.EmailInput
            onChange={(e) => {
              props.onChangeFormInput(
                e,
                props.setEmail,
                props.setEmailError,
                '이메일을 입력해주세요.'
              )
            }}
            placeholder="이메일을 입력해주세요."
          />
          <S.ValidationText>{props.emailError}</S.ValidationText>
        </S.InputItem>
        <S.InputItem>
          <S.PasswordInput
            type="password"
            onChange={(e) => {
              props.onChangeFormInput(
                e,
                props.setPassword,
                props.setPasswordError,
                '비밀번홀르 입력해주세요.'
              )
            }}
            placeholder="비밀번호를 입력해주세요."
          />
          <S.ValidationText>{props.passwordError}</S.ValidationText>
        </S.InputItem>
        <S.LoginButton onClick={props.onClickLogin} data-disable={props.formValidation}>
          로그인하기
        </S.LoginButton>
        <S.ButtonListWrapper>
          <S.BottomButton>이메일 찾기</S.BottomButton>
          <S.BottomButton>비밀번호 찾기</S.BottomButton>
          <S.BottomButton onClick={() => router.push('/signup')}>회원가입</S.BottomButton>
        </S.ButtonListWrapper>
      </S.LoginFormBox>
    </S.Wrapper>
  )
}
