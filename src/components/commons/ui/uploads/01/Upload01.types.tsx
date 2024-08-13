import type { ChangeEvent, MouseEvent } from 'react'
import { IFileManager } from 'src/commons/types/generated/types'

export interface IUploads01Props {
  key: string
  index: number
  fileUrl: string
  onChangeFileUrls: (url: IFileManager['url'], index: number) => void
  onClickReset: (index: number) => void
}

export interface IUploads01UIProps {
  fileRef: React.RefObject<HTMLInputElement>
  fileUrl: string
  onClickUpload: (event: MouseEvent<HTMLButtonElement>) => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
  onClickReset: (event: MouseEvent<HTMLDivElement>) => void
}
