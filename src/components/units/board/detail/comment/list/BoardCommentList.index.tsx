import * as S from './BoardCommentList.styles'
import { Modal } from 'antd'
import BoardCommentItem from 'src/components/units/board/detail/comment/item/BoardCommentItem.index'
import InfiniteScroll from 'react-infinite-scroller'
import Input01 from 'src/components/commons/inputs/01/Input01.index'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQueryFetchBoardComments } from 'src/components/commons/hooks/quires/board/comment/useQueryFetchBoardComments'
import { useMutationDeleteBoardComment } from 'src/components/commons/hooks/mutations/board/comment/useMutationDeleteBoardComment'

export default function BoardCommentListUI(): JSX.Element {
  const router = useRouter()
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : ''
  const [isOpen, setIsOpen] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState('')
  const [deleteCommentId, setDeleteCommentId] = useState('')
  const [confirmLoading, setConfirmLoading] = useState(false)
  const { data, fetchMore } = useQueryFetchBoardComments(boardId)
  const { deleteBoardComment } = useMutationDeleteBoardComment({
    boardId,
    deleteCommentId,
    passwordCheck,
  })

  const onClickDeleteOk = async (): Promise<void> => {
    setConfirmLoading(true)
    await deleteBoardComment()
    setPasswordCheck('')
    setDeleteCommentId('')
    setConfirmLoading(false)
    setIsOpen(false)
  }

  const handlePasswordModal = (commentId): void => {
    event.stopPropagation()
    setIsOpen((prev) => !prev)
    setDeleteCommentId(commentId ?? '')
    setPasswordCheck('')
  }

  const onLoadMore = (): void => {
    if (data === undefined) return
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10 + 1),
        boardId,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          }
        }
        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        }
      },
    })
  }

  return (
    <S.Wrapper>
      <Modal
        title="비밀번호를 입력해주세요."
        open={isOpen}
        onOk={onClickDeleteOk}
        onCancel={handlePasswordModal}
        okButtonProps={{ disabled: passwordCheck === '' }}
        confirmLoading={confirmLoading}
        okText="확인"
        cancelText="취소"
      >
        <Input01
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
          value={passwordCheck}
          fullWidth={true}
        />
      </Modal>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoardComments.map((comment, idx) => (
          <BoardCommentItem
            key={comment._id}
            idx={idx}
            comment={comment}
            handlePasswordModal={handlePasswordModal}
          />
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  )
}
