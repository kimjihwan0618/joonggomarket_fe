import styled from '@emotion/styled'
import theme from 'src/commons/styles/theme'

const width = {
  '01': '14px 16px',
  '02': '14px 32px',
  '03': '14px 48px',
  '04': '14px 64px',
}

export const Button = styled.button`
  padding: ${(props) => width[props['data-width']]};
  background: ${(props) => (props.disabled ? props.theme.colors.gray05 : props['data-background'])};
  border: ${(props) => props['data-background'] === 'white' && '1px solid rgba(189, 189, 189, 1)'};
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  height: 52px;
  cursor: ${(props) => !props.disabled && 'pointer'};
  &:hover {
    opacity: ${(props) => !props.disabled && '.65'};
  }
  & > span {
    margin-right: 8px !important;
  }
`
export const Text = styled.p`
  font-weight: 500;
  color: ${(props) => (props['data-disabled'] ? props.theme.colors.gray03 : props['data-color'])};
  white-space: nowrap;
  ${theme.media.screen3} {
    font-size: 1.2rem;
  }
  /* color: ${(props) => props['data-color']}; */
`
