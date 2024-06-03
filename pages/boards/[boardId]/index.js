import { useRouter } from 'next/router';
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
} from '@/styles/boards/Detail';
import Image from 'next/image';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      updatedAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function BoardDetail() {
  const router = useRouter();
  const [board, setBoard] = useState({});
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    skip: !router.query.boardId
  });

  const handleDeleteBoard = async () => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.boardId
        }
      })
      if (result?.data?.deleteBoard) {
        alert("해당 게시글이 삭제되었습니다.")
        router.push("/boards/new");
      }
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    setBoard(data?.fetchBoard)
  }, [data])

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
        <BoardActionButton>목록으로</BoardActionButton>
        <BoardActionButton>수정하기</BoardActionButton>
        <BoardActionButton onClick={handleDeleteBoard}>삭제하기</BoardActionButton>
      </ButtonWrapper>
    </>
  );
}
