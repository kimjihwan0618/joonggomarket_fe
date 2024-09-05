import * as S from './UsedItemQuestionList.styles'
import InfiniteScroll from 'react-infinite-scroller'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useFetchMoreScroll } from 'src/components/commons/hooks/custom/useFetchMoreScroll'
import { useQueryFetchUsedItemQuestions } from 'src/components/commons/hooks/quires/usedItem/question/useQueryFetchUsedItemQuestions'
import UsedItemQuestionItem from 'src/components/units/useditem/detail/question/item/UsedItemQuestionItem.index'
import { useMutationDeleteUsedItemQuestion } from 'src/components/commons/hooks/mutations/usedItem/question/useMutationDeleteUsedItemQuestion'
import { Modal } from 'antd'

export default function UsedItemQuestionListUI(): JSX.Element {
  const router = useRouter()
  const useditemId = typeof router.query.useditemId === 'string' ? router.query.useditemId : ''
  const [deleteQuestionId, setDeleteQuestionId] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { data, fetchMore } = useQueryFetchUsedItemQuestions(useditemId)
  const { deleteUsedItemQuestion, loading } = useMutationDeleteUsedItemQuestion({
    useditemId,
    deleteQuestionId,
  })
  const { onLoadMore } = useFetchMoreScroll({
    fetchData: data,
    fetchListName: 'fetchUseditemQuestions',
    fetchMore,
    variables: {
      useditemId,
    },
  })

  const onClickDeleteOk = async (): Promise<void> => {
    await deleteUsedItemQuestion()
    setDeleteQuestionId('')
    setIsOpen(false)
  }

  const handleQuestionDeleteConfirm = (questionId): void => {
    event.stopPropagation()
    setDeleteQuestionId(questionId ?? '')
    setIsOpen((prev) => !prev)
  }

  return (
    <S.Wrapper>
      <Modal
        title="해당 문의 댓글을 삭제하시겠습니까?"
        open={isOpen}
        onOk={onClickDeleteOk}
        onCancel={handleQuestionDeleteConfirm}
        okButtonProps={{ disabled: loading }}
        confirmLoading={loading}
        okText="확인"
        cancelText="취소"
      />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemQuestions.map((question, idx) => (
          <UsedItemQuestionItem
            key={question._id}
            idx={idx}
            question={question}
            onClickQuestionDelete={handleQuestionDeleteConfirm}
          />
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  )
}
