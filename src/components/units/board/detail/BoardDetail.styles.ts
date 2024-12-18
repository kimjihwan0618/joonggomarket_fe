import styled from '@emotion/styled'
import ReactPlayer from 'react-player'
import { css } from '@emotion/react'
import theme from 'src/commons/styles/theme'

const IconButton = css`
  background: none;
  border: none;
`

export const ContentWrapper = styled.div`
  padding: 40px 55px;
  /* min-width: 920px; */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  ${theme.media.screen3} {
    padding: 40px 25px;
  }
`

export const BoardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
`

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
`

export const IconInfo = styled.div`
  display: flex;
  align-items: center;
`

export const Info = styled.dl`
  margin-left: 12px;
  dt {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4px;
  }
  dd {
    font-size: 1.3rem;
    margin-left: 0px;
    color: rgba(130, 130, 130, 1);
  }
  ${theme.media.screen3} {
    margin-left: 8px;
  }
`

export const ContentsWrapper = styled.div`
  margin-top: 20px;
`

export const ContentsTitle = styled.h3`
  font-weight: 700;
  font-size: 3.6rem;
`

export const ContentsMain = styled.div`
  margin: 40px 0 80px;
  pre {
    font-size: 1.6rem;
    white-space: normal;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  padding: 60px 75px;
  /* min-width: 920px; */
  padding-bottom: 87px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);

  button:nth-of-type(2) {
    margin: 0 24px;
  }
`

export const ThumbsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 120px; */
  li:nth-of-type(1) {
    margin-right: 40px;
  }
`

export const Thumbs = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  cursor: pointer;
  dt {
    display: flex;
    justify-content: center;
  }
  dd {
    margin: 0px;
    font-weight: 400;
    font-size: 1.8rem;
    text-align: center;
    color: ${(props) => (props['data-up'] ? props.theme.colors.main : props.theme.colors.gray03)};
  }
  &[data-up='true'] {
    color: rgba(255, 214, 0, 1);
  }
  &[data-up='fasle'] {
    color: rgba(130, 130, 130, 1);
  }
`

export const YoutubePlayer = styled(ReactPlayer)`
  margin: 40px auto;
  /* width: 486px !important;
  height: 240px !important; */
`

export const LinkIcon = styled.button`
  ${IconButton}
  cursor: pointer;
`

export const LocationIcon = styled.button`
  margin-left: 20px;
  ${IconButton}
`

export const ImageContainer = styled.div`
  width: 50%;
  margin: 20px auto;
`
