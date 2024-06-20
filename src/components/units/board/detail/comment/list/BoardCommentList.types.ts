import { FormEvent, MouseEvent } from 'react';
import { IBoardComment, ICreateBoardCommentInput } from 'src/commons/types/generated/types';

export interface IBoardCommentListUIProps {
  comments: Array<IBoardComment & { isEdit: boolean }>,
  onClickCommentEdit: (event: MouseEvent<HTMLButtonElement>) => void,
  onClickCommentUpdate: (event: MouseEvent<HTMLButtonElement>) => void,
  onClickCommentDelete: (event: MouseEvent<HTMLButtonElement>) => void,
  onClickRating: (event: MouseEvent<HTMLImageElement>) => void,
  rating: IBoardComment['rating'],
  contents: IBoardComment['contents'],
  writer: IBoardComment['writer'],
  password: ICreateBoardCommentInput['password'],
  onInputContents: (event: FormEvent<HTMLTextAreaElement>) => void
  onInputUserInfo: (event: FormEvent<HTMLInputElement>) => void
}
