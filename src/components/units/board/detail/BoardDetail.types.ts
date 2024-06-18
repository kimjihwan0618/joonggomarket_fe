import { MouseEvent } from 'react';
import { IBoard } from 'src/commons/types/generated/types';

export interface IBoardDetailUIProps {
  board: IBoard;
  onClickDeleteButton: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickBoardsButton: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateButton: (event: MouseEvent<HTMLButtonElement>) => void;
}
