import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date';
import * as S from './BoardDetail.styles';
import Image from 'next/image';
import { IBoardDetailUIProps } from './BoardDetail.types';

export default function BoardDetailUI({
  board,
  onClickDeleteButton,
  onClickBoardsButton,
  onClickUpdateButton,
  onClickThumbs,
}: IBoardDetailUIProps) {
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
          <S.ThumbsWrapper>
            <li>
              <S.Thumbs data-up={true} onClick={onClickThumbs}>
                <dl>
                  <dt>
                    <Image src={'/images/ic_thumb_up.png'} width={24} height={24} />
                  </dt>
                  <dd>{board?.likeCount}</dd>
                </dl>
              </S.Thumbs>
            </li>
            <li>
              <S.Thumbs data-up={false} onClick={onClickThumbs}>
                <dl>
                  <dt>
                    <Image src={'/images/ic_thumb_down.png'} width={24} height={24} />
                  </dt>
                  <dd>{board?.dislikeCount}</dd>
                </dl>
              </S.Thumbs>
            </li>
          </S.ThumbsWrapper>
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
