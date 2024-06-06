import { useLazyQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import { useEffect, useState } from 'react';
import { formatDateToYYYYMMDD } from '@/utils/dateUtils';
import { useRouter } from 'next/router';

export default function BoardList() {
  const route = useRouter();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState('2020-01-01');
  const [endDate, setEndDate] = useState(formatDateToYYYYMMDD(new Date()));
  const [pageList, setPageList] = useState([]);

  const [fetchBoards, { data: boards }] = useLazyQuery(FETCH_BOARDS);
  const [fetchBoardsCount, { data: boardsPageCount }] = useLazyQuery(FETCH_BOARDS_COUNT);

  const handleFetchBoards = (currentPage) => {
    fetchBoards({
      variables: {
        search,
        page: currentPage ? currentPage : page,
        startDate,
        endDate,
      },
    });
  };

  const handleFetchBoardsPageCount = () => {
    fetchBoardsCount({
      variables: {
        search,
        startDate,
        endDate,
      },
    });
  };

  const handlePageListSet = (event) => {
    const maxPageRange = 10; // 페이지 범위 크기
    const remainder = (page - 1) % maxPageRange;
    let newStartPage = page - remainder || 1;
    if (event === 'prev') {
      newStartPage -= 10;
    } else if (event === 'next') {
      newStartPage += 10;
    }

    const finalLastPage = Math.round(boardsPageCount?.fetchBoardsCount / 10);
    const newEndPage = newStartPage + 9 <= finalLastPage ? newStartPage + 9 : finalLastPage;
    const newPageListResult = Array.from(
      { length: newEndPage - newStartPage + 1 },
      (_, index) => newStartPage + index
    );

    if (newPageListResult.length > 0) {
      setPage(newPageListResult[0]);
    }

    setPageList(newPageListResult);
    handleFetchBoards(newPageListResult[0]);
  };

  const onInputSearch = (event) => {
    setSearch(event.target.value);
  };

  const onClickSearchButton = () => {
    handleFetchBoards();
    handleFetchBoardsPageCount();
  };

  const onClickPageNumber = (event) => {
    setPage(Number(event.target.id));
    handleFetchBoards(Number(event.target.id));
  };

  const onClickAddBoardButton = () => {
    route.push('/boards/new');
  };

  const onClickBoardTitle = (event) => {
    route.push(`/boards/${event.target.id}`);
  };

  useEffect(() => {
    handlePageListSet();
  }, [boardsPageCount]);

  useEffect(() => {
    handleFetchBoardsPageCount();
  }, []);

  return (
    <BoardListUI
      setSearch={setSearch}
      page={page}
      setPage={setPage}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      onInputSearch={onInputSearch}
      onClickSearchButton={onClickSearchButton}
      setEndDate={setEndDate}
      boards={boards?.fetchBoards}
      boardsPageCount={boardsPageCount?.fetchBoardsCount}
      pageList={pageList}
      onClickPageNumber={onClickPageNumber}
      onClickPrevPageList={handlePageListSet}
      onClickNextPageList={handlePageListSet}
      onClickAddBoardButton={onClickAddBoardButton}
      onClickBoardTitle={onClickBoardTitle}
    />
  );
}
