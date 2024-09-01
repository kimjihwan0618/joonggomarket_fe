import { QueryResult } from '@apollo/client'
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

export interface Searchbars01Props {
  refetchData: QueryResult['refetch']
  refetchDataCount?: QueryResult['refetch']
  endDate: string | null
  startDate: string | null
  setStartPage?: Dispatch<SetStateAction<number>>
  setEndDate: Dispatch<SetStateAction<string | null>>
  setStartDate: Dispatch<SetStateAction<string | null>>
  setSelectedPage?: Dispatch<SetStateAction<number>>
  onChangeKeyword: (value: string) => void
  fetchOptions?: object
}

export interface Searchbars01UIProps {
  onInputSearch: (event: FormEvent<HTMLInputElement>) => void
  endDate: string | null
  startDate: string | null
  setEndDate: Dispatch<SetStateAction<string | null>>
  setStartDate: Dispatch<SetStateAction<string | null>>
  ischanged: boolean
}
