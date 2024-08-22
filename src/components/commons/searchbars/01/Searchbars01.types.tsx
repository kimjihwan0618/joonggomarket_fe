import { QueryResult } from '@apollo/client'
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

export interface Searchbars01Props {
  refetchTableData: QueryResult['refetch']
  refetchTableDataCount: QueryResult['refetch']
  endDate: string
  startDate: string
  setStartPage: Dispatch<SetStateAction<number>>
  setEndDate: Dispatch<SetStateAction<string | null>>
  setStartDate: Dispatch<SetStateAction<string | null>>
  setSelectedPage: Dispatch<SetStateAction<number>>
  onChangeKeyword: (value: string) => void
}

export interface Searchbars01UIProps {
  onInputSearch: (event: FormEvent<HTMLInputElement>) => void
  endDate: string
  startDate: string
  setEndDate: Dispatch<SetStateAction<string | null>>
  setStartDate: Dispatch<SetStateAction<string | null>>
  isChanging: boolean
}
