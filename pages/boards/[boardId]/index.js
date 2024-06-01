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
} from '../../../styles/boards/Detail';
import Image from 'next/image';

export default function BoardDetail() {
  return (
    <>
      <ContentWrapper>
        <BoardTitleWrapper>
          <WriterInfo>
            <Image src={'/images/ic_profile.png'} width={56} height={56} />
            <Info>
              <dt>노원두</dt>
              <dd>Date : 2021.02.18</dd>
            </Info>
          </WriterInfo>
          <div></div>
          {/* div children marker , linker */}
        </BoardTitleWrapper>
        <ContentsWrapper>
          <ContentsTitle>게시글 제목입니다.</ContentsTitle>
          <ContentsMain>
            <p>내용입니다. 내용 내용 내용 ~</p>
          </ContentsMain>
        </ContentsWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <BoardActionButton>목록으로</BoardActionButton>
        <BoardActionButton>수정하기</BoardActionButton>
        <BoardActionButton>삭제하기</BoardActionButton>
      </ButtonWrapper>
    </>
  );
}
