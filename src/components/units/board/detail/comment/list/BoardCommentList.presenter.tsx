import { toYYYYMMDD } from "src/lib/utils/date"
import * as S from "./BoardCommentList.styles"
import Image from "next/image"

export default function BoardCommentListUI({ data }) {
  return (
    <S.Wrapper>
      {
        data?.fetchBoardComments && (
          data?.fetchBoardComments.map((comment, idx) => (
            <S.CommentBox key={`${comment.writer}_${idx}`}>
              <S.CommentInfo>
                <Image src={'/images/ic_profile.png'} width={40} height={40} />
                <div>
                  <S.UserName>{comment.writer}</S.UserName>
                  <S.Rating>
                    <div><Image src={'/images/ic_star-gray.png'} width={20} height={20} /></div>
                    <div><Image src={'/images/ic_star-gray.png'} width={20} height={20} /></div>
                    <div><Image src={'/images/ic_star-gray.png'} width={20} height={20} /></div>
                    <div><Image src={'/images/ic_star-gray.png'} width={20} height={20} /></div>
                    <div><Image src={'/images/ic_star-gray.png'} width={20} height={20} /></div>
                  </S.Rating>
                  <S.Comment>{comment.contents}</S.Comment>
                  <S.Date>{toYYYYMMDD(new Date(comment.updatedAt))}</S.Date>
                </div>
              </S.CommentInfo>
              <S.Buttons>
                <button><Image src={'/images/ic_pencil-gray.png'} width={18} height={18} /></button>
                <button><Image src={'/images/ic_close-gray.png'} width={14} height={14} /></button>
              </S.Buttons>
            </S.CommentBox>
          ))
        )
      }
    </S.Wrapper>
  )
}