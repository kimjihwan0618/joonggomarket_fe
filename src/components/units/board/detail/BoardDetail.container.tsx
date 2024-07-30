import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import BoardDetailUI from './BoardDetail.presenter';
import { DELETE_BOARD, DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from './BoardDetail.queries';
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from 'src/commons/types/generated/types';
import { MouseEvent } from 'react';

export default function BoardDetail() {
  const router = useRouter();
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : '';
  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  );
  const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD);
  const [dislikeBoard] = useMutation<Pick<IMutation, 'dislikeBoard'>, IMutationDislikeBoardArgs>(
    DISLIKE_BOARD
  );

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId },
    skip: !router.query.boardId,
  });

  const onClickThumbs = async (event: MouseEvent<HTMLDListElement>) => {
    const isUp = JSON.parse(event.currentTarget.getAttribute('data-up'));
    const updateApi = isUp ? likeBoard : dislikeBoard;
    const result = await updateApi({
      variables: {
        boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId },
        },
      ],
    });
  };

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
          boardId,
        },
      });
      if (result?.data?.deleteBoard) {
        alert('해당 게시글이 삭제되었습니다.');
        router.push('/boards');
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  if (!boardId) return <></>;
  return (
    <BoardDetailUI
      board={data?.fetchBoard}
      onClickBoardsButton={onClickBoardsButton}
      onClickDeleteButton={onClickDeleteButton}
      onClickUpdateButton={onClickUpdateButton}
      onClickThumbs={onClickThumbs}
    />
  );
}
