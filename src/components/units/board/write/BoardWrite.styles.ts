import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ButtonStyle = css`
  padding: 14px 16px;
  margin-left: 16px;
  white-space: nowrap;
  height: 52px;
  width: 179px;
  font-weight: 500;
  outline: none;
  border: none;
`

export const ContentWrapper = styled.div`
  padding: 40px 75px 60px;
  margin: 101px auto;
  /* min-width: 920px; */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`

export const ContentTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 80px;
  text-align: center;
`

export const FormWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const FormItem = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const ItemTitle = styled.div`
  font-size: 1.6rem;
  margin-bottom: 21px;
`

export const ItemInput = styled.input`
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  padding: 14px 16px;
  height: 52px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const UploadButtonWrapper = styled.div`
  display: flex;
`
export const ImageUploadButton = styled.button`
  width: 78px;
  height: 78px;
  background: ${({ theme }) => theme.colors.gray04};
  margin-right: 24px;
  border: none;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: ${({ theme }) => theme.colors.gray02};
    font-size: 2.4rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray02};
    padding: 0px;
  }
`

export const RadioItem = styled.div`
  display: flex;
  & > label {
    margin-left: 8px;
  }
  & > label:first-of-type {
    margin-right: 20px;
  }
  & > input[type='radio'] {
    width: 20px;
    height: 20px;
    accent-color: ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.main};
  }
`

export const ItemTextArea = styled.textarea`
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  padding: 14px 16px;
  min-height: 480px;
  resize: none;
`

export const PostSearchItem = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 40px;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 0px;
  }
  & > div:nth-of-type(2) {
    margin-top: 16px;
    margin-bottom: 30px;
  }
`
export const DetailAddressInput = styled.input`
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  padding: 14px 16px;
  height: 52px;
`
export const PostSearchButton = styled.button`
  background: #000;
  padding: 14px 16px;
  margin-left: 16px;
  color: white;
  white-space: nowrap;
  height: 52px;
  cursor: pointer;
`
export const RegisterButton = styled.button`
  ${ButtonStyle}
  color: #000;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  background: ${(props) => (props.disabled ? 'rgba(189, 189, 189, 1)' : 'rgba(255, 214, 0, 1)')};
  &:hover {
    opacity: ${(props) => !props.disabled && 0.8} !important;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UndoButton = styled.button`
  ${ButtonStyle}
  cursor: pointer;
  background: rgba(189, 189, 189, 1);
  color: ${({ theme }) => theme.colors.gray02};
  margin-right: 24px;
  &:hover {
    opacity: 0.8;
  }
`

export const FormItemError = styled.p`
  color: red;
  font-size: 1.6rem;
  margin-top: 4px;
`

export const ImageBox = styled.div`
  width: 180px;
  height: 180px;
  margin-right: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResetFileButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`
