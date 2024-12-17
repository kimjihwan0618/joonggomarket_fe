import * as S from './Login.styles'
import * as S2 from '../signup/Signup.styles'
import Image from 'next/image'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import Button02 from 'src/components/commons/buttons/02/Button02.index'
import theme from 'src/commons/styles/theme'
import InputWithError from 'src/components/commons/inputs/02/InputWithError.index'
import { useForm } from 'react-hook-form'
import { ILoginForm, schema } from './Login.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutationLoginUser } from 'src/components/commons/hooks/mutations/user/useMutationLoginUser'

export default function LoginUI(): JSX.Element {
  const { moveToPage, moveToBack } = useMoveToPage()
  const { register, formState, setValue, getValues } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const { loginUser } = useMutationLoginUser()

  const onClickLogin = () => {
    loginUser({
      email: getValues('email'),
      password: getValues('password'),
      pageMoveFlag: true,
    })
  }

  return (
    <S.Wrapper>
      <S2.PageBackButton onClick={moveToBack()}>
        <Image
          unoptimized
          src="/images/ic_close-white.png"
          width={24}
          height={24}
          alt="이전 페이지 버튼"
        />
      </S2.PageBackButton>
      <S.LoginFormBox>
        <S.Logo>
          <Image
            unoptimized
            src="/images/logo_light.png"
            alt="joongomarket 로고"
            width={279}
            height={21}
          />
        </S.Logo>
        <InputWithError
          register={register('email')}
          type="email"
          placeholder="이메일을 입력해주세요"
          color="white"
          error={formState.errors?.email?.message}
        />
        <InputWithError
          register={register('password')}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          color="white"
        />
        <Button02
          background={!formState.isValid ? theme.colors.gray03 : theme.colors.main}
          disabled={!formState.isValid}
          name="로그인하기"
          onClick={onClickLogin}
          color={!formState.isValid && 'white'}
          fullWidth={true}
        />
        <S.ButtonListWrapper>
          {/* <S.BottomButton>이메일 찾기</S.BottomButton> */}
          {/* <S.BottomButton>비밀번호 찾기</S.BottomButton> */}
          <S.BottomButton onClick={moveToPage('/signup')}>회원가입</S.BottomButton>
        </S.ButtonListWrapper>
      </S.LoginFormBox>
    </S.Wrapper>
  )
}
