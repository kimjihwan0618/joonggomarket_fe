import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';
import { IBoardWriteProps } from './BoardWrite.types';
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from 'src/commons/types/generated/types';

export default function BoardWrite(props: IBoardWriteProps) {
  const fileRef1 = useRef<HTMLInputElement>(null);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [formValidation, setFormValidation] = useState(false);

  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );
  const router = useRouter();

  const onChangeFormInput = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>>,
    message: string
  ) => {
    setInput(event.target.value);
    if (event.target.value !== '') {
      setError('');
    } else {
      setError(message);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError('작성자를 입력해주세요');
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요');
    }
    if (!title) {
      setTitleError('제목을 입력해주세요');
    }
    if (!contents) {
      setContentsError('내용을 입력해주세요');
    }
    try {
      const createBoardInput = {
        writer,
        password,
        title,
        contents,
      };
      const result = await createBoard({
        variables: {
          createBoardInput,
        },
      });
      if (result?.data?.createBoard?._id) {
        alert('게시글이 등록되었습니다.');
        router.push(`/boards/${result?.data?.createBoard?._id}`);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert('수정한 내용이 없습니다.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    const updateBoardInput = {};
    if (title) updateBoardInput['title'] = title;
    if (contents) updateBoardInput['contents'] = contents;
    try {
      if (typeof router.query.boardId !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput,
        },
      });
      if (result?.data?.updateBoard?._id) {
        alert('게시글이 수정되었습니다.');
        router.push(`/boards/${result?.data?.updateBoard?._id}`);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const handleFileChange1 = () => {};
  const handleImageUploadClick = () => {};

  useEffect(() => {
    const fetchBoard = props?.data?.fetchBoard;
    if (
      (writer || fetchBoard?.writer) &&
      (title || fetchBoard?.title) &&
      (contents || fetchBoard?.contents) &&
      password
    ) {
      setFormValidation(true);
    } else {
      setFormValidation(false);
    }
  }, [writer, password, title, contents]);

  return (
    <BoardWriteUI
      setWriter={setWriter}
      setPassword={setPassword}
      setTitle={setTitle}
      setContents={setContents}
      writerError={writerError}
      setWriterError={setWriterError}
      passwordError={passwordError}
      setPasswordError={setPasswordError}
      setContentsError={setContentsError}
      titleError={titleError}
      setTitleError={setTitleError}
      contentsError={contentsError}
      onChangeFormInput={onChangeFormInput}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      formValidation={formValidation}
      isEdit={props.isEdit}
      data={props.data}
      fileInputHandler={{
        handleFileChange: handleFileChange1,
        handleImageUploadClick: handleImageUploadClick,
        fileInputRef: fileRef1,
      }}
    />
  );
}
