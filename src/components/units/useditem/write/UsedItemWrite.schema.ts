import * as yup from 'yup'

const extractTags = (input: string): string[] => {
  const regex = /#([a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+)/g
  const matches = input.match(regex)
  return matches ? matches.map((tag) => tag.replace('#', '')) : []
}

export const schema = yup
  .object({
    name: yup.string().required('상품명을 작성해주세요.'),
    remarks: yup.string().required('한줄요약을 작성해주세요.'),
    price: yup
      .number()
      .typeError('판매 가격을 확인해주세요.')
      .required('판매 가격을 작성해주세요.')
      .required('판매 가격을 입력해주세요.'),
    tags: yup
      .string()
      .required('태그를 한개 이상 입력해주세요.')
      .test(
        'has-valid-tags',
        '유효한 태그를 입력해주세요. (태그는 #으로 시작해야 합니다)',
        (value) => {
          if (!value) return false // 필드가 비어있으면 유효하지 않음
          const tagsArray = extractTags(value) // 태그 배열로 변환
          return tagsArray.length > 0 // 적어도 하나의 유효한 태그가 있어야 함
        }
      ),
    address: yup.string().notRequired(),
    addressDetail: yup.string().notRequired(),
    zipcode: yup.string().notRequired(),
    lat: yup.number().notRequired(),
    lng: yup.number().notRequired(),
    contents: yup.string().required('내용을 작성해주세요.'),
  })
  .required()

export interface IUsedItemWriteForm {
  name?: string
  remarks?: string
  price?: number
  tags?: string
  address?: string
  addressDetail?: string
  zipcode?: string
  lat?: number
  lng?: number
  contents?: string
}
