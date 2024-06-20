import { toYYYYMMDD } from 'src/lib/utils/date';
import DatePicker from 'react-datepicker';
import * as S from './BoardList.styles';
import Image from 'next/image';
import 'react-datepicker/dist/react-datepicker.css';
import { IBoardListUIProps } from './BoardList.types';

export default function BoardListUI({
  boards,
  onInputSearch,
  onKeyDownSearch,
  onClickSearchButton,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  boardsPageCount,
  page,
  pageList,
  onClickPageNumber,
  handlePageListSet,
  onClickAddBoardButton,
  onClickBoardTitle,
  pageMaxRange
}: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchInput
          placeholder='제목을 검색해주세요'
          type="text"
          onInput={onInputSearch}
          onKeyDown={onKeyDownSearch}
        />
        <S.SearchRightItems>
          <S.DatePickerBox>
            <DatePicker
              dateFormat="yyyy.MM.dd"
              shouldCloseOnSelect
              minDate={new Date('2000-01-01')}
              maxDate={new Date(endDate)}
              selected={new Date(startDate)}
              onChange={(date) => setStartDate(date)}
            />
            <span>~</span>
            <DatePicker
              dateFormat="yyyy.MM.dd"
              shouldCloseOnSelect
              minDate={new Date('2000-01-01')}
              maxDate={new Date('2050-01-01')}
              selected={new Date(endDate)}
              onChange={(date) => setEndDate(date)}
            />
          </S.DatePickerBox>
          <S.SearchButton onClick={onClickSearchButton}>
            검색하기
          </S.SearchButton>
        </S.SearchRightItems>
      </S.SearchWrapper>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {boards?.map((el, idx) => (
            <S.TableRow key={el._id}>
              <td>{(page - 1) * 10 + idx + 1}</td>
              <td id={el._id} onClick={onClickBoardTitle}>{el.title}</td>
              <td>{el.writer}</td>
              <td>{toYYYYMMDD(new Date(el.createdAt))}</td>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
      <S.BottomWrapper>
        <S.Pagination>
          {pageList?.length > 0 && pageList?.[0] !== 1 && (
            <S.ArrowButton data-direction="prev" onClick={handlePageListSet}>
              <Image src={'/images/ic_page_prev.png'} width={7.41} height={12} />
            </S.ArrowButton>
          )}
          {pageList.map((el) => (
            <S.PageButton id={String(el)} onClick={onClickPageNumber} data-isActive={el === page}>
              {el}
            </S.PageButton>
          ))}
          {pageList?.length >= pageMaxRange && pageList[pageList.length - 1] < boardsPageCount / 10 && (
            <S.ArrowButton data-direction="next" onClick={handlePageListSet}>
              <Image src={'/images/ic_page_next.png'} width={7.41} height={12} />
            </S.ArrowButton>
          )}
        </S.Pagination>
        <S.BoardAddButton onClick={onClickAddBoardButton}>
          <Image src={'/images/ic_create.png'} width={18} height={18} />
          <p>게시글 등록</p>
        </S.BoardAddButton>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
