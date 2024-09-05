import { FormEvent, useState } from 'react'
import * as S from './Searchbars01.styles'
import { Searchbars01UIProps } from './Searchbars01.types'
import { DatePicker } from 'antd'
import _ from 'lodash'

export default function Searchbars01UI(props: Searchbars01UIProps): JSX.Element {
  const [ischanged, setIschanged] = useState(false)
  const getDebounce = _.debounce((value: string) => {
    void props.refetchData({
      ...{
        search: value,
        page: 1,
      },
      ...(props.refetchVariables ?? {}),
    })
    console.log(props.refetchVariables)
    props.refetchDataCount &&
      props.refetchDataCount({
        ...{
          search: value,
        },
        ...(props.refetchVariables ?? {}),
      })
    props.onChangeKeyword(value)
    props.setStartPage && props.setStartPage(1)
    props.setSelectedPage && props.setSelectedPage(1)
    setIschanged(false)
  }, 800)

  const onInputSearch = (event: FormEvent<HTMLInputElement>) => {
    setIschanged(true)
    getDebounce(event.currentTarget.value)
  }

  return (
    <S.SearchWrapper>
      <S.SearchInput
        data-ischanged={ischanged}
        placeholder="제목을 검색해주세요"
        type="text"
        onInput={onInputSearch}
      />
      {props.dateUsed && (
        <S.SearchRightItems>
          <S.DatePickerBox>
            <DatePicker
              onChange={(value, dateString) => {
                props.setStartDate(
                  Array.isArray(dateString) || dateString === '' ? null : dateString
                )
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
      )}
    </S.SearchWrapper>
  )
}