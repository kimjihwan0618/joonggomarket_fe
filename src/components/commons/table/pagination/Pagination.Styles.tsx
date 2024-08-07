import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ButtonStyles = css`
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PageButton = styled.button`
  margin: 0 10px;
  background: none;
  border: none;
  padding: 0;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${(props) => (props['data-isActive'] ? props.theme.colors.main : '#000')};
  text-decoration: ${(props) => (props['data-isActive'] ? 'underline' : 'none')};
`

export const PrevButton = styled.button`
  ${ButtonStyles}
  &:hover {
    background: ${({ theme }) => theme.colors.main};
  }
`
export const NextButton = styled.button`
  ${ButtonStyles}
  &:hover {
    background: ${({ theme }) => theme.colors.main};
  }
`
