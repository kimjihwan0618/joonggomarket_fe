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
  margin-bottom: 21px;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  padding: 14px 16px;
  height: 52px;
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const Error = styled.p`
  color: red;
  font-size: 1.6rem;
  margin-top: 4px;
`
