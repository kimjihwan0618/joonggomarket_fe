import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
`
export const TabsItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin-left: 28px; */
`
export const Tab = styled.li`
  font-size: 1.8rem;
  white-space: nowrap;
  font-weight: ${(props) => (props['data-isactive'] ? 'bold' : '400')};
  color: ${(props) => (props['data-isactive'] ? '#000' : props.theme.colors.gray04)};
  border-bottom: 2px solid
    ${(props) => (props['data-isactive'] ? props.theme.colors.main : 'white')};
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
  cursor: ${(props) => !props['data-isactive'] && 'pointer'};
`
