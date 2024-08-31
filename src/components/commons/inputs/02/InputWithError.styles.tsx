import styled from '@emotion/styled'

export const Wrapper = styled.dl`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: ${(props) => props['data-width']};
`

export const Label = styled.dt`
  font-size: 1.6rem;
  margin-bottom: 21px;
`

export const InputItem = styled.dd`
  font-size: 1.6rem;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  color: ${(props) => props.color};
  padding: 14px 16px;
  font-size: 1.6rem;
  height: 52px;
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray04};
  }
`

export const Error = styled.p`
  color: red;
  font-size: 1.6rem;
  margin-top: 4px;
`
