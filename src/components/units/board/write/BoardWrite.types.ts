import { ChangeEvent, MouseEvent, Dispatch, SetStateAction } from 'react';
import { IQuery } from 'src/commons/types/generated/types';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface IBoardWriteUIProps {
  setWriter: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setContents: Dispatch<SetStateAction<string>>;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  setWriterError: Dispatch<SetStateAction<string>>;
  setPasswordError: Dispatch<SetStateAction<string>>;
  setTitleError: Dispatch<SetStateAction<string>>;
  setContentsError: Dispatch<SetStateAction<string>>;
  onChangeFormInput: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setInput: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>>,
    message: string
  ) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  formValidation: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}
