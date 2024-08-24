import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ProfileButtonStyles = css`
  height: 64px;
  line-height: 64px;
  padding: 20px 36px;
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
  background: white;
  height: 100px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
`
export const HeaderInner = styled.div`
  width: 70%;
  min-width: 920px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button:first-of-type {
    margin-right: 16px;
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
`
export const ProfileBox = styled.div`
  position: absolute;
  display: ${(props) => (!props['data-hidden'] ? 'none' : 'block')};
  right: 0;
  bottom: -340%;
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
`
export const ImgSettingButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 12px;
  &:after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background: url(/images/ic_profile_img_setting.png) no-repeat 50% 50%;
    position: absolute;
    right: 0;
    bottom: 0;
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
