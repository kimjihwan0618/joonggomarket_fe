import styled from '@emotion/styled';
import { css } from '@emotion/react';

// const InputStyle = css`
//   box-sizing: border-box;
//   padding: 14px 20px;
//   outline: none;
// `

export const Wrapper = styled.div`
  margin-top: 31px;
  width: 62.5%;
  min-width: 1122px;
  margin: 87px auto 0;
`;

export const CommentBox = styled.div`
  box-sizing: border-box;
  padding: 9px 0 20px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const TopItems = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const UserName = styled.p`
  margin: 0px;
  margin-right: 18px;
  display: inline-block;
`;

export const Comment = styled.p`
  margin: 0px;
  margin-top: 4px;
`;

export const Date = styled.p`
  color: #bdbdbd;
  margin-top: 20px;
  font-size: 12px;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: flex-start;
  & > div {
    margin-left: 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
      background: rgba(255, 214, 0, 1);
    }
  }
  button:first-of-type {
    margin-right: 8px;
  }
`;

export const Rating = styled.div`
  display: inline-flex;
  div {
    margin-right: 4px;
  }
  div:last-of-type {
    margin-right: 0px;
  }
`;
