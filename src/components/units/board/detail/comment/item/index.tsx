import { useState } from 'react'
import BoardCommentWriteUI from 'src/components/units/board/detail/comment/write/BoardCommentWrite.presenter'
import * as S from 'src/components/units/board/detail/comment/list/BoardCommentList.styles'
import Image from 'next/image'
import { toYYYYMMDD } from 'src/lib/utils/date'
import type { MouseEvent, FormEvent } from 'react'
import { Modal } from 'antd'

export default function CommentItem(props) {
  const [isEdit, setIsEdit] = useState(false)
  const [rating, setRating] = useState(props.comment.rating)
  const [contents, setContents] = useState(props.comment.contents)
  const [writer, setWriter] = useState(props.comment.writer)
  const [password, setPassword] = useState('')

  const onClickCommentUpdateProps = async (): Promise<void> => {
    try {
      await props.props.onClickCommentUpdate({
        boardCommentId: props.comment._id,
        password,
        updateBoardCommentInput: {
          contents,
          rating: Number(rating),
        },
      })
      setIsEdit(false)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickRating = (event: MouseEvent<HTMLImageElement>): void => {
    setRating(Number(event.currentTarget.id.replace('rating', '')))
  }

  const onInputContents = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {
      currentTarget: { value },
    } = event
    if (value.length <= 100) {
      setContents(value)
    } else {
      setContents(value.substring(0, 100))
    }
  }

  const onInputUserInfo = (event: FormEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { value, type },
    } = event
    if (type === 'text') setWriter(value)
    if (type === 'password') setPassword(value)
  }

  const onClickCommentToggle = (): void => {
    setWriter(props.comment.writer)
    setRating(props.comment.rating)
    setContents(props.comment.contents)
    setPassword('')
    setIsEdit((prev) => !prev)
  }

  return (
    <>
      {!isEdit ? (
        <S.CommentBox key={`${props.idx}`}>
          <S.CommentInfo>
            <Image src={'/images/ic_profile.png'} width={40} height={40} />
            <div>
              <S.UserName>{writer}</S.UserName>
              <S.Rating>
                {Array.from({ length: 5 }, (_, index) =>
                  rating < index + 1 ? (
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
          key={`${props.idx}`}
          onClickRating={onClickRating}
          rating={rating}
          contents={contents}
          writer={writer}
          password={password}
          onInputContents={onInputContents}
          onInputUserInfo={onInputUserInfo}
          onClickSubmit={onClickCommentUpdateProps}
          onClickCommentToggle={onClickCommentToggle}
          isEdit={true}
        />
      )}
    </>
  )
}
