import * as yup from 'yup'

export const schema = yup
  .object({
    writer: yup
      .string()
      .max(8, '작성자는 최대 8자리 이하로 입력해주세요.')
      .required('작성자를 입력해주세요.'),
    password: yup
      .string()
      .min(4, '비밀번호는 최소 4자리 이상으로 입력해주세요.')
      .max(15, '비밀번호는 최대 15자리 이하로 입력해주세요.')
      .required('비밀번호는 필수 입력입니다.'),
    title: yup.string().required('제목을 입력해주세요.'),
    contents: yup.string().required('내용을 입력해주세요.'),
    youtubeUrl: yup
      .string()
      .url('올바른 URL 형식이 아닙니다')
      .test('is-valid-watch-url', '유효한 Youtube이 아닙니다', (value) => {
        if (!value) return true // Allow empty values
        const watchRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.?be\/).+$/ // YouTube watch URL 정규 표현식
        return watchRegex.test(value)
      })
      .notRequired(),
    address: yup.string().notRequired(),
    addressDetail: yup.string().notRequired(),
    zipcode: yup.string().notRequired(),
  })
  .required()

export interface IBoardWriterForm {
  writer?: string
  password?: string
  title?: string
  contents?: string
  youtubeUrl?: string
  address?: string
  addressDetail?: string
  zipcode?: string
}
