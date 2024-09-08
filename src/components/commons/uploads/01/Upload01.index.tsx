import Image from 'next/image'
import * as S from './Upload01.styles'
import { ChangeEvent, useRef } from 'react'
import { IFileManager } from 'src/commons/types/generated/types'
import { useMutationUploadFile } from '../../hooks/mutations/file/useMutationUploadFile'

interface IUploads01UIProps {
  key: string
  index: number
  fileUrl: string
  onChangeFileUrls: (url: IFileManager['url'], index: number) => void
  onClickReset: (index: number) => void
}

export default function Uploads01UI(props: IUploads01UIProps): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null)
  const { uploadFile } = useMutationUploadFile()

  const onClickUpload = (): void => {
    fileRef.current?.click()
  }

  const onClickReset = (): void => {
    props.onClickReset(props.index)
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]
    const result = await uploadFile({ file })
    result?.data?.uploadFile.url &&
      props.onChangeFileUrls(result?.data?.uploadFile.url, props.index)
  }

  return (
    <>
      {props.fileUrl !== '' ? (
        <S.ImageBox>
          <S.ResetFileButton onClick={onClickReset}>
            <Image width={11} height={11} src={'/images/ic_close-dark.png'} />
          </S.ResetFileButton>
          <Image width={78} height={78} src={`https://storage.googleapis.com/${props.fileUrl}`} />
        </S.ImageBox>
      ) : (
        <S.ImageUploadButton onClick={onClickUpload}>
          <span>+</span>
          <p>Upload</p>
        </S.ImageUploadButton>
      )}
      <S.UploadFileHidden type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  )
}
