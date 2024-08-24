import { useRouter } from 'next/router'
import * as S from './Login.styles'
import Image from 'next/image'
import { ILoginUIProps } from './Login.type'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import Button02 from 'src/components/commons/buttons/02/Button02.index'
import theme from 'src/commons/styles/theme'

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  const router = useRouter()
  const { moveToPage } = useMoveToPage()

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
        <Button02
          background={!props.formValidation ? theme.colors.gray03 : theme.colors.main}
          disabled={!props.formValidation}
          name="로그인하기"
          onClick={props.onClickLogin}
          color={!props.formValidation && 'white'}
          fullWidth={true}
        />
        <S.ButtonListWrapper>
          <S.BottomButton>이메일 찾기</S.BottomButton>
          <S.BottomButton>비밀번호 찾기</S.BottomButton>
          <S.BottomButton onClick={moveToPage('/signup')}>회원가입</S.BottomButton>
        </S.ButtonListWrapper>
      </S.LoginFormBox>
    </S.Wrapper>
  )
}
