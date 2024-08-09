import { useRouter } from 'next/router'
import BoardCommentListUI from './BoardCommentList.presenter'
import { useMutation, useQuery } from '@apollo/client'
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from './BoardCommentList.queries'
import type { MouseEvent, FormEvent } from 'react'
import { useState } from 'react'
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
  const [passwordCheck, setPasswordCheck] = useState('')
  const [deleteCommentId, setDeleteCommentId] = useState('')

  const onClickCommentUpdate = async (params): Promise<void> => {
    try {
      if (params.password === '') {
        throw new Error('비밀번호를 입력해주세요')
      }
      const result = await updateBoardComment({
        variables: {
          boardCommentId: params._id,
          password: params.password,
          updateBoardCommentInput: {
            contents: params.contents,
            rating: Number(params.rating),
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId },
          },
        ],
      })
    } catch (error) {
      throw error
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
      onClickCommentUpdate={onClickCommentUpdate}
      onClickCommentDeleteOk={onClickCommentDeleteOk}
      onClickCommentDelete={onClickCommentDelete}
      setPasswordCheck={setPasswordCheck}
      isOpen={isOpen}
      handlePasswordModal={handlePasswordModal}
      passwordCheck={passwordCheck}
    />
  )
}
