import styled from '@emotion/styled'

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
  background-color: ${({ theme }) => theme.colors.gray06};
  background-image: ${(props) => (props['data-ischanged'] ? '' : 'url(/images/ic_search.png)')};
  background-repeat: no-repeat;
  background-position: 16px 50%;
  &::placeholder {
    color: #000000;
  }
`

export const SearchRightItems = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const DatePickerBox = styled.div`
  margin: 0 0px 0 28px;
  /* padding: 14px 16px; */
  display: flex;
  height: 100%;
  align-items: center;
  /* border: 1px solid ${({ theme }) => theme.colors.gray04}; */
  span {
    margin: 0 8px;
  }
  .ant-picker {
    height: 100%;
    width: 140px;
  }
  input {
    /* border: none;
    width: 82px;
    height: 24px;
    outline: none;
    font-size: 1.6rem;
    padding: 0px;
    margin: 0px; */
  }
`
