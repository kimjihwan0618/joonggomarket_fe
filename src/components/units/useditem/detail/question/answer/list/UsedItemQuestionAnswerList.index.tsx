import * as S from './UsedItemQuestionAnswerList.styles'
import InfiniteScroll from 'react-infinite-scroller'
import { Dispatch, SetStateAction, useState } from 'react'
import { useFetchMoreScroll } from 'src/components/commons/hooks/custom/useFetchMoreScroll'
import { Modal } from 'antd'
import UsedItemQuestionAnswerItem from '../item/UsedItemQuestionAnswerItem.index'
import { IUseditemQuestion, IUseditemQuestionAnswer } from 'src/commons/types/generated/types'
import { useQueryFetchUsedItemQuestionAnswers } from 'src/components/commons/hooks/quires/usedItem/question/answer/useQueryFetchUsedItemQuestionAnswers'
import UsedItemQuestionAnswerWriteUI from '../write/UsedItemQuestionAnswerWrite.index'
import { useMutationDeleteUseditemQuestionAnswer } from 'src/components/commons/hooks/mutations/usedItem/question/answer/useMutationDeleteUseditemQuestionAnswer'

interface IUsedItemQuestionAnswerListUIProps {
  useditemQuestion: IUseditemQuestion
  onClickAnswerToggle: () => void
  answerIsEdit: boolean
  setAnswerIsEdit: Dispatch<SetStateAction<boolean>>
}

export default function UsedItemQuestionAnswerListUI(
  props: IUsedItemQuestionAnswerListUIProps
): JSX.Element {
  const [deleteQuestionAnswerId, setDeleteQuestionAnswerId] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { data, fetchMore } = useQueryFetchUsedItemQuestionAnswers(props.useditemQuestion?._id)
  const { deleteUsedItemQuestionAnswer, loading } = useMutationDeleteUseditemQuestionAnswer({
    useditemQuestionId: props.useditemQuestion?._id,
    deleteQuestionAnswerId,
  })
  const { onLoadMore } = useFetchMoreScroll({
    fetchData: data,
    fetchListName: 'fetchUseditemQuestionAnswers',
    fetchMore,
    variables: {
      useditemQuestionId: props?.useditemQuestion?._id,
      page: 1,
    },
  })

  const onClickDeleteOk = async (): Promise<void> => {
    await deleteUsedItemQuestionAnswer()
    setDeleteQuestionAnswerId('')
    setIsOpen(false)
  }

  const handleQuestionAnswerDelete = (answerId: IUseditemQuestionAnswer['_id']): void => {
    event.stopPropagation()
    setDeleteQuestionAnswerId(answerId ?? '')
    setIsOpen((prev) => !prev)
  }

  const onClickAnswerToggle = () => {
    props.onClickAnswerToggle()
  }

  return (
    <S.Wrapper>
      <Modal
        title="해당 문의 답변을 삭제하시겠습니까?"
        open={isOpen}
        onOk={onClickDeleteOk}
        onCancel={() => handleQuestionAnswerDelete('')}
        okButtonProps={{ disabled: loading }}
        confirmLoading={loading}
        okText="확인"
        cancelText="취소"
      />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemQuestionAnswers.map((answer, idx) => (
          <UsedItemQuestionAnswerItem
            key={answer._id}
            idx={idx}
            answer={answer}
            question={props.useditemQuestion}
            onClickQuestionAnswerDelete={handleQuestionAnswerDelete}
            onClickAnswerToggle={onClickAnswerToggle}
            answerIsEdit={props.answerIsEdit}
            setAnswerIsEdit={props.setAnswerIsEdit}
          />
        ))}
      </InfiniteScroll>
      {props.answerIsEdit && (
        <UsedItemQuestionAnswerWriteUI
          useditemQuestionId={props?.useditemQuestion?._id}
          createAnswerToggle={props.onClickAnswerToggle}
        />
      )}
    </S.Wrapper>
  )
}
