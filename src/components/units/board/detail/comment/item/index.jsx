import { useState } from 'react'
import BoardCommentWriteUI from 'src/components/units/board/detail/comment/write/BoardCommentWrite.presenter'
import * as S from 'src/components/units/board/detail/comment/list/BoardCommentList.styles'
import Image from 'next/image'
import { toYYYYMMDD } from 'src/lib/utils/date'

export default function CommentItem(props) {
  const [isEdit, setIsEdit] = useState(false)

  const onClickCommentToggle = () => {
    setIsEdit((prev) => !prev)
  }

  return (
    <>
      {!isEdit ? (
        <S.CommentBox key={`${props.comment.writer}_${props.idx}`}>
          <S.CommentInfo>
            <Image src={'/images/ic_profile.png'} width={40} height={40} />
            <div>
              <S.UserName>{props.comment.writer}</S.UserName>
              <S.Rating>
                {Array.from({ length: 5 }, (_, index) =>
                  props.comment.rating < index + 1 ? (
                    <div key={index}>
                      <Image src={'/images/ic_star-gray.png'} width={20} height={20} />
                    </div>
                  ) : (
                    <div key={index}>
                      <Image src={'/images/ic_star-yellow.png'} width={20} height={20} />
                    </div>
                  )
                )}
              </S.Rating>
              <S.Comment>{props.comment.contents}</S.Comment>
              <S.Date>{toYYYYMMDD(new Date(props.comment.updatedAt))}</S.Date>
            </div>
          </S.CommentInfo>
          <S.Buttons>
            <button
              id={props.comment._id}
              data-writer={props.comment.writer}
              data-contents={props.comment.contents}
              data-rating={props.comment.rating}
              onClick={onClickCommentToggle}
            >
              <Image src={'/images/ic_pencil-gray.png'} width={18} height={18} />
            </button>
            <button id={props.comment._id} onClick={props.props.onClickCommentDelete}>
              <Image src={'/images/ic_close-gray.png'} width={14} height={14} />
            </button>
          </S.Buttons>
        </S.CommentBox>
      ) : (
        <BoardCommentWriteUI
          key={`${props.comment.writer}_${props.idx}`}
          onClickRating={props.props.onClickRating}
          rating={props.props.rating}
          contents={props.props.contents}
          writer={props.props.writer}
          password={props.props.password}
          onInputContents={props.props.onInputContents}
          onInputUserInfo={props.props.onInputUserInfo}
          onClickSubmit={props.props.onClickCommentUpdate}
          onClickCommentToggle={onClickCommentToggle}
          isEdit={true}
        />
      )}
    </>
  )
}
