import styled from '@emotion/styled'
import theme from 'src/commons/styles/theme'

export const Wrapper = styled.div`
  flex-shrink: 0;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.gray06};
  ${theme.media.screen3} {
    padding-right: 0px;
    border-right: none;
    margin-bottom: 40px;
  }
`
export const PageTitle = styled.h2`
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 40px;
  ${theme.media.screen3} {
    margin-bottom: 20px;
  }
  ${theme.media.screen3} {
    font-size: 3.6rem;
  }
`
export const ProfileImageBox = styled.div`
  width: 140px;
  height: 140px;
  text-align: center;
`
export const ImageBox = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    width: 28px;
    height: 28px;
    background: url(/images/ic_profile_img_setting_on.png) no-repeat 50% 50%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  & > span {
    border-radius: 100px;
  }
`
export const InfoBox = styled.div``
export const Name = styled.h4`
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 14px;
  text-align: center;
`
export const PointText = styled.div`
  display: flex;
  align-items: center;
`
export const Point = styled.p`
  margin-left: 6px;
  font-weight: bold;
  font-size: 2rem;
  ${theme.media.screen3} {
    font-size: 2rem;
  }
`
export const SubMenuList = styled.ul`
  margin-top: 60px;
  ${theme.media.screen3} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 40px;
  }
`
export const MenuItem = styled.li`
  margin-bottom: 24px;
  cursor: pointer;
  display: flex;
  &:last-of-type {
    margin-bottom: 0px;
  }
  font-weight: ${(props) => props['data-active'] && 'bold !important'};
  ${theme.media.screen3} {
    margin-bottom: 0px;
    flex-direction: column;
    width: 33.33%;
    justify-content: center;
    align-items: center;
    /* padding-right: 6px;
    margin-right: 6px; */
    border-right: 1px solid ${({ theme }) => theme.colors.gray05};
    background: ${(props) => props['data-isactive'] && theme.colors.gray08};
    padding: 10px 0;
  }
`
export const ImageWrapper = styled.div``

export const Text = styled.p`
  margin-left: 8px;
  color: ${(props) => (props['data-active'] ? '#000' : props.theme.colors.gray03)};
  font-weight: ${(props) => (props['data-active'] ? 'bold' : '500')};
  font-size: 1.8rem;
  white-space: nowrap;
  ${theme.media.screen3} {
    margin: 0px;
    margin-top: 10px;
  }
`

export const UploadFileHidden = styled.input`
  display: none;
`
