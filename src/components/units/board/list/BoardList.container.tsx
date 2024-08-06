import { useLazyQuery } from '@apollo/client'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'
import { useEffect, useState, MouseEvent, FormEvent, KeyboardEvent } from 'react'
import { toYYYYMMDD } from 'src/lib/utils/date'
import { useRouter } from 'next/router'
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from 'src/commons/types/generated/types'

export default function BoardList() {
  const route = useRouter()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [startDate, setStartDate] = useState(
    toYYYYMMDD(new Date(new Date().setDate(new Date().getDate() - 30)))
  )
  const [endDate, setEndDate] = useState(toYYYYMMDD(new Date()))
  const [pageList, setPageList] = useState([])
  const [pageMaxRange, setPageMaxRange] = useState(5)

  const [fetchBoards, { data: boards }] = useLazyQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS)
  const [fetchBoardsCount, { data: boardsPageCount }] = useLazyQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)

  const handleFetchBoards = (currentPage: number, newStartPage: number) => {
    if (newStartPage) {
      const finalLastPage = Math.ceil(boardsPageCount?.fetchBoardsCount / 10)
      const newEndPage =
        newStartPage + (pageMaxRange - 1) <= finalLastPage
          ? newStartPage + (pageMaxRange - 1)
          : finalLastPage
      const newPageListResult = Array.from(
        { length: newEndPage - newStartPage + 1 },
        (_, index) => newStartPage + index
      )
      if (newPageListResult.length > 0) {
        setPage(newPageListResult[0])
      }
      setPageList(newPageListResult)
    }
    fetchBoards({
      variables: {
        search,
        page: currentPage ? currentPage : page,
        startDate,
        endDate,
      },
    })
  }

  const handleFetchBoardsPageCount = () => {
    fetchBoardsCount({
      variables: {
        search,
        startDate,
        endDate,
      },
    })
  }

  const handlePageListSet = (event: MouseEvent<HTMLButtonElement>) => {
    const direction = event.currentTarget.getAttribute('data-direction')
    const remainder = (page - 1) % pageMaxRange
    let newStartPage = page - remainder || 1
    if (direction === 'prev') {
      newStartPage -= pageMaxRange
    } else if (direction === 'next') {
      newStartPage += pageMaxRange
    }
    handleFetchBoards(0, newStartPage)
  }

  const onInputSearch = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const onKeyDownSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClickSearchButton()
    }
  }

  const onClickSearchButton = () => {
    setPage(1)
    handleFetchBoards(0, 1)
    handleFetchBoardsPageCount()
  }

  const onClickPageNumber = (event: MouseEvent<HTMLButtonElement>) => {
    setPage(Number(event.currentTarget.id))
    handleFetchBoards(Number(event.currentTarget.id), 0)
  }

  const onClickAddBoardButton = () => {
    route.push('/boards/new')
  }

  const onClickBoardTitle = (event: MouseEvent<HTMLTableCellElement>) => {
    route.push(`/boards/${event.currentTarget.id}`)
  }

  useEffect(() => {
    handleFetchBoards(0, 1)
  }, [boardsPageCount])

  useEffect(() => {
    handleFetchBoardsPageCount()
  }, [])

  return (
    <BoardListUI
      page={page}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      onInputSearch={onInputSearch}
      onKeyDownSearch={onKeyDownSearch}
      onClickSearchButton={onClickSearchButton}
      setEndDate={setEndDate}
      boards={boards?.fetchBoards}
      boardsPageCount={boardsPageCount?.fetchBoardsCount}
      pageList={pageList}
      onClickPageNumber={onClickPageNumber}
      handlePageListSet={handlePageListSet}
      onClickAddBoardButton={onClickAddBoardButton}
      onClickBoardTitle={onClickBoardTitle}
      pageMaxRange={pageMaxRange}
    />
  )
}
