import { useQuery } from '@apollo/client'
import BoardListUI from './BoardList.index'
import type { MouseEvent, FormEvent, KeyboardEvent } from 'react'
import { useState } from 'react'
import { toYYYYMMDD } from 'src/lib/utils/date'
import { useRouter } from 'next/router'
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from 'src/commons/types/generated/types'
import _ from 'lodash'

export default function BoardList(): JSX.Element {
  const route = useRouter()
  const [keyword, setKeyword] = useState('')
  const [activePage, setActivePage] = useState(1)
  const [startPage, setStartPage] = useState(1)
  const [startDate, setStartDate] = useState(
    toYYYYMMDD(new Date(new Date().setDate(new Date().getDate() - 30)))
  )
  const [endDate, setEndDate] = useState(toYYYYMMDD(new Date()))

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    const page = Number(event.currentTarget.id)
    setActivePage(page)
    refetchBoards({ page, endDate, startDate, search: keyword })
  }

  const onClickPrev = (): void => {
    setActivePage(startPage - 10)
    refetchBoards({ page: startPage - 10, endDate, startDate, search: keyword })
    setStartPage((prev) => prev - 10)
  }

  const onClickNext = (): void => {
    setActivePage(startPage + 10)
    refetchBoards({ page: startPage + 10, endDate, startDate, search: keyword })
    setStartPage((prev) => prev + 10)
  }

  return (
    <BoardListUI
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      setKeyword={setKeyword}
      activePage={activePage}
      setActivePage={setActivePage}
      setStartPage={setStartPage}
      refetchTableDatas={refetchBoards}
      refetchTableDatasCount={refetchBoardsCount}
      startDate={startDate}
      endDate={endDate}
      keyword={keyword}
      boards={boards?.fetchBoards}
      boardsBest={boardsBest?.fetchBoardsOfTheBest}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
    />
  )
}
