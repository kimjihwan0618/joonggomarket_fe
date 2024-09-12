import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup.string().required('상품명을 작성해주세요.'),
    remarks: yup.string().required('한줄요약을 작성해주세요.'),
    price: yup.number().required('판매 가격을 입력해주세요.'),
    tags: yup.string().required('태그를 한개 이상 입력해주세요.'),
    address: yup.string().notRequired(),
    addressDetail: yup.string().notRequired(),
    // zipcode: yup.string().notRequired(),
  })
  .required()

export interface IUsedItemWriteForm {
  name?: string
  remarks?: string
  price?: number
  tags?: string
  address?: string
  addressDetail?: string
}
