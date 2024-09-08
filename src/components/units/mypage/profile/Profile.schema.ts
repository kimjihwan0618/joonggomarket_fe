import * as yup from 'yup'

export const schema = yup
  .object({
    password: yup.string().required('현재 비밀번호를 입력해주세요.'),
    newPassword: yup
      .string()
      .matches(/^.{6,12}$/, '비밀번호는 6 ~ 12자리 길이로 입력해주세요.')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/, '비밀번호는 대소문자를 모두 포함해야 합니다.')
      .matches(/^(?=.*[@$!%*?&])/, '비밀번호는 최소 하나의 특수 문자를 포함해야 합니다.')
      .required('비밀번호를 입력해주세요.'),
    newPasswordCheck: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호를 재입력해주세요'),
  })
  .required()

export interface IUserUpdateForm {
  password?: string
  newPassword?: string
  newPasswordCheck?: string
}
