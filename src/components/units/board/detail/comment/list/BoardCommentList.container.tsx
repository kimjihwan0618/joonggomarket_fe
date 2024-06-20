import { useRouter } from 'next/router';
import BoardCommentListUI from './BoardCommentList.presenter';
import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from './BoardCommentList.queries';
import { useEffect, useState, MouseEvent, FormEvent } from 'react';
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from 'src/commons/types/generated/types';

export default function BoardCommentList() {
  const router = useRouter();
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : '';
  const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: { boardId },
      skip: !boardId,
    }
  );
  const [updateBoardComment] = useMutation<
    Pick<IMutation, 'updateBoardComment'>,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const [commentId, setCommentId] = useState('');
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [contents, setContents] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');

  const onClickCommentEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    setCommentId(currentTarget.id);
    setWriter(currentTarget.getAttribute('data-writer'));
    setContents(currentTarget.getAttribute('data-contents'));
    setRating(Number(currentTarget.getAttribute('data-rating')));
    setComments(
      comments.map((comment) => ({
        ...comment,
        isEdit: comment._id === currentTarget.id ? true : false,
      }))
    );
  };

  const onClickCommentUpdate = async () => {
    try {
      if (password === '') {
        alert('비밀번호를 입력해주세요.');
        return;
      }
      const result = await updateBoardComment({
        variables: {
          boardCommentId: commentId,
          password,
          updateBoardCommentInput: {
            contents,
            rating: Number(rating),
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId },
          },
        ],
      });
      if (result?.data?.updateBoardComment?._id) {
        setPassword('');
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCommentDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const { currentTarget } = event;
    try {
      const deletePassword = prompt('비밀번호를 입력해주세요');
      if (deletePassword === '') {
        alert('비밀번호를 입력해주세요.');
        return;
      }
      const result = await deleteBoardComment({
        variables: {
          boardCommentId: currentTarget.id,
          password: deletePassword,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickRating = (event: MouseEvent<HTMLImageElement>) => {
    setRating(Number(event.currentTarget.id.replace('rating', '')));
  };

  const onInputContents = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (value.length <= 100) {
      setContents(value);
    } else {
      setContents(value.substring(0, 100));
    }
  };

  const onInputUserInfo = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value, id },
    } = event;
    if (id === 'writerInput') setWriter(value);
    if (id === 'pwInput') setPassword(value);
  };

  useEffect(() => {
    if (data?.fetchBoardComments) {
      setComments(
        data?.fetchBoardComments.map((comment) => ({
          ...comment,
          isEdit: false,
        }))
      );
    }
  }, [data]);
  if (!boardId) return <></>;
  return (
    <BoardCommentListUI
      comments={comments}
      onClickCommentEdit={onClickCommentEdit}
      onClickCommentUpdate={onClickCommentUpdate}
      onClickCommentDelete={onClickCommentDelete}
      onClickRating={onClickRating}
      rating={rating}
      contents={contents}
      writer={writer}
      password={password}
      onInputContents={onInputContents}
      onInputUserInfo={onInputUserInfo}
    />
  );
}
