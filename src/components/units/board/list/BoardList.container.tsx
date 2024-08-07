import { useQuery } from '@apollo/client'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'
import type { MouseEvent, FormEvent, KeyboardEvent } from 'react'
import { useEffect, useState } from 'react'
import { toYYYYMMDD } from 'src/lib/utils/date'
import { useRouter } from 'next/router'
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from 'src/commons/types/generated/types'

export default function BoardList(): JSX.Element {
  const route = useRouter()
  const [search, setSearch] = useState('')
  const [activePage, setActivePage] = useState(1)
  const [startPage, setStartPage] = useState(1)
  const [startDate, setStartDate] = useState(
    toYYYYMMDD(new Date(new Date().setDate(new Date().getDate() - 30)))
  )
  const [endDate, setEndDate] = useState(toYYYYMMDD(new Date()))

  const { data: boards, refetch: refetchBoards } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS)
  const { data: boardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)
  const lastPage = Math.ceil((boardsCount?.fetchBoardsCount ?? 10) / 10)

  const handleFetchBoardsPageCount = (): void => {
    refetchBoardsCount({
      search,
      startDate,
      endDate,
    })
  }

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    const page = Number(event.currentTarget.id)
    setActivePage(page)
    refetchBoards({ page, endDate, startDate, search })
  }

  const onClickPrev = (): void => {
    setActivePage(startPage - 10)
    refetchBoards({ page: startPage - 10, endDate, startDate, search })
    setStartPage((prev) => prev - 10)
  }

  const onClickNext = (): void => {
    setActivePage(startPage + 10)
    refetchBoards({ page: startPage + 10, endDate, startDate, search })
    setStartPage((prev) => prev + 10)
  }

  const onInputSearch = (event: FormEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value)
  }

  const onKeyDownSearch = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      onClickSearchButton()
    }
  }

  const onClickSearchButton = (): void => {
    setActivePage(1)
    setStartPage(1)
    handleFetchBoardsPageCount()
  }

  const onClickAddBoardButton = (): void => {
    route.push('/boards/new')
  }

  const onClickBoardTitle = (event: MouseEvent<HTMLTableCellElement>): void => {
    route.push(`/boards/${event.currentTarget.id}`)
  }

  return (
    <BoardListUI
      activePage={activePage}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      onInputSearch={onInputSearch}
      onKeyDownSearch={onKeyDownSearch}
      onClickSearchButton={onClickSearchButton}
      setEndDate={setEndDate}
      boards={boards?.fetchBoards}
      onClickAddBoardButton={onClickAddBoardButton}
      onClickBoardTitle={onClickBoardTitle}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
      lastPage={lastPage}
    />
  )
}
