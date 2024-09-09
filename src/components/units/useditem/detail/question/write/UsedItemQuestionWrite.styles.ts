import styled from '@emotion/styled'
import { css } from '@emotion/react'

const InputStyle = css`
  padding: 14px 20px;
  outline: none;
`

export const Wrapper = styled.div`
  width: ${(props) => props['data-isedit'] && '100%'};
  display: ${(props) => props['data-isedit'] && 'flex'};
  align-items: ${(props) => props['data-isedit'] && 'flex-start'};
  /* min-width: 920px; */
  margin: 40px auto;
`

export const QuestionTitle = styled.div`
  align-items: center;
  display: flex;
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 14px;
  }
`

export const InputWrapper = styled.div`
  margin: ${(props) => !props['data-isedit'] && '20px auto'};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  input:nth-of-type(2) {
    margin: 0 24px;
  }
  dl {
    margin-right: 16px;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 4px;
  }
  div:last-of-type {
    margin-right: 0px;
  }
`

export const QuestionWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
`

export const QuestionSizeLimit = styled.p`
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.gray04};
`

export const QuestionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.gray06};
  height: 52px;
`
export const QuestionButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  button:last-of-type {
    margin-left: 16px;
  }
`

export const Writer = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 6px;
`

export const UserImageBox = styled.div`
  margin-right: 16px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    border-radius: 100px;
  }
`
