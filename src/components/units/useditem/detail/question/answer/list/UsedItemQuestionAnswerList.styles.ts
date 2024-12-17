import styled from '@emotion/styled'
import theme from 'src/commons/styles/theme'

export const Wrapper = styled.div`
  margin-top: 31px;
  /* min-width: 920px; */
  margin: 0;
`

export const AnswerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background: url(/images/ic_answer_arrow.png) no-repeat 6% 12px;
`

export const AnswerBox = styled.div`
  padding: 12px 0;
  width: 90%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray04};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0px;
  }
  ${theme.media.screen3} {
    width: 85%;
  }
`

export const TopItems = styled.div`
  display: flex;
  align-items: flex-start;
`

export const WriterRating = styled.div`
  display: flex;
  align-items: center;
`

export const Writer = styled.p`
  margin: 0px;
  margin-right: 18px;
  display: inline-block;
`

export const Answer = styled.p`
  margin: 0px;
  margin-top: 4px;
`

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray04};
  margin-top: 12px;
  font-size: 1.2rem;
`

export const AnswerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  & > div {
    margin-left: 12px;
  }
  & > span {
    border-radius: 100px;
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
  button {
    margin-right: 8px;
  }
  button:last-of-type {
    margin-right: 0px;
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
