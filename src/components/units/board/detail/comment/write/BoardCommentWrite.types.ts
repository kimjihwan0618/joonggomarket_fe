import { FormEvent, MouseEvent, MouseEventHandler } from 'react'
import { ICreateBoardCommentInput } from 'src/commons/types/generated/types'

export interface IBoardCommentWriteUIProps {
  onClickRating: (event: MouseEvent<HTMLImageElement>) => void
  rating: ICreateBoardCommentInput['rating']
  contents: ICreateBoardCommentInput['contents']
  onInputContents: (event: FormEvent<HTMLTextAreaElement>) => void
  onInputUserInfo: (event: FormEvent<HTMLInputElement>) => void
  onClickCommentToggle?: (event: MouseEvent<HTMLImageElement>) => void
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  password: ICreateBoardCommentInput['password']
  writer: ICreateBoardCommentInput['writer']
  isEdit: boolean
}
