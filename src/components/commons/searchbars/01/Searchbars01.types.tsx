import { QueryResult } from '@apollo/client'
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

export interface Searchbars01Props {
  refetchTableDatas: QueryResult['refetch']
  refetchTableDatasCount: QueryResult['refetch']
  setActivePage: Dispatch<SetStateAction<number>>
  setStartPage: Dispatch<SetStateAction<number>>
  endDate: string
  startDate: string
  setEndDate: Dispatch<SetStateAction<Date>>
  setStartDate: Dispatch<SetStateAction<Date>>
  setKeyword: Dispatch<SetStateAction<string>>
}

export interface Searchbars01UIProps {
  onInputSearch: (event: FormEvent<HTMLInputElement>) => void
  endDate: string
  startDate: string
  setEndDate: Dispatch<SetStateAction<Date>>
  setStartDate: Dispatch<SetStateAction<Date>>
  isChanging: boolean
}
