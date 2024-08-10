import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 80px auto 0;
  /* min-width: 920px; */
  max-width: 1200px;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px 14px 48px;
  font-size: 1.6rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.gray06} url(/images/ic_search.png) no-repeat 16px 50%;
  &::placeholder {
    color: #000000;
  }
`

export const SearchRightItems = styled.div`
  display: flex;
  align-items: center;
`

export const DatePickerBox = styled.div`
  margin: 0 44px 0 42px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  span {
    margin: 0 8px;
  }
  input {
    border: none;
    width: 82px;
    height: 24px;
    outline: none;
    font-size: 1.6rem;
    padding: 0px;
    margin: 0px;
  }
`

export const SearchButton = styled.button`
  border-radius: 10px;
  background: #000;
  padding: 14px 16px;
  border: none;
  color: white;
  height: 52px;
  width: 94px;
  font-size: 1.6rem;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const BoardAddButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  padding: 14px 16px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  cursor: pointer;
  p {
    margin-left: 8px;
    font-weight: 500;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.gray06};
  }
`
