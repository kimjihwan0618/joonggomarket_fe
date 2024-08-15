import * as S from './Searchbars01.styles'
import { Searchbars01UIProps } from './Searchbars01.types'
import DatePicker from 'react-datepicker'

export default function Searchbars01UI(props: Searchbars01UIProps): JSX.Element {
  return (
    <S.SearchWrapper>
      <S.SearchInput
        data-isChanging={props.isChanging}
        placeholder="제목을 검색해주세요"
        type="text"
        onInput={props.onInputSearch}
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
      </S.SearchRightItems>
    </S.SearchWrapper>
  )
}
