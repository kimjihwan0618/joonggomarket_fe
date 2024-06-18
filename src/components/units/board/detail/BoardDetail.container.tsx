import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import BoardDetailUI from './BoardDetail.presenter';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from 'src/commons/types/generated/types';

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  );

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    skip: !router.query.boardId,
  });

  const onClickUpdateButton = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

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

  return (
    <BoardDetailUI
      board={data?.fetchBoard}
      onClickBoardsButton={onClickBoardsButton}
      onClickDeleteButton={onClickDeleteButton}
      onClickUpdateButton={onClickUpdateButton}
    />
  );
}
