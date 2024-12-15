import styled from '@emotion/styled'
import theme from 'src/commons/styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: url(/images/login_bg.jpg) no-repeat 50% 50%;
    background-size: auto 130%;
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
  width: 420px;
  dl {
    margin-bottom: 21px;
  }
  ${theme.media.screen3} {
    width: 320px;
  }
`

export const Logo = styled.h1`
  margin-bottom: 60px;
`

export const ButtonListWrapper = styled.ul`
  padding-top: 29px;
  margin-top: 40px;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
