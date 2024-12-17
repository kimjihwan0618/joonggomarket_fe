import InputWithError from 'src/components/commons/inputs/02/InputWithError.index'
import * as S from './Profile.styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IUserUpdateForm, schema } from './Profile.schema'
import theme from 'src/commons/styles/theme'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'
import { useMutationResetUserPassword } from 'src/components/commons/hooks/mutations/user/useMutationResetUserPassword'
import { useEffect, useState } from 'react'

export default function MyProfileUI(): JSX.Element {
  const { register, formState, setValue, getValues } = useForm<IUserUpdateForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const { data } = useQueryFetchUserLoggedIn()
  const { resetUserPassword, resetLoading, loginLoading } = useMutationResetUserPassword({
    email: data?.fetchUserLoggedIn.email,
    password: getValues('password'),
    newPassword: getValues('newPassword'),
  })
  const [inputWidth, setInputWidth] = useState('66%')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setInputWidth('230px') //
      } else {
        setInputWidth('66%')
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize() // 초기값 설정

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <S.Wrapper>
      <S.PageTitle>비밀번호 변경</S.PageTitle>
      <S.Form>
        <S.FormItem>
          <S.Label>현재 비밀번호</S.Label>
          <InputWithError
            width={inputWidth}
            type="password"
            style={{ background: theme.colors.gray06, border: 'none' }}
            register={register('password')}
            placeholder="현재 비밀번호를 입력해주세요."
            error={formState.errors.password?.message}
          />
        </S.FormItem>
        <S.FormItem>
          <S.Label>새 비밀번호</S.Label>
          <InputWithError
            width={inputWidth}
            type="password"
            style={{ background: theme.colors.gray06, border: 'none' }}
            register={register('newPassword')}
            placeholder="새 비밀번호를 입력해주세요."
            error={formState.errors.newPassword?.message}
          />
        </S.FormItem>
        <S.FormItem>
          <S.Label>새 비밀번호 확인</S.Label>
          <InputWithError
            width={inputWidth}
            type="password"
            style={{ background: theme.colors.gray06, border: 'none' }}
            register={register('newPasswordCheck')}
            placeholder="새 비밀번호를 확인해주세요."
            error={formState.errors.newPasswordCheck?.message}
          />
        </S.FormItem>
        <S.Bottom>
          <Button01
            disabled={!formState.isValid || resetLoading || loginLoading}
            isLoading={resetLoading || loginLoading}
            onClick={resetUserPassword}
            background={theme.colors.main}
            name={`비밀번호 변경`}
            width="03"
          />
        </S.Bottom>
      </S.Form>
    </S.Wrapper>
  )
}
