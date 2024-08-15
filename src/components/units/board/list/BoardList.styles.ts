import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 80px auto 0;
  max-width: 1200px;
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
