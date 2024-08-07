import { toYYYYMMDD } from 'src/lib/utils/date'
import DatePicker from 'react-datepicker'
import * as S from './BoardList.styles'
import Image from 'next/image'
import 'react-datepicker/dist/react-datepicker.css'
import { IBoardListUIProps } from './BoardList.types'
import Pagination from 'src/components/commons/ui/dataGrid/pagination'
import Table from 'src/components/commons/ui/dataGrid/table'

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
      <Table
        data={props.boards}
        rowKey="_id"
        activePage={props.activePage}
        onClickActionCell={props.onClickActionCell}
        columns={[
          { name: '제목', dataKey: 'title', isClick: true },
          { name: '작성자', dataKey: 'writer', isClick: false },
          { name: '날짜', dataKey: 'createdAt', isClick: false },
        ]}
      />
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
