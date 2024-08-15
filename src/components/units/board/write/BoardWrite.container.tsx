import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import BoardWriteUI from './BoardWrite.presenter'
import { IBoardWriteProps } from './BoardWrite.types'
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
  ICreateBoardInput,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'
import type { Address } from 'react-daum-postcode'

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const [fileUrls, setFileUrls] = useState(['', '', ''])

  const [isOpen, setIsOpen] = useState(false)

  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [address, setAddress] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [zipcode, setZipcode] = useState('')

  const [writerError, setWriterError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contentsError, setContentsError] = useState('')
  const [formValidation, setFormValidation] = useState(false)

  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(
    CREATE_BOARD
  )
  const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  )
  const router = useRouter()

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }

  const onClickReset = (index: number): void => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = ''
    setFileUrls(newFileUrls)
  }

  const onChangeFormInput = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>> | null,
    message: string
  ): void => {
    setInput(event.target.value)
    if (setError) {
      if (event.target.value !== '') {
        setError('')
      } else {
        setError(message)
      }
    }
  }

  const onClickUndo = (): void => {
    props.isEdit ? router.push(`/boards/${props?.data?.fetchBoard?._id}`) : router.push(`/boards`)
  }

  const onClickSubmit = async (): Promise<void> => {
    if (!writer) {
      setWriterError('작성자를 입력해주세요')
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요')
    }
    if (!title) {
      setTitleError('제목을 입력해주세요')
    }
    if (!contents) {
      setContentsError('내용을 입력해주세요')
    }
    try {
      const boardAddress = {
        address,
        addressDetail,
        zipcode,
      }
      const createBoardInput: ICreateBoardInput = {
        writer,
        password,
        title,
        contents,
        images: fileUrls,
        youtubeUrl,
        boardAddress,
      }
      const createBoardResult = await createBoard({
        variables: {
          createBoardInput,
        },
      })
      if (createBoardResult?.data?.createBoard?._id) {
        Modal.success({ content: '게시글이 등록되었습니다.' })
        router.push(`/boards/${createBoardResult?.data?.createBoard?._id}`)
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickUpdate = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls)
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images)
    const isChangedFiles = currentFiles !== defaultFiles
    if (
      title === '' &&
      contents === '' &&
      youtubeUrl === '' &&
      address === '' &&
      addressDetail === '' &&
      zipcode === '' &&
      !isChangedFiles
    ) {
      Modal.warning({ content: '수정한 내용이 없습니다' })
      return
    }
    if (password === '') {
      Modal.warning({ content: '비밀번호를 입력해주세요.' })
      return
    }
    const updateBoardInput: IUpdateBoardInput = {}
    if (title) updateBoardInput['title'] = title
    if (contents) updateBoardInput['contents'] = contents
    if (isChangedFiles) updateBoardInput['images'] = fileUrls
    updateBoardInput['youtubeUrl'] = youtubeUrl
    updateBoardInput['boardAddress'] = {
      address,
      addressDetail,
      zipcode,
    }
    try {
      if (typeof router.query.boardId !== 'string') {
        Modal.error({ content: '시스템에 문제가 있습니다.' })
        return
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput,
        },
      })
      if (result?.data?.updateBoard?._id) {
        Modal.success({ content: '게시글이 수정되었습니다.' })
        router.push(`/boards/${result?.data?.updateBoard?._id}`)
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const handleModalOpen = (): void => {
    setIsOpen((prev) => !prev)
  }

  const handleGetAddress = (data: Address): void => {
    setIsOpen((prev) => !prev)
    if (data) {
      setAddress(data.address)
      setZipcode(data.zonecode)
    } else {
      Modal.warning({ content: '주소를 정상적으로 읽어오지 못했습니다.' })
    }
  }

  useEffect(() => {
    const fetchBoard = props?.data?.fetchBoard
    fetchBoard?.boardAddress?.address && setAddress(fetchBoard?.boardAddress?.address)
    fetchBoard?.boardAddress?.zipcode && setZipcode(fetchBoard?.boardAddress?.zipcode)
    if (fetchBoard?.images !== undefined && fetchBoard?.images !== null)
      setFileUrls([...fetchBoard?.images])
  }, [props?.data?.fetchBoard])

  useEffect(() => {
    const fetchBoard = props?.data?.fetchBoard
    if (
      (writer || fetchBoard?.writer) &&
      (title || fetchBoard?.title) &&
      (contents || fetchBoard?.contents) &&
      password
    ) {
      setFormValidation(true)
    } else {
      setFormValidation(false)
    }
  }, [writer, password, title, contents])

  return (
    <BoardWriteUI
      setWriter={setWriter}
      setPassword={setPassword}
      setTitle={setTitle}
      setYoutubeUrl={setYoutubeUrl}
      setContents={setContents}
      writerError={writerError}
      setWriterError={setWriterError}
      passwordError={passwordError}
      setPasswordError={setPasswordError}
      setContentsError={setContentsError}
      titleError={titleError}
      setTitleError={setTitleError}
      contentsError={contentsError}
      onChangeFormInput={onChangeFormInput}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickUndo={onClickUndo}
      onChangeFileUrls={onChangeFileUrls}
      onClickReset={onClickReset}
      formValidation={formValidation}
      isEdit={props.isEdit}
      data={props.data}
      fileUrls={fileUrls}
      addressSearchHandler={{
        isOpen,
        handleModalOpen: handleModalOpen,
        handleGetAddress: handleGetAddress,
        address,
        addressDetail,
        zipcode,
        setAddressDetail,
      }}
    />
  )
}
