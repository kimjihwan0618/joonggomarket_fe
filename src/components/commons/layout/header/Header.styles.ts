import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ProfileButtonStyles = css`
  height: 50px;
  line-height: 64px;
  padding: 10px 36px;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  cursor: pointer;
  text-indent: 12px;
  align-items: center;
  &:last-of-type {
    border-bottom: 0px;
  }
`

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  height: 70px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
`
export const HeaderInner = styled.div`
  width: 90%;
  min-width: 920px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  cursor: pointer;
  margin-right: 36px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button:first-of-type {
    margin-right: 16px;
  }
`

export const LogoNavigationWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Navigation = styled.nav``

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
`

export const Menu = styled.li`
  font-size: 1.6rem;
  font-weight: ${(props) => (props['data-active'] ? 700 : 500)};
  color: ${(props) =>
    props['data-active'] ? props.theme.colors.gray01 : props.theme.colors.gray04};
  margin-right: 16px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0px;
  }
`

export const ProfileBoxWrapper = styled.div`
  position: relative;
`

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  width: 112px;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background: ${({ theme }) => theme.colors.gray06};
  }
  & > span {
    border-radius: 100px;
  }
`
export const ProfileBox = styled.div`
  position: absolute;
  display: ${(props) => (!props['data-hidden'] ? 'none' : 'block')};
  right: 0;
  bottom: -300%;
  border-radius: 16px;
  background: white;
  width: 258px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`
export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 26px;
  border-bottom: 1px solid black;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.gray06};
  }
`
export const ImgSettingButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 12px;
  & > span {
    border-radius: 100px;
  }
`
export const TextWrapper = styled.dl``
export const Name = styled.dt`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 4px;
`
export const Point = styled.dd`
  font-size: 1.6rem;
  font-weight: bold;
`

export const ProfileButtonWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

export const AddPointButton = styled.button`
  ${ProfileButtonStyles}
  color: ${({ theme }) => theme.colors.gray04};
  &:hover {
    background: ${({ theme }) => theme.colors.gray06};
  }
`
export const LogoutButton = styled.button`
  ${ProfileButtonStyles}
  color: ${({ theme }) => theme.colors.gray04};
  &:hover {
    background: ${({ theme }) => theme.colors.gray06};
  }
`
export const MypageButton = styled.button`
  ${ProfileButtonStyles}
`
