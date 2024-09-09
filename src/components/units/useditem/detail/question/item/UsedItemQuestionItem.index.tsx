import { useState } from 'react'
import * as S from 'src/components/units/useditem/detail/question/list/UsedItemQuestionList.styles'
import Image from 'next/image'
import { toYYYYMMDD } from 'src/lib/utils/date'
import UsedItemQuestionWriteUI from '../write/UsedItemQuestionWrite.index'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'
import { useRouter } from 'next/router'
import { useQueryFetchUsedItem } from 'src/components/commons/hooks/quires/usedItem/useQueryFetchUsedItem'
import UsedItemQuestionAnswerListUI from '../answer/list/UsedItemQuestionAnswerList.index'

export default function UsedItemQuestionItem(props): JSX.Element {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [answerIsEdit, setAnswerIsEdit] = useState(false)
  const { data } = useQueryFetchUserLoggedIn()
  const useditemId = typeof router.query.useditemId === 'string' ? router.query.useditemId : ''
  const { data: useditem } = useQueryFetchUsedItem(useditemId)

  const handleCommentToggle = (): void => {
    setIsEdit((prev) => !prev)
  }

  const onClickAnswerToggle = (): void => {
    setAnswerIsEdit((prev) => !prev)
  }

  return (
    <>
      {!isEdit ? (
        <>
          <S.QuestionBox key={`${props.idx}`}>
            <S.QuestionInfo>
              <Image
                src={
                  props.question?.user?.picture
                    ? `https://storage.googleapis.com/${props.question?.user?.picture}`
                    : '/images/ic_profile.png'
                }
                width={40}
                height={40}
              />
              <S.InfoBox>
                <S.Writer>{props.question.user.name}</S.Writer>
                <S.Question>{props.question.contents}</S.Question>
                <S.Date>{toYYYYMMDD(new Date(props.question.updatedAt))}</S.Date>
              </S.InfoBox>
            </S.QuestionInfo>
            <S.Buttons>
              {data?.fetchUserLoggedIn?._id === props.question?.user._id && (
                <>
                  <button onClick={handleCommentToggle}>
                    <Image src={'/images/ic_pencil-gray.png'} width={18} height={18} />
                  </button>
                  <button onClick={() => props.onClickQuestionDelete(props.question._id)}>
                    <Image src={'/images/ic_close-gray.png'} width={18} height={18} />
                  </button>
                </>
              )}
              {data?.fetchUserLoggedIn?._id === useditem?.fetchUseditem?.seller?._id &&
                !answerIsEdit && (
                  <button onClick={onClickAnswerToggle}>
                    <Image src={'/images/ic_answer.png'} width={18} height={18} />
                  </button>
                )}
            </S.Buttons>
          </S.QuestionBox>
          <UsedItemQuestionAnswerListUI
            onClickAnswerToggle={onClickAnswerToggle}
            useditemQuestion={props?.question}
            answerIsEdit={answerIsEdit}
            setAnswerIsEdit={setAnswerIsEdit}
          />
        </>
      ) : (
        <UsedItemQuestionWriteUI
          data={props.question}
          isEdit={isEdit}
          handleCommentToggle={handleCommentToggle}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  )
}
