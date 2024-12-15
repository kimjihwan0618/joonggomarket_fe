import styled from '@emotion/styled'
import theme from 'src/commons/styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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

export const SignupFormBox = styled.div`
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

export const PageTitle = styled.h1`
  margin-bottom: 60px;
  font-size: 2.8rem;
  font-weight: bold;
  color: white;
`

export const PageBackButton = styled.button`
  position: absolute;
  z-index: 15;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`
