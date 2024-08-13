import type { ChangeEvent, MouseEvent, Dispatch, SetStateAction } from 'react'
import { IFileManager, IQuery } from 'src/commons/types/generated/types'
import type { Address } from 'react-daum-postcode'

export interface AddressSearchHandler {
  isOpen: boolean
  handleModalOpen: (event: MouseEvent<HTMLButtonElement>) => void
  handleGetAddress: (data: Address) => void
  address: string
  addressDetail: string
  zipcode: string
  setAddressDetail: Dispatch<SetStateAction<string>>
}

export interface IBoardWriteUIProps {
  setWriter: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  setTitle: Dispatch<SetStateAction<string>>
  setYoutubeUrl: Dispatch<SetStateAction<string>>
  setContents: Dispatch<SetStateAction<string>>
  writerError: string
  passwordError: string
  titleError: string
  contentsError: string
  setWriterError: Dispatch<SetStateAction<string>>
  setPasswordError: Dispatch<SetStateAction<string>>
  setTitleError: Dispatch<SetStateAction<string>>
  setContentsError: Dispatch<SetStateAction<string>>
  fileUrls: string[]
  onChangeFileUrls: (url: IFileManager['url'], index: number) => void
  onChangeFormInput: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>>,
    message: string
  ) => void
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickReset: (index: number) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUndo: (event: MouseEvent<HTMLButtonElement>) => void
  formValidation: boolean
  isEdit: boolean
  data?: Pick<IQuery, 'fetchBoard'>
  addressSearchHandler: AddressSearchHandler
}

export interface IBoardWriteProps {
  isEdit: boolean
  data?: Pick<IQuery, 'fetchBoard'>
}
