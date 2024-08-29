import * as S from './Signup.styles'
import Image from 'next/image'
import Button02 from 'src/components/commons/buttons/02/Button02.index'
import theme from 'src/commons/styles/theme'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutationCreateUser } from 'src/components/commons/hooks/mutations/useMutationCreateUser'
import { ICreateUserForm, schema } from './Signup.schema'
import { useForm } from 'react-hook-form'
import InputWithError from 'src/components/commons/inputs/02/InputWithError.index'

export default function SignupUI(): JSX.Element {
  const { moveToBack } = useMoveToPage()
  const { register, formState, getValues } = useForm<ICreateUserForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const { createUser } = useMutationCreateUser({ getValues })

  return (
    <S.Wrapper>
      <S.PageBackButton onClick={moveToBack('/login')}>
        <Image src="/images/ic_close-white.png" width={24} height={24} alt="이전 페이지 버튼" />
      </S.PageBackButton>
      <S.SignupFormBox>
        <S.PageTitle>회원가입</S.PageTitle>
        <InputWithError
          type="email"
          color="white"
          placeholder="이메일을 입력해주세요"
          error={formState.errors?.email?.message}
          register={register('email')}
        />
        <InputWithError
          placeholder="이름을 입력해주세요"
          color="white"
          error={formState.errors?.name?.message}
          register={register('name')}
        />
        <InputWithError
          type="password"
          color="white"
          placeholder="비밀번호를 입력해주세요"
          error={formState.errors?.password?.message}
          register={register('password')}
        />
        <InputWithError
          type="password"
          color="white"
          placeholder="비밀번호를 재입력해주세요"
          error={formState.errors?.passwordCheck?.message}
          register={register('passwordCheck')}
        />
        <Button02
          background={!formState.isValid ? theme.colors.gray03 : theme.colors.main}
          disabled={!formState.isValid}
          name="회원가입하기"
          onClick={createUser}
          color={!formState.isValid && 'white'}
          fullWidth={true}
        />
      </S.SignupFormBox>
    </S.Wrapper>
  )
}
