import { Dispatch, SetStateAction, useState } from 'react'
import * as S from 'src/components/units/useditem/detail/question/answer/list/UsedItemQuestionAnswerList.styles'
import Image from 'next/image'
import { toYYYYMMDD } from 'src/lib/utils/date'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'
import UsedItemQuestionAnswerWriteUI from '../write/UsedItemQuestionAnswerWrite.index'
import { IUseditemQuestion, IUseditemQuestionAnswer } from 'src/commons/types/generated/types'

interface IUsedItemQuestionAnswerItemProps {
  key: IUseditemQuestionAnswer['_id']
  idx: number
  answer: IUseditemQuestionAnswer
  question: IUseditemQuestion
  onClickQuestionAnswerDelete: (_id: IUseditemQuestionAnswer['_id']) => void
  onClickAnswerToggle: () => void
  answerIsEdit: boolean
  setAnswerIsEdit: Dispatch<SetStateAction<boolean>>
}

export default function UsedItemQuestionAnswerItem(
  props: IUsedItemQuestionAnswerItemProps
): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn()
  const [isEdit, setIsEdit] = useState(false)

  const onClickUpdateAnswerToggle = (): void => {
    setIsEdit((prev) => !prev)
  }

  return (
    <>
      {!isEdit ? (
        <S.AnswerWrapper>
          <S.AnswerBox key={`${props.idx}`}>
            <S.AnswerInfo>
              <Image
                src={
                  props.answer?.user?.picture
                    ? `${process.env.NEXT_PUBLIC_S3_STORAGE}${props.answer?.user?.picture}`
                    : '/images/ic_profile.png'
                }
                width={40}
                height={40}
              />
              <S.InfoBox>
                <S.Writer>{props.answer.user.name}</S.Writer>
                <S.Answer>{props.answer.contents}</S.Answer>
                <S.Date>{toYYYYMMDD(new Date(props.answer.updatedAt))}</S.Date>
              </S.InfoBox>
            </S.AnswerInfo>
            <S.Buttons>
              {data?.fetchUserLoggedIn?._id === props.answer?.user._id && (
                <>
                  <button
                    id={props.answer._id}
                    data-contents={props.answer.contents}
                    onClick={onClickUpdateAnswerToggle}
                  >
                    <Image unoptimized src={'/images/ic_pencil-gray.png'} width={18} height={18} />
                  </button>
                  <button
                    id={props.answer._id}
                    onClick={() => props.onClickQuestionAnswerDelete(props.answer._id)}
                  >
                    <Image unoptimized src={'/images/ic_close-gray.png'} width={18} height={18} />
                  </button>
                </>
              )}
              {/* {data?.fetchUserLoggedIn?._id === props?.question?.user?._id && !props.isEdit && ( */}
              {data?.fetchUserLoggedIn?._id === props?.question?.user?._id && (
                <button onClick={props.onClickAnswerToggle}>
                  <Image unoptimized src={'/images/ic_answer.png'} width={18} height={18} />
                </button>
              )}
            </S.Buttons>
          </S.AnswerBox>
        </S.AnswerWrapper>
      ) : (
        <UsedItemQuestionAnswerWriteUI
          useditemQuestionId={props?.question?._id}
          data={props.answer}
          isEdit={isEdit}
          updateAnswerToggle={onClickUpdateAnswerToggle}
          createAnswerToggle={props.onClickAnswerToggle}
        />
      )}
    </>
  )
}
