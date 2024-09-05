import * as yup from 'yup'

export const schema = yup
  .object({
    writer: yup.string().required('작성자를 입력해주세요.'),
    password: yup.string().required('비밀번호는 필수 입력입니다.'),
    rating: yup.number().min(1).required('별점을 입력해주세요.'),
    contents: yup.string().required('내용을 입력해주세요.'),
  })
  .required()

export interface IBoardCommentWriterForm {
  writer?: string
  password?: string
  rating?: number
  contents?: string
}
