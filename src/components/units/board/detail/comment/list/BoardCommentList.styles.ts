import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin-top: 31px;
  /* min-width: 920px; */
  margin: 0;
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

export const WriterRating = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
`

export const Writer = styled.p`
  margin: 0px;
  margin-top: 10px;
  margin-right: 18px;
  display: inline-block;
`

export const Comment = styled.p`
  margin: 0px;
  margin-top: 4px;
`

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray04};
  margin-top: 12px;
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

export const InfoBox = styled.div``
