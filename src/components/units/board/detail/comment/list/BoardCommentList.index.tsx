import * as S from './BoardCommentList.styles'
import { Modal } from 'antd'
import BoardCommentItem from 'src/components/units/board/detail/comment/item/BoardCommentItem.index'
import InfiniteScroll from 'react-infinite-scroller'
import Input01 from 'src/components/commons/inputs/01/Input01.index'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQueryFetchBoardComments } from 'src/components/commons/hooks/quires/board/comment/useQueryFetchBoardComments'
import { useMutationDeleteBoardComment } from 'src/components/commons/hooks/mutations/board/comment/useMutationDeleteBoardComment'
import { useFetchMoreScroll } from 'src/components/commons/hooks/custom/useFetchMoreScroll'
import { IBoardComment } from 'src/commons/types/generated/types'

export default function BoardCommentListUI(): JSX.Element {
  const router = useRouter()
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : ''
  const [isOpen, setIsOpen] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState('')
  const [deleteCommentId, setDeleteCommentId] = useState('')
  const { data, fetchMore } = useQueryFetchBoardComments(boardId)
  const { deleteBoardComment, loading } = useMutationDeleteBoardComment({
    boardId,
    deleteCommentId,
    passwordCheck,
  })
  const { onLoadMore } = useFetchMoreScroll({
    fetchData: data,
    fetchListName: 'fetchBoardComments',
    fetchMore,
    variables: {
      boardId,
      page: 1,
    },
  })

  const onClickDeleteOk = async (): Promise<void> => {
    await deleteBoardComment()
    setPasswordCheck('')
    setDeleteCommentId('')
    setIsOpen(false)
  }

  const handlePasswordModal = (commentId: IBoardComment['_id']): void => {
    event.stopPropagation()
    setIsOpen((prev) => !prev)
    setDeleteCommentId(commentId ?? '')
    setPasswordCheck('')
  }

  return (
    <S.Wrapper>
      <Modal
        title="비밀번호를 입력해주세요."
        open={isOpen}
        onOk={onClickDeleteOk}
        onCancel={() => handlePasswordModal('')}
        okButtonProps={{ disabled: passwordCheck === '' || loading }}
        confirmLoading={loading}
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
