import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import BoardDetailUI from './BoardDetail.presenter';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';

export default function BoardDetail() {
  const router = useRouter();
  const [board, setBoard] = useState({});
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    skip: !router.query.boardId,
  });

  const onClickBoardsButton = () => {
    router.push('/boards');
  };

  const onClickDeleteButton = async () => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      if (result?.data?.deleteBoard) {
        alert('해당 게시글이 삭제되었습니다.');
        router.push('/boards');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setBoard(data?.fetchBoard);
  }, [data]);

  return (
    <BoardDetailUI
      board={board}
      setBoard={setBoard}
      onClickBoardsButton={onClickBoardsButton}
      onClickDeleteButton={onClickDeleteButton}
    />
  );
}
