
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const InputStyle = css`
  box-sizing: border-box;
  padding: 14px 20px;
  outline: none;
`

export const Wrapper = styled.div`
  padding-top: 40px;
  margin-top: 87px;
  border-top: 1px solid #BDBDBD;
  width: 62.5%;
  min-width: 1122px;
  margin: 87px auto 0;
`;

export const CommentTitle = styled.div`
align-items: center;
display: flex;
  h3{
    font-size: 18px;
    font-weight: 500;
    margin-left: 14px;
  }
`;

export const InputWrapper = styled.div`
  margin: 40px auto 31px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const WriteInput = styled.input`
  ${InputStyle}
  height: 52px;
  border: 1px solid #BDBDBD;
`;

export const PasswordInput = styled.input`
  ${InputStyle}
  height: 52px;
  margin: 0 24px;
  border: 1px solid #BDBDBD;
`;

export const Rating = styled.div`
display: flex;
align-items: center;
  div{
    margin-right: 4px;
  }
  div:last-of-type{
    margin-right: 0px;
  }
`;

export const CommentWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #BDBDBD;
`;

export const CommentTextArea = styled.textarea`
  ${InputStyle}
  height: 108px;
  width: 100%;
  border: none;
  resize: none;
  &::placeholder{
    color: #BDBDBD;
  }
`;

export const CommentSizeLimit = styled.p`
  margin-left: 20px;
  color: #BDBDBD;
`;

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #F2F2F2;
  height: 52px;
`;

export const RegisterButton = styled.button`
  background: #000;
  border: none;
  height: 100%;
  width: 91px;
  color: white;
  cursor: pointer;
`;
