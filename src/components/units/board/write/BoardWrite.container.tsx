import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import BoardWriteUI from './BoardWrite.presenter'
import { IBoardWriteProps } from './BoardWrite.types'
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'
import type { Address } from 'react-daum-postcode'

export default function BoardWrite(props: IBoardWriteProps) {
  const fileRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]
  const [imageFiles, setImageFiles] = useState<{ file: File | null; number: 1 | 2 | 3 }[]>([
    { file: null, number: 1 },
    { file: null, number: 2 },
    { file: null, number: 3 },
  ])

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

  const onChangeFormInput = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>> | null,
    message: string
  ) => {
    setInput(event.target.value)
    if (setError) {
      if (event.target.value !== '') {
        setError('')
      } else {
        setError(message)
      }
    }
  }

  const onClickUndo = () => {
    props.isEdit ? router.push(`/boards/${props?.data?.fetchBoard?._id}`) : router.push(`/boards`)
  }

  const onClickSubmit = async () => {
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
      const images = imageFiles
        .filter((item) => item.file !== null)
        .map((item) => (item.file as File).name)
      const boardAddress = {
        address,
        addressDetail,
        zipcode,
      }
      const createBoardInput = {
        writer,
        password,
        title,
        contents,
        images,
        youtubeUrl,
        boardAddress,
      }
      const result = await createBoard({
        variables: {
          createBoardInput,
        },
      })
      if (result?.data?.createBoard?._id) {
        Modal.success({ content: '게시글이 등록되었습니다.' })
        router.push(`/boards/${result?.data?.createBoard?._id}`)
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickUpdate = async () => {
    if (!password) {
      Modal.warning({ content: '비밀번호를 입력해주세요.' })
      return
    }
    const updateBoardInput = {}
    if (title) updateBoardInput['title'] = title
    if (contents) updateBoardInput['contents'] = contents
    const images = imageFiles
      .filter((item) => item.file !== null)
      .map((item) => (item.file as File).name)
    updateBoardInput['images'] = images
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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileNumber = Number(event.currentTarget.getAttribute('data-fileNumber'))
    const file = event.target.files?.[0]
    setImageFiles((prev) =>
      prev.map((image) => (image.number === fileNumber ? { ...image, file } : image))
    )
  }

  const handleModalOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleGetAddress = (data: Address) => {
    setIsOpen((prev) => !prev)
    if (data) {
      setAddress(data.address)
      setZipcode(data.zonecode)
    } else {
      Modal.warning({ content: '주소를 정상적으로 읽어오지 못했습니다.' })
    }
  }

  const onClickImageUpload = (fileNumber: 1 | 2 | 3) => {
    fileRefs[fileNumber - 1].current.click()
  }

  const onClickImageReset = (fileNumber: 1 | 2 | 3) => {
    setImageFiles((prev) =>
      prev.map((image) => (image.number === fileNumber ? { ...image, file: null } : image))
    )
  }

  useEffect(() => {
    const fetchBoard = props?.data?.fetchBoard
    fetchBoard?.boardAddress?.address && setAddress(fetchBoard?.boardAddress?.address)
    fetchBoard?.boardAddress?.addressDetail &&
      setAddressDetail(fetchBoard?.boardAddress?.addressDetail)
    fetchBoard?.boardAddress?.zipcode && setZipcode(fetchBoard?.boardAddress?.zipcode)
    fetchBoard?.title && setTitle(fetchBoard?.title)
    fetchBoard?.contents && setContents(fetchBoard?.contents)
    fetchBoard?.writer && setWriter(fetchBoard?.writer)
    fetchBoard?.youtubeUrl && setYoutubeUrl(fetchBoard?.youtubeUrl)
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
      formValidation={formValidation}
      isEdit={props.isEdit}
      data={props.data}
      fileInputHandler={{
        handleFileChange: handleFileChange,
        onClickImageUpload: onClickImageUpload,
        onClickImageReset: onClickImageReset,
        imageFiles: imageFiles,
        fileRefs: fileRefs,
      }}
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
