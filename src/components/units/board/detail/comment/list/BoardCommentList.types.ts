import { Dispatch, FormEvent, MouseEvent, SetStateAction } from 'react'
import { IBoardComment, ICreateBoardCommentInput } from 'src/commons/types/generated/types'

export interface IBoardCommentListUIProps {
  comments: Array<IBoardComment & { isEdit: boolean }>
  onClickCommentEdit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickCommentUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onClickCommentDeleteOk: (event: MouseEvent<HTMLButtonElement>) => void
  onClickCommentDelete: (event: MouseEvent<HTMLButtonElement>) => void
  onClickRating: (event: MouseEvent<HTMLImageElement>) => void
  rating: IBoardComment['rating']
  contents: IBoardComment['contents']
  writer: IBoardComment['writer']
  password: ICreateBoardCommentInput['password']
  setPasswordCheck: Dispatch<SetStateAction<string>>
  onInputContents: (event: FormEvent<HTMLTextAreaElement>) => void
  onInputUserInfo: (event: FormEvent<HTMLInputElement>) => void
  isOpen: boolean
  handlePasswordModal: (event: MouseEvent<HTMLButtonElement>) => void
  passwordCheck: string
}
