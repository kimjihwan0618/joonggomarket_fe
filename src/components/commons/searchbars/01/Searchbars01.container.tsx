import { useState, type FormEvent } from 'react'
import Searchbars01UI from './Searchbars01.presenter'
import { Searchbars01Props } from './Searchbars01.types'
import _ from 'lodash'

export default function Searchbars01(props: Searchbars01Props): JSX.Element {
  const [ischanged, setIschanged] = useState(false)

  const getDebounce = _.debounce((value: string) => {
    void props.refetchTableData({
      search: value,
      endDate: props.endDate,
      startDate: props.startDate,
      page: 1,
    })
    props.refetchTableDataCount({
      search: value,
      endDate: props.endDate,
      startDate: props.startDate,
    })
    props.onChangeKeyword(value)
    props.setStartPage(1)
    props.setSelectedPage(1)
    setIschanged(false)
  }, 800)

  const onInputSearch = (event: FormEvent<HTMLInputElement>) => {
    setIschanged(true)
    getDebounce(event.currentTarget.value)
  }

  return (
    <Searchbars01UI
      onInputSearch={onInputSearch}
      setStartDate={props.setStartDate}
      setEndDate={props.setEndDate}
      endDate={props.endDate}
      startDate={props.startDate}
      ischanged={ischanged}
    />
  )
}
