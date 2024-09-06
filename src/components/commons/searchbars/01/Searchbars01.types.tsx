import { QueryResult } from '@apollo/client'
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

export interface Searchbars01UIProps {
  refetchData: QueryResult['refetch']
  refetchDataCount?: QueryResult['refetch']
  setStartPage?: Dispatch<SetStateAction<number>>
  setEndDate?: Dispatch<SetStateAction<string | null>>
  setStartDate?: Dispatch<SetStateAction<string | null>>
  setSelectedPage?: Dispatch<SetStateAction<number>>
  onChangeKeyword: (value: string) => void
  refetchVariables: object
  dateUsed?: boolean
}
