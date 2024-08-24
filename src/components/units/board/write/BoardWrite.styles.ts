import styled from '@emotion/styled'
import { css } from '@emotion/react'

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

export const ImagesWrapper = styled.div`
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
  &:hover {
    background: ${({ theme }) => theme.colors.gray05};
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
  & > button {
    margin-left: 16px;
  }
`
export const DetailAddressInput = styled.input`
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  padding: 14px 16px;
  height: 52px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button:first-of-type {
    margin-right: 16px;
  }
`

export const FormItemError = styled.p`
  color: red;
  font-size: 1.6rem;
  margin-top: 4px;
`
