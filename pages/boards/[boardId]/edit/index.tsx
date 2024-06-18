import BoardWrite from 'src/components/units/board/write/BoardWrite.container';
import { FETCH_BOARD } from 'src/components/units/board/detail/BoardDetail.queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchBoardArgs } from 'src/commons/types/generated/types';
import { useEffect, useState } from 'react';

export default function BoardEditPage() {
  const router = useRouter();
  const [boardId, setBoardId] = useState('');
  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId },
    skip: !router.query.boardId,
  });

  useEffect(() => {
    setBoardId(
      Array.isArray(router.query.boardId) ? router.query.boardId[0] : router.query.boardId
    );
  }, []);

  return <BoardWrite isEdit={true} data={data} />;
}
