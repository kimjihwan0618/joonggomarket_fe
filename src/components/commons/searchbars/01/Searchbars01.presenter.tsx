import * as S from './Searchbars01.styles'
import { Searchbars01UIProps } from './Searchbars01.types'
import { DatePicker } from 'antd'

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
            onChange={(value, dateString) => {
              props.setStartDate(Array.isArray(dateString) || dateString === '' ? null : dateString)
            }}
          />
          <span>~</span>
          <DatePicker
            onChange={(value, dateString) => {
              props.setEndDate(Array.isArray(dateString) || dateString === '' ? null : dateString)
            }}
          />
        </S.DatePickerBox>
      </S.SearchRightItems>
    </S.SearchWrapper>
  )
}
