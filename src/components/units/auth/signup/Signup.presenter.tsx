import { useRouter } from 'next/router'
import * as S from './Signup.styles'
import Image from 'next/image'
import { ISignupUIProps } from './Signup.type'
import Button02 from 'src/components/commons/buttons/02/Button02.index'
import theme from 'src/commons/styles/theme'

export default function SignupUI(props: ISignupUIProps): JSX.Element {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.PageBackButton onClick={() => router.back()}>
        <Image src="/images/ic_close-white.png" width={24} height={24} alt="이전 페이지 버튼" />
      </S.PageBackButton>
      <S.SignupFormBox>
        <S.PageTitle>회원가입</S.PageTitle>
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
          <S.NameInput
            onChange={(e) => {
              props.onChangeFormInput(e, props.setName, props.setNameError, '이름을 입력해주세요.')
            }}
            placeholder="이름을 입력해주세요."
          />
          <S.ValidationText>{props.nameError}</S.ValidationText>
        </S.InputItem>
        <S.InputItem>
          <S.PasswordInput
            type="password"
            onChange={(e) => {
              props.onChangeFormInput(
                e,
                props.setPassword,
                props.setPasswordError,
                '비밀번호를 입력해주세요.'
              )
            }}
            placeholder="비밀번호를 입력해주세요."
          />
          <S.ValidationText>{props.passwordError}</S.ValidationText>
        </S.InputItem>
        <S.InputItem>
          <S.PasswordInput
            onChange={(e) => {
              props.onChangeFormInput(
                e,
                props.setPasswordCheck,
                props.setPasswordCheckError,
                '비밀번호를 재입력해주세요.'
              )
            }}
            type="password"
            placeholder="비밀번호를 재입력해주세요."
          />
          <S.ValidationText>{props.passwordCheckError}</S.ValidationText>
        </S.InputItem>
        <Button02
          background={!props.formValidation ? theme.colors.gray03 : theme.colors.main}
          disabled={!props.formValidation}
          name="회원가입하기"
          onClick={props.onClickSignup}
          color={!props.formValidation && 'white'}
          fullWidth={true}
        />
      </S.SignupFormBox>
    </S.Wrapper>
  )
}
