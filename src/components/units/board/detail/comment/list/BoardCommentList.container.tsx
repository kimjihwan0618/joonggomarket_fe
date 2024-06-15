import { useRouter } from 'next/router';
import BoardCommentListUI from './BoardCommentList.presenter';
import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from './BoardCommentList.queries';
import { useEffect, useState } from 'react';

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
    skip: !router.query.boardId,
  });
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [commentId, setCommentId] = useState('');
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [contents, setContents] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');

  const onClickCommentEdit = (event) => {
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
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      if (result?.data?.updateBoardComment?._id) {
        setPassword('');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickCommentDelete = async (event) => {
    event.stopPropagation();
    try {
      const deletePassword = prompt('비밀번호를 입력해주세요');
      if (deletePassword === '') {
        alert('비밀번호를 입력해주세요.');
        return;
      }
      console.log({
        boardCommentId: event.target.id,
        password: deletePassword,
        updateBoardCommentInput: {
          contents,
          rating: Number(rating),
        },
      });
      const result = await deleteBoardComment({
        variables: {
          boardCommentId: event.target.id,
          password: deletePassword,
          updateBoardCommentInput: {
            contents,
            rating: Number(rating),
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickRating = (event) => {
    setRating(Number(event.target.id.replace('rating', '')));
  };

  const onInputContents = (event) => {
    const {
      target: { value },
    } = event;
    if (value.length <= 100) {
      setContents(value);
    } else {
      setContents(value.substring(0, 100));
    }
  };

  const onInputUserInfo = (event) => {
    const {
      target: { value, id },
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
