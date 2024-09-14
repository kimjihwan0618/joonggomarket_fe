import styled from '@emotion/styled'

export const ContentWrapper = styled.div`
  padding: 40px 75px 60px;
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
  & > label {
    margin-right: 20px;
  }
  & > label:last-of-type {
    margin-right: 0px;
  }
  & > input[type='radio'] {
    width: 16px;
    height: 16px;
    appearance: none;
    transition: border 0.1s ease-in-out;
    vertical-align: middle;
    appearance: none;
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
  }
  & > input[type='radio']:checked {
    border: 0.4em solid ${({ theme }) => theme.colors.main};
  }
  & > input[type='radio']:focus-visible {
    outline: max(2px, 0.1em) dotted ${({ theme }) => theme.colors.main};
    outline-offset: max(2px, 0.1em);
  }
`

export const MapAddressWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
`
export const MapWrapper = styled.div`
  width: 40%;
  height: 75%;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
`
export const AddressWrapper = styled.div`
  width: calc(60% - 24px);
`

export const LatLng = styled.div`
  display: flex;
  align-items: flex-end;
  & > dl:first-of-type {
    margin-right: 18px;
  }
`

export const GpsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Address = styled.div`
  width: 100%;
`

export const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    margin-top: 24px;
    margin-left: 18px;
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

export const TextEditorWrapper = styled.div`
  width: 100%;
  margin-bottom: 21px;
  height: 320px;
`

export const TextEditorLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  margin-bottom: 21px;
`
