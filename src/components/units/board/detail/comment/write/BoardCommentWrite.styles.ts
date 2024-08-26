import styled from '@emotion/styled'
import { css } from '@emotion/react'

const InputStyle = css`
  padding: 14px 20px;
  outline: none;
`

export const Wrapper = styled.div`
  width: ${(props) => props['data-isedit'] && '100%'};
  /* min-width: 920px; */
  margin: 0 auto;
`

export const CommentTitle = styled.div`
  align-items: center;
  display: flex;
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 14px;
  }
`

export const InputWrapper = styled.div`
  margin: 40px auto 31px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  input:nth-of-type(2) {
    margin: 0 24px;
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

export const CommentWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
`

export const CommentTextArea = styled.textarea`
  ${InputStyle}
  height: ${(props) => (props['data-isedit'] ? '55px' : '108px')};
  width: 100%;
  border: none;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray04};
  }
`

export const CommentSizeLimit = styled.p`
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.gray04};
`

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.gray06};
  height: 52px;
`
export const CommentButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  button:last-of-type {
    margin-left: 16px;
  }
`
