import type { ChangeEvent, MouseEvent, Dispatch, SetStateAction } from 'react'
import { IQuery } from 'src/commons/types/generated/types'
import type { Address } from 'react-daum-postcode'

export interface FileInputHandler {
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClickImageUpload: (fileNumber: 1 | 2 | 3) => void
  onClickImageReset: (fileNumber: 1 | 2 | 3) => void
  imageFiles: { file: File | null; number: 1 | 2 | 3 }[]
  fileRefs: React.RefObject<HTMLInputElement>[]
}

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
  onChangeFormInput: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>>,
    message: string
  ) => void
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUndo: (event: MouseEvent<HTMLButtonElement>) => void
  formValidation: boolean
  isEdit: boolean
  data?: Pick<IQuery, 'fetchBoard'>
  fileInputHandler: FileInputHandler
  addressSearchHandler: AddressSearchHandler
}

export interface IBoardWriteProps {
  isEdit: boolean
  data?: Pick<IQuery, 'fetchBoard'>
}
