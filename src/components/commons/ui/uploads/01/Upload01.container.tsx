import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { ChangeEvent, useRef } from 'react'
import { UPLOAD_FILE } from './Upload01.queries'
import Uploads01UI from './Upload01.presenter'
import { IUploads01Props } from './Upload01.types'
import { checkValidationImage } from './Upload01.validation'

export default function Uploads01(props: IUploads01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploadFile] = useMutation(UPLOAD_FILE)

  const onClickUpload = (): void => {
    fileRef.current?.click()
  }

  const onClickReset = (): void => {
    props.onClickReset(props.index)
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]
    const isValid = checkValidationImage(file)
    if (!isValid) return

    try {
      const result = await uploadFile({ variables: { file } })
      props.onChangeFileUrls(result.data.uploadFile.url, props.index)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onClickReset={onClickReset}
    />
  )
}
