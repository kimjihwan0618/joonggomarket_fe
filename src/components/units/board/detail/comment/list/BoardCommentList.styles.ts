import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin-top: 31px;
  /* width: 62.5%; */
  min-width: 920px;
  margin: 87px auto 0;
`

export const CommentBox = styled.div`
  padding: 9px 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray04};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`

export const TopItems = styled.div`
  display: flex;
  align-items: flex-start;
`

export const UserName = styled.p`
  margin: 0px;
  margin-right: 18px;
  display: inline-block;
`

export const Comment = styled.p`
  margin: 0px;
  margin-top: 4px;
`

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray04};
  margin-top: 20px;
  font-size: 1.2rem;
`

export const CommentInfo = styled.div`
  display: flex;
  align-items: flex-start;
  & > div {
    margin-left: 12px;
  }
`

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
      background: ${({ theme }) => theme.colors.gray06};
    }
  }
  button:first-of-type {
    margin-right: 8px;
  }
`

export const Rating = styled.div`
  display: inline-flex;
  div {
    margin-right: 4px;
  }
  div:last-of-type {
    margin-right: 0px;
  }
`

export const PasswordInput = styled.input`
  padding: 14px 20px;
  outline: none;
  height: 52px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
`
