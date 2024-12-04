import styled from '@emotion/styled'

export const ContentWrapper = styled.div`
  padding: 40px 55px;
  /* min-width: 920px; */
  border-radius: 14px;
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
  dl {
    margin-bottom: 21px;
  }
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

export const ImagesWrapper = styled.div`
  display: flex;
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

export const PostAddressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  & > button {
    margin-left: 16px;
    margin-top: 21px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button:first-of-type {
    margin-right: 16px;
  }
`
