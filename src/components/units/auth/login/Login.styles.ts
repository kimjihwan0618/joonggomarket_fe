import { css } from '@emotion/react'
import styled from '@emotion/styled'

const INPUT_ITEM_STYLE = css`
  margin-bottom: 20px;
  width: 100%;
  color: white;
  input {
    font-size: 1.6rem;
    color: white;
    width: 100%;
    border-radius: 10px;
    padding: 20px 16px;
    background: none;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  p {
    font-size: 1.4rem;
    color: rgba(255, 0, 0, 1);
    margin-top: 4px;
    font-weight: bold;
    margin-left: 16px;
  }
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(/images/login_bg.jpg) no-repeat 50% 50%;
  background-size: auto 130%;
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: block;
    content: '';
  }
`

export const LoginFormBox = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 10;
  -webkit-transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
`

export const Logo = styled.h1`
  margin-bottom: 80px;
`
export const InputItem = styled.div`
  ${INPUT_ITEM_STYLE}
`
export const EmailInput = styled.input``
export const PasswordInput = styled.input``
export const ValidationText = styled.p``

export const LoginButton = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  height: 64px;
  line-height: 64px;
  width: 100%;
  color: white;
  border-radius: 10px;
  background: ${(props) =>
    !props['data-disable'] ? props.theme.colors.gray03 : props.theme.colors.main};
  cursor: ${(props) => props['data-disable'] && 'pointer'};
  &:hover {
    opacity: ${(props) => props['data-disable'] && 0.9};
  }
`
export const ButtonListWrapper = styled.ul`
  padding-top: 29px;
  margin-top: 40px;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BottomButton = styled.li`
  border-right: 1px solid white;
  padding: 0 20px;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  &:last-of-type {
    border-right: 0px;
  }
  &:hover {
    text-decoration: underline;
  }
`
