import { useRouter } from 'next/router'
import BoardCommentListUI from './BoardCommentList.presenter'
import { useMutation, useQuery } from '@apollo/client'
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from './BoardCommentList.queries'
import { useState, MouseEvent, FormEvent } from 'react'
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from 'src/commons/types/generated/types'
import { Modal } from 'antd'

export default function BoardCommentList(): JSX.Element {
  const router = useRouter()
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : ''
  const { data: comments } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId },
    skip: !boardId,
  })
  const [updateBoardComment] = useMutation<
    Pick<IMutation, 'updateBoardComment'>,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT)
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT)
  const [isOpen, setIsOpen] = useState(false)
  const [commentId, setCommentId] = useState('')
  const [rating, setRating] = useState(0)
  const [contents, setContents] = useState('')
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [deleteCommentId, setDeleteCommentId] = useState('')

  // const onClickCommentEdit = (event: MouseEvent<HTMLButtonElement>): void => {
  //   const { currentTarget } = event
  //   setCommentId(currentTarget.id)
  //   setWriter(currentTarget.getAttribute('data-writer'))
  //   setContents(currentTarget.getAttribute('data-contents'))
  //   setRating(Number(currentTarget.getAttribute('data-rating')))
  //   setComments(
  //     comments.map((comment) => ({
  //       ...comment,
  //       isEdit: comment._id === currentTarget.id ? true : false,
  //     }))
  //   )
  // }

  const onClickCommentUpdate = async (): Promise<void> => {
    try {
      if (password === '') {
        Modal.warning({ content: '비밀번호를 입력해주세요' })
        return
      }
      const result = await updateBoardComment({
        variables: {
          boardCommentId: commentId,
          password,
          updateBoardCommentInput: {
            contents,
            rating: Number(rating),
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId },
          },
        ],
      })
      if (result?.data?.updateBoardComment?._id) {
        setPassword('')
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickCommentDeleteOk = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    try {
      if (passwordCheck === '') {
        Modal.warning({ content: '비밀번호를 입력해주세요.' })
        return
      }
      const result = await deleteBoardComment({
        variables: {
          boardCommentId: deleteCommentId,
          password: passwordCheck,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId },
          },
        ],
      })
      setIsOpen(false)
      setPasswordCheck('')
      setDeleteCommentId('')
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  const onClickRating = (event: MouseEvent<HTMLImageElement>): void => {
    setRating(Number(event.currentTarget.id.replace('rating', '')))
  }

  const onInputContents = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {
      currentTarget: { value },
    } = event
    if (value.length <= 100) {
      setContents(value)
    } else {
      setContents(value.substring(0, 100))
    }
  }

  const onInputUserInfo = (event: FormEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { value, id },
    } = event
    if (id === 'writerInput') setWriter(value)
    if (id === 'pwInput') setPassword(value)
  }

  const handlePasswordModal = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    setIsOpen((prev) => !prev)
    setDeleteCommentId('')
    setPasswordCheck('')
  }

  const onClickCommentDelete = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    setDeleteCommentId(event.currentTarget.id)
    setIsOpen((prev) => !prev)
  }

  if (!boardId) return <></>
  return (
    <BoardCommentListUI
      comments={comments?.fetchBoardComments}
      // onClickCommentEdit={onClickCommentEdit}
      onClickCommentUpdate={onClickCommentUpdate}
      onClickCommentDeleteOk={onClickCommentDeleteOk}
      onClickCommentDelete={onClickCommentDelete}
      onClickRating={onClickRating}
      rating={rating}
      contents={contents}
      writer={writer}
      password={password}
      setPasswordCheck={setPasswordCheck}
      onInputContents={onInputContents}
      onInputUserInfo={onInputUserInfo}
      isOpen={isOpen}
      handlePasswordModal={handlePasswordModal}
      passwordCheck={passwordCheck}
    />
  )
}
