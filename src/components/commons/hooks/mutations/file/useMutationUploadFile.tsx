import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IMutation, IMutationUploadFileArgs } from 'src/commons/types/generated/types'

const MAX_FILE_SIZE = 5 * 1024 * 1024

export function checkValidationImage(file?: File): boolean {
  if (file?.size === undefined) {
    Modal.error({ content: '파일이 없습니다.' })
    return false
  }

  if (file.size > MAX_FILE_SIZE) {
    Modal.error({ content: '파일이 너무 큽니다. (제한 : 5MB)' })
    return false
  }

  if (!file.type.includes('png') && !file.type.includes('jpeg') && !file.type.includes('jpg')) {
    Modal.error({ content: '파일 확장자가 올바르지 않습니다. (png, jpeg, jpg만 가능)' })
    return false
  }
  return true
}

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`

export const useMutationUploadFile = () => {
  const [uploadFileMutation, { loading }] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE)

  const uploadFile = async (props: IMutationUploadFileArgs) => {
    try {
      const isValid = checkValidationImage(props.file)
      if (!isValid) return
      const result = await uploadFileMutation({
        variables: {
          file: props.file,
        },
      })
      return result
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { uploadFile, loading }
}
