import { Dispatch, FormEvent, MouseEvent, SetStateAction, KeyboardEvent } from 'react';
import { IQuery, IQueryFetchBoardsArgs } from 'src/commons/types/generated/types';

export interface IBoardListUIProps {
  boards: IQuery['fetchBoards'],
  onInputSearch: (event: FormEvent<HTMLInputElement>) => void,
  onKeyDownSearch: (event: KeyboardEvent<HTMLInputElement>) => void,
  onClickSearchButton: (event: MouseEvent<HTMLButtonElement>) => void,
  startDate: IQueryFetchBoardsArgs['startDate'],
  setStartDate: Dispatch<SetStateAction<IQueryFetchBoardsArgs['startDate']>>,
  endDate: IQueryFetchBoardsArgs['endDate'],
  setEndDate: Dispatch<SetStateAction<IQueryFetchBoardsArgs['endDate']>>,
  boardsPageCount: IQuery['fetchBoardsCount'],
  page: IQueryFetchBoardsArgs['page'],
  pageList: Array<number>,
  onClickPageNumber: (event: MouseEvent<HTMLButtonElement>) => void,
  handlePageListSet: (event: MouseEvent<HTMLButtonElement>) => void,
  onClickAddBoardButton: (event: MouseEvent<HTMLButtonElement>) => void,
  onClickBoardTitle: (event: MouseEvent<HTMLTableCellElement>) => void,
  pageMaxRange: number
}