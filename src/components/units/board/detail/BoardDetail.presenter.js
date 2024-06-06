import { formatDateToSeoul } from '@/utils/dateUtils';
import {
  ContentWrapper,
  BoardTitleWrapper,
  WriterInfo,
  Info,
  ContentsWrapper,
  ContentsTitle,
  ContentsMain,
  ButtonWrapper,
  BoardActionButton,
} from './BoardDetail.styles';
import Image from 'next/image';

export default function BoardDetailUI({ board, onClickDeleteButton, onClickBoardsButton }) {
  return (
    <>
      <ContentWrapper>
        <BoardTitleWrapper>
          <WriterInfo>
            <Image src={'/images/ic_profile.png'} width={56} height={56} />
            <Info>
              <dt>{board?.writer}</dt>
              <dd>Date : {board?.updatedAt && formatDateToSeoul(board?.updatedAt)}</dd>
            </Info>
          </WriterInfo>
          <div></div>
          {/* div children marker , linker */}
        </BoardTitleWrapper>
        <ContentsWrapper>
          <ContentsTitle>{board?.title}</ContentsTitle>
          <ContentsMain>
            <p>{board?.contents}</p>
          </ContentsMain>
        </ContentsWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <BoardActionButton onClick={onClickBoardsButton}>목록으로</BoardActionButton>
        <BoardActionButton>수정하기</BoardActionButton>
        <BoardActionButton onClick={onClickDeleteButton}>삭제하기</BoardActionButton>
      </ButtonWrapper>
    </>
  );
}
