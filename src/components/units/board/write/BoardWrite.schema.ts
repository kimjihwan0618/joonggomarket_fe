import * as yup from 'yup'

export const schema = yup.object({
  writer: yup.string().required('작성자를 입력해주세요.'),
  password: yup
    .string()
    .min(4, '비밀번호는 최소 4자리 이상으로 입력해주세요.')
    .max(15, '비밀번호는 최대 15자리 이하로 입력해주세요.')
    .required('비밀번호는 필수 입력입니다.'),
  title: yup.string().required('제목을 입력해주세요.'),
  contents: yup.string().required('내용을 입력해주세요.'),
  youtubeUrl: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
  zipcode: yup.string(),
})

export interface IBoardWriterForm {
  writer: string
  password: string
  title: string
  contents: string
  youtubeUrl?: string
  address?: string
  addressDetail?: string
  zipcode?: string
}
