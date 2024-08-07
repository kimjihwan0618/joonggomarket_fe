import { toYYYYMMDD } from 'src/lib/utils/date'
import DatePicker from 'react-datepicker'
import * as S from './BoardList.styles'
import Image from 'next/image'
import 'react-datepicker/dist/react-datepicker.css'
import { IBoardListUIProps } from './BoardList.types'
import Pagination from 'src/components/commons/table/pagination'

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchInput
          placeholder="제목을 검색해주세요"
          type="text"
          onInput={props.onInputSearch}
          onKeyDown={props.onKeyDownSearch}
        />
        <S.SearchRightItems>
          <S.DatePickerBox>
            <DatePicker
              dateFormat="yyyy.MM.dd"
              shouldCloseOnSelect
              minDate={new Date('2000-01-01')}
              maxDate={new Date(props.endDate)}
              selected={new Date(props.startDate)}
              onChange={(date) => props.setStartDate(date)}
            />
            <span>~</span>
            <DatePicker
              dateFormat="yyyy.MM.dd"
              shouldCloseOnSelect
              minDate={new Date('2000-01-01')}
              maxDate={new Date('2050-01-01')}
              selected={new Date(props.endDate)}
              onChange={(date) => props.setEndDate(date)}
            />
          </S.DatePickerBox>
          <S.SearchButton onClick={props.onClickSearchButton}>검색하기</S.SearchButton>
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
          {props.boards?.map((el, idx) => (
            <S.TableRow key={el._id}>
              <td>{(props.activePage - 1) * 10 + idx + 1}</td>
              <td id={el._id} onClick={props.onClickBoardTitle}>
                {el.title}
              </td>
              <td>{el.writer}</td>
              <td>{toYYYYMMDD(new Date(el.createdAt))}</td>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
      <S.BottomWrapper>
        <Pagination
          onClickPage={props.onClickPage}
          onClickPrev={props.onClickPrev}
          onClickNext={props.onClickNext}
          activePage={props.activePage}
          startPage={props.startPage}
          lastPage={props.lastPage}
        />
        <S.BoardAddButton onClick={props.onClickAddBoardButton}>
          <Image src={'/images/ic_create.png'} width={18} height={18} />
          <p>게시글 등록</p>
        </S.BoardAddButton>
      </S.BottomWrapper>
    </S.Wrapper>
  )
}
