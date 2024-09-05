import styled from '@emotion/styled'

const width = {
  '01': '14px 16px',
  '02': '14px 32px',
  '03': '14px 48px',
  '04': '14px 64px',
}

export const Button = styled.button`
  border-radius: 10px;
  padding: ${(props) => width[props['data-width']]};
  background: ${(props) => props['data-background']};
  border: ${(props) => props['data-background'] === 'white' && '1px solid rgba(189, 189, 189, 1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: ${(props) => props['data-fullwidth'] && '100%'};
  cursor: ${(props) => !props.disabled && 'pointer'};
  &:hover {
    opacity: ${(props) => !props.disabled && '.65'};
  }
  & > span {
    margin-right: 8px !important;
  }
`
export const Text = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  color: ${(props) => props['data-color']};
`
