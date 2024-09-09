import { useState } from 'react'
import BoardCommentWriteUI from 'src/components/units/board/detail/comment/write/BoardCommentWrite.index'
import * as S from 'src/components/units/board/detail/comment/list/BoardCommentList.styles'
import Image from 'next/image'
import { toYYYYMMDD } from 'src/lib/utils/date'
import { IBoardComment } from 'src/commons/types/generated/types'

interface IBoardCommentItemProps {
  key: IBoardComment['_id']
  idx: number
  comment: IBoardComment
  handlePasswordModal: (commentId: IBoardComment['_id']) => void
}

export default function BoardCommentItem(props: IBoardCommentItemProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false)

  const handleCommentToggle = (): void => {
    setIsEdit((prev) => !prev)
  }

  return (
    <>
      {!isEdit ? (
        <S.CommentBox key={`${props.idx}`}>
          <S.CommentInfo>
            <Image src={'/images/ic_profile.png'} width={40} height={40} />
            <S.InfoBox>
              <S.WriterRating>
                <S.Writer>{props.comment.writer}</S.Writer>
                <S.Rating>
                  {Array.from({ length: 5 }, (_, index) =>
                    props.comment.rating < index + 1 ? (
                      <Image key={index} src={'/images/ic_star-gray.png'} width={20} height={20} />
                    ) : (
                      <Image
                        key={index}
                        src={'/images/ic_star-yellow.png'}
                        width={20}
                        height={20}
                      />
                    )
                  )}
                </S.Rating>
              </S.WriterRating>
              <S.Comment>{props.comment.contents}</S.Comment>
              <S.Date>{toYYYYMMDD(new Date(props.comment.updatedAt))}</S.Date>
            </S.InfoBox>
          </S.CommentInfo>
          <S.Buttons>
            <button
              id={props.comment._id}
              data-writer={props.comment.writer}
              data-contents={props.comment.contents}
              data-rating={props.comment.rating}
              onClick={handleCommentToggle}
            >
              <Image src={'/images/ic_pencil-gray.png'} width={18} height={18} />
            </button>
            <button
              id={props.comment._id}
              onClick={() => props.handlePasswordModal(props.comment._id)}
            >
              <Image src={'/images/ic_close-gray.png'} width={14} height={14} />
            </button>
          </S.Buttons>
        </S.CommentBox>
      ) : (
        <BoardCommentWriteUI
          data={props.comment}
          isEdit={isEdit}
          handleCommentToggle={handleCommentToggle}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  )
}
