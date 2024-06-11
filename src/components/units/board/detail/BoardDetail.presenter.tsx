import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date';
import * as S from './BoardDetail.styles';
import Image from 'next/image';

export default function BoardDetailUI({ board, onClickDeleteButton, onClickBoardsButton, onClickUpdateButton }) {
  return (
    <>
      <S.ContentWrapper>
        <S.BoardTitleWrapper>
          <S.WriterInfo>
            <Image src={'/images/ic_profile.png'} width={56} height={56} />
            <S.Info>
              <dt>{board?.writer}</dt>
              <dd>Date : {board?.updatedAt && toYYYYMMDDHHMMSS(board?.updatedAt)}</dd>
            </S.Info>
          </S.WriterInfo>
          <div></div>
          {/* div children marker , linker */}
        </S.BoardTitleWrapper>
        <S.ContentsWrapper>
          <S.ContentsTitle>{board?.title}</S.ContentsTitle>
          <S.ContentsMain>
            <p>{board?.contents}</p>
          </S.ContentsMain>
        </S.ContentsWrapper>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <S.BoardActionButton onClick={onClickBoardsButton}>목록으로</S.BoardActionButton>
        <S.BoardActionButton onClick={onClickUpdateButton}>수정하기</S.BoardActionButton>
        <S.BoardActionButton onClick={onClickDeleteButton}>삭제하기</S.BoardActionButton>
      </S.ButtonWrapper>
    </>
  );
}
