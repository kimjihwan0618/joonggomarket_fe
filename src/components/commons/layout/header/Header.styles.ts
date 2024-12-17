import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from 'src/commons/styles/theme'
import { MenuOutlined, CloseOutlined, ArrowRightOutlined } from '@ant-design/icons'

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
  ${theme.media.screen2} {
    min-width: 720px;
  }
  ${theme.media.screen3} {
    min-width: auto;
  }
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
  ${theme.media.screen3} {
    display: none;
  }
`

export const MButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  button:first-of-type {
    margin-right: 16px;
  }
`

export const LogoNavigationWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Navigation = styled.nav`
  ${theme.media.screen3} {
    display: none;
  }
`

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

export const MMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.gray08};
  border-radius: 8px;
`

export const MMenu = styled.li`
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray05};
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 1.8rem;
  }

  &:last-of-type {
    border-bottom: 0px;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`

export const ProfileBoxWrapper = styled.div`
  position: relative;
  ${theme.media.screen3} {
    display: none;
  }
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
  border-radius: 10px 16px;
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
// 모바일 메뉴 스타일 ↓↓
export const MMenuButton = styled(MenuOutlined)`
  display: none;
  width: 44px;
  height: 44px;
  padding: 10px;
  color: #333;
  cursor: pointer;
  border-radius: 100px;
  & path {
    color: ${({ theme }) => theme.colors.gray04};
  }
  & svg {
    width: 100%;
    height: 100%;
  }
  ${theme.media.screen3} {
    display: block;
  }
`

export const MMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  ${theme.media.screen3} {
    display: ${(props) => (props['data-isOpen'] ? 'block' : 'none')};
  }
`

export const MMenuBar = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props['data-isOpen'] ? '0px' : '-300px')};
  width: 300px;
  height: 100%;
  background: white;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
export const MMenuBarInner = styled.div`
  width: 100%;
`

export const MCloseButton = styled(CloseOutlined)`
  width: 38px;
  height: 38px;
  padding: 10px;
  & path {
    color: ${({ theme }) => theme.colors.gray04};
  }
  cursor: pointer;
  border-radius: 100px;
  & svg {
    width: 100%;
    height: 100%;
  }
`

export const MProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
`

export const MProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
  width: 100%;
  padding: 12px 16px 16px 16px;
  background: ${({ theme }) => theme.colors.gray08};
  border-radius: 8px;
`

export const MProfileName = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 2rem;
    font-weight: bold;
  }
`

export const MProfileMail = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray03};
`

export const MProfileBoxTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray06};
  & > span {
    border-radius: 100px;
  }
`

export const MProfileBoxBottom = styled.dl`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.gray08};
  border-radius: 8px;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  &:last-of-type {
    margin-top: 12px;
    background: ${({ theme }) => theme.colors.main};
    span {
      color: black;
    }
  }
`

export const MProfilePointTitle = styled.dt`
  font-size: 1.8rem;
`

export const MProfilePointText = styled.dd`
  font-size: 2rem;
  span {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.main};
  }
`

export const MArrowRight = styled(ArrowRightOutlined)`
  width: 32px;
  height: 32px;
  padding: 10px;
  & path {
    color: ${({ theme }) => theme.colors.gray01};
  }
  & svg {
    width: 100%;
    height: 100%;
  }
`
export const MLogoutButton = styled.dl`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const MLogoutButtonText = styled.dt`
  font-size: 1.8rem;
  margin-right: 12px;
`
