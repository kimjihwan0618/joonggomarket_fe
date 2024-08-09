import { Dispatch, FormEvent, MouseEvent, SetStateAction } from 'react'
import { IBoardComment, ICreateBoardCommentInput } from 'src/commons/types/generated/types'

export interface IBoardCommentListUIProps {
  comments: Array<IBoardComment>
  onClickCommentUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onClickCommentDeleteOk: (event: MouseEvent<HTMLButtonElement>) => void
  onClickCommentDelete: (event: MouseEvent<HTMLButtonElement>) => void
  setPasswordCheck: Dispatch<SetStateAction<string>>
  isOpen: boolean
  handlePasswordModal: (event: MouseEvent<HTMLButtonElement>) => void
  passwordCheck: string
}
