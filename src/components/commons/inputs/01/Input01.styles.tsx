import styled from '@emotion/styled'

export const Input = styled.input`
  padding: 14px 20px;
  outline: none;
  height: 52px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  width: ${(props) => props['data-fullwidth'] && '100%'};
`
