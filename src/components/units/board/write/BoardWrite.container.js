import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';

export default function BoardWrite() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const handleInputChange = (e, setInput, setError) => {
    console.log(e)
    setInput(e.target.value);
    if (e.target.value !== '') {
      setError('');
    }
  };

  const handleSumbit = async () => {
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
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
      });
      if (result?.data?.createBoard?._id) {
        alert('게시글이 등록되었습니다.');
        router.push(`/boards/${result?.data?.createBoard?._id}`)
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      writer={writer}
      password={password}
      title={title}
      contents={contents}
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
      handleInputChange={handleInputChange}
      handleSumbit={handleSumbit}
    />
  )
}