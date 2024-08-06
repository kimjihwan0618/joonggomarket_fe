import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 64px;
  background: ${({ theme }) => theme.colors.main};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuButton = styled.li`
  font-size: 1.8rem;
  font-weight: ${(props) => (props['data-active'] ? 700 : 500)};
  opacity: ${(props) => (props['data-active'] ? 1 : 0.6)};
  color: #514400;
  padding: 0 40px;
  border-right: 1px solid white;
  cursor: pointer;
  &:last-of-type {
    border: none;
  }
`
