import { Dispatch, FormEvent, MouseEvent, SetStateAction, KeyboardEvent } from 'react'
import { IQuery, IQueryFetchBoardsArgs } from 'src/commons/types/generated/types'

export interface IBoardListUIProps {
  boards: IQuery['fetchBoards']
  onInputSearch: (event: FormEvent<HTMLInputElement>) => void
  onKeyDownSearch: (event: KeyboardEvent<HTMLInputElement>) => void
  onClickSearchButton: (event: MouseEvent<HTMLButtonElement>) => void
  startDate: IQueryFetchBoardsArgs['startDate']
  setStartDate: Dispatch<SetStateAction<IQueryFetchBoardsArgs['startDate']>>
  endDate: IQueryFetchBoardsArgs['endDate']
  setEndDate: Dispatch<SetStateAction<IQueryFetchBoardsArgs['endDate']>>
  activePage: IQueryFetchBoardsArgs['page']
  onClickAddBoardButton: (event: MouseEvent<HTMLButtonElement>) => void
  onClickBoardTitle: (event: MouseEvent<HTMLTableCellElement>) => void
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void
  onClickPrev: (event: MouseEvent<HTMLButtonElement>) => void
  onClickNext: (event: MouseEvent<HTMLButtonElement>) => void
  startPage: number
  lastPage: number
}
