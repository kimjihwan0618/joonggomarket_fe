import { formatDateToSeoul } from '@/utils/dateUtils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BoardListUI({
  boards,
  onInputSearch,
  onClickSearchButton,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  boardsPageCount,
  page,
  pageList,
  onClickPageNumber,
  onClickPrevPageList,
  onClickNextPageList,
  onClickAddBoardButton,
  onClickBoardTitle,
}) {
  return (
    <>
      <input
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onClickSearchButton();
          }
        }}
        type="text"
        onInput={onInputSearch}
      />
      <DatePicker
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={new Date('2000-01-01')}
        maxDate={new Date(endDate)}
        selected={new Date(startDate)}
        onChange={(date) => setStartDate(date)}
      />
      ~
      <DatePicker
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={new Date('2000-01-01')}
        maxDate={new Date('2050-01-01')}
        selected={new Date(endDate)}
        onChange={(date) => setEndDate(date)}
      />
      <button onClick={onClickSearchButton}>검색</button>
      {boards?.map((el, idx) => (
        <div key={el.id}>
          <span>번호 : {page + idx + 1}&nbsp;||&nbsp;</span>
          <span id={el._id} onClick={onClickBoardTitle}>
            제목 : {el.title}&nbsp;||&nbsp;
          </span>
          <span>작성자 : {el.writer}&nbsp;||&nbsp;</span>
          <span>날짜 : {formatDateToSeoul(el.createdAt)}</span>
        </div>
      ))}
      ==============================================================================
      <br />
      {pageList?.length > 0 && pageList?.[0] !== 1 && (
        <button onClick={() => onClickPrevPageList('prev')}>&lt;</button>
      )}
      {pageList.map((el) => (
        <button id={el} onClick={onClickPageNumber} style={{ background: el === page && 'yellow' }}>
          {el}
        </button>
      ))}
      {pageList?.length >= 10 && pageList[pageList.length - 1] < boardsPageCount / 10 && (
        <button onClick={() => onClickNextPageList('next')}>&gt;</button>
      )}
      <br />
      ==============================================================================
      <br />
      <button onClick={onClickAddBoardButton}>게시글 등록</button>
    </>
  );
}
