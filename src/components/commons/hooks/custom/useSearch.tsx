import { useState } from 'react'

export const useSearch = () => {
  const [startPage, setStartPage] = useState(1)
  const [selectedPage, setSelectedPage] = useState(1)
  const [keyword, setKeyword] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const onChangeKeyword = (value: string) => {
    setKeyword(value)
  }

  return {
    keyword,
    onChangeKeyword,
    setStartDate,
    setEndDate,
    startDate,
    endDate,
    selectedPage,
    setSelectedPage,
    startPage,
    setStartPage,
  }
}
