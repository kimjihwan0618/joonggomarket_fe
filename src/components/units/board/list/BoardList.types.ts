import { QueryResult } from '@apollo/client'
import type { Dispatch, MouseEvent, SetStateAction } from 'react'
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from 'src/commons/types/generated/types'

export interface IBoardListUIProps {
  boards: IQuery['fetchBoards']
  boardsBest: IQuery['fetchBoardsOfTheBest']
  keyword: string
  startDate: IQueryFetchBoardsArgs['startDate']
  setKeyword: Dispatch<SetStateAction<string>>
  setActivePage: Dispatch<SetStateAction<number>>
  setStartPage: Dispatch<SetStateAction<number>>
  setStartDate: Dispatch<SetStateAction<IQueryFetchBoardsArgs['startDate']>>
  setEndDate: Dispatch<SetStateAction<IQueryFetchBoardsArgs['endDate']>>
  refetchTableDatas: QueryResult<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>['refetch']
  refetchTableDatasCount: QueryResult<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >['refetch']
  endDate: IQueryFetchBoardsArgs['endDate']
  activePage: IQueryFetchBoardsArgs['page']
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void
  onClickPrev: (event: MouseEvent<HTMLButtonElement>) => void
  onClickNext: (event: MouseEvent<HTMLButtonElement>) => void
  startPage: number
  lastPage: number
}
