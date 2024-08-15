import Image from 'next/image'
import * as S from './Upload01.styles'
import { IUploads01UIProps } from './Upload01.types'

export default function Uploads01UI(props: IUploads01UIProps): JSX.Element {
  return (
    <>
      {props.fileUrl !== '' ? (
        <S.ImageBox>
          <S.ResetFileButton onClick={props.onClickReset}>
            <Image width={11} height={11} src={'/images/ic_close-dark.png'} />
          </S.ResetFileButton>
          <Image width={78} height={78} src={`https://storage.googleapis.com/${props.fileUrl}`} />
        </S.ImageBox>
      ) : (
        <S.ImageUploadButton onClick={props.onClickUpload}>
          <span>+</span>
          <p>Upload</p>
        </S.ImageUploadButton>
      )}
      <S.UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  )
}
