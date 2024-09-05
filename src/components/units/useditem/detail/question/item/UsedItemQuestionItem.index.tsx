import { useState } from 'react'
import * as S from 'src/components/units/board/detail/comment/list/BoardCommentList.styles'
import Image from 'next/image'
import { toYYYYMMDD } from 'src/lib/utils/date'
import UsedItemQuestionWriteUI from '../write/UsedItemQuestionWrite.index'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'

export default function BoardCommentItem(props): JSX.Element {
  const [isEdit, setIsEdit] = useState(false)
  const { data } = useQueryFetchUserLoggedIn()

  const handleCommentToggle = (): void => {
    setIsEdit((prev) => !prev)
  }

  return (
    <>
      {!isEdit ? (
        <S.CommentBox key={`${props.idx}`}>
          <S.CommentInfo>
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
              <S.Comment>{props.question.contents}</S.Comment>
              <S.Date>{toYYYYMMDD(new Date(props.question.updatedAt))}</S.Date>
            </S.InfoBox>
          </S.CommentInfo>
          {data?.fetchUserLoggedIn?._id === props.question?.user._id && (
            <S.Buttons>
              <button
                id={props.question._id}
                data-contents={props.question.contents}
                onClick={handleCommentToggle}
              >
                <Image src={'/images/ic_pencil-gray.png'} width={18} height={18} />
              </button>
              <button
                id={props.question._id}
                onClick={() => props.onClickQuestionDelete(props.question._id)}
              >
                <Image src={'/images/ic_close-gray.png'} width={14} height={14} />
              </button>
            </S.Buttons>
          )}
        </S.CommentBox>
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
