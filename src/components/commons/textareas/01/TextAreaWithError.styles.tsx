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

export const TextAreaItem = styled.dd`
  font-size: 1.6rem;
  margin-bottom: 21px;
`

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  height: ${(props) => props['data-height']};
  padding: 14px 16px;
  font-size: 1.6rem;
  width: 100%;
  border-radius: 6px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray04};
  }
`

export const Error = styled.p`
  color: red;
  font-size: 1.6rem;
  margin-top: 4px;
`
