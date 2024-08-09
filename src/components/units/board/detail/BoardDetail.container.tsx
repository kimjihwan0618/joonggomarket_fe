import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import { DELETE_BOARD, DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from './BoardDetail.queries'
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from 'src/commons/types/generated/types'
import { MouseEvent } from 'react'
import { Modal } from 'antd'

export default function BoardDetail(): JSX.Element {
  const router = useRouter()
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : ''
  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  )
  const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD)
  const [dislikeBoard] = useMutation<Pick<IMutation, 'dislikeBoard'>, IMutationDislikeBoardArgs>(
    DISLIKE_BOARD
  )

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId },
    skip: !router.query.boardId,
  })

  const onClickThumbs = async (event: MouseEvent<HTMLDListElement>): Promise<void> => {
    const isUp = JSON.parse(event.currentTarget.getAttribute('data-up'))
    const updateApi = isUp ? likeBoard : dislikeBoard
    const result = await updateApi({
      variables: {
        boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId },
        },
      ],
    })
  }

  const onClickCopyLink = (): void => {
    const url = window.location.href
    navigator.clipboard
      .writeText(url)
      .then(() => {
        Modal.success({ content: 'URL이 클립보드에 복사되었습니다!' })
      })
      .catch((err) => {
        Modal.error({ content: '클립보드 복사에 실패했습니다.' })
      })
  }

  const onClickUpdateButton = (): void => {
    router.push(`/boards/${router.query.boardId}/edit`)
  }

  const onClickBoardsButton = (): void => {
    router.push('/boards')
  }

  const onClickDeleteButton = async (): Promise<void> => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId,
        },
      })
      if (result?.data?.deleteBoard) {
        Modal.success({ content: '해당 게시글이 삭제되었습니다.' })
        router.push('/boards')
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  if (!boardId) return <></>
  return (
    <BoardDetailUI
      board={data?.fetchBoard}
      onClickBoardsButton={onClickBoardsButton}
      onClickDeleteButton={onClickDeleteButton}
      onClickUpdateButton={onClickUpdateButton}
      onClickThumbs={onClickThumbs}
      onClickCopyLink={onClickCopyLink}
    />
  )
}
