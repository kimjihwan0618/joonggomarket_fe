import * as S from './UsedItemQuestionList.styles'
import InfiniteScroll from 'react-infinite-scroller'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useFetchMoreScroll } from 'src/components/commons/hooks/custom/useFetchMoreScroll'
import { useQueryFetchUsedItemQuestions } from 'src/components/commons/hooks/quires/usedItem/question/useQueryFetchUsedItemQuestions'
import UsedItemQuestionItem from 'src/components/units/useditem/detail/question/item/UsedItemQuestionItem.index'
import { useMutationDeleteUsedItemQuestion } from 'src/components/commons/hooks/mutations/usedItem/question/useMutationDeleteUsedItemQuestion'

export default function UsedItemQuestionListUI(): JSX.Element {
  const router = useRouter()
  const useditemId = typeof router.query.useditemId === 'string' ? router.query.useditemId : ''
  const [deleteQuestionId, setDeleteQuestionId] = useState('')
  const [confirmLoading, setConfirmLoading] = useState(false)
  const { data, fetchMore } = useQueryFetchUsedItemQuestions(useditemId)
  const { deleteUsedItemQuestion } = useMutationDeleteUsedItemQuestion({
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
    setConfirmLoading(true)
    await deleteUsedItemQuestion()
    setDeleteQuestionId('')
    setConfirmLoading(false)
  }

  const handlePasswordModal = (commentId): void => {
    event.stopPropagation()
    setDeleteQuestionId(commentId ?? '')
  }

  return (
    <S.Wrapper>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemQuestions.map((question, idx) => (
          <UsedItemQuestionItem key={question._id} idx={idx} question={question} />
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  )
}
