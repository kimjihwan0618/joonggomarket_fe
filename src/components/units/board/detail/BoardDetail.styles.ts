import styled from '@emotion/styled'
import { ThumbsUIProps } from './BoardDetail.types'
import ReactPlayer from 'react-player'
import { css } from '@emotion/react'

const IconButton = css`
  background: none;
  border: none;
`

export const ContentWrapper = styled.div`
  padding: 80px 101px;
  width: 62.5%;
  margin: 101px auto;
  min-width: 920px;
  min-height: 700px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
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
    font-size: 24px;
    font-weight: 500;
  }
  dd {
    font-size: 16px;
    margin-left: 0px;
    color: rgba(130, 130, 130, 1);
  }
`

export const ContentsWrapper = styled.div`
  margin-top: 80px;
`

export const ContentsTitle = styled.h3`
  font-weight: 700;
  font-size: 36px;
`

export const ContentsMain = styled.div`
  margin-top: 40px;
  p {
    font-size: 16px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 87px auto 40px;
  padding: 80px 101px;
  width: 62.5%;
  min-width: 920px;
  box-sizing: border-box;
  padding-bottom: 87px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);

  button:nth-of-type(2) {
    margin: 0 24px;
  }
`
export const BoardActionButton = styled.button`
  padding: 14px 16px;
  box-sizing: border-box;
  color: white;
  white-space: nowrap;
  height: 52px;
  width: 179px;
  background: #ffffff;
  border: 1px solid rgba(189, 189, 189, 1);
  color: #000;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  &:hover {
    background: rgba(255, 214, 0, 1);
  }
`

export const ThumbsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  list-style: none;
  li:nth-of-type(1) {
    margin-right: 40px;
  }
`

export const Thumbs = styled.dl<ThumbsUIProps>`
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
    font-size: 18px;
    text-align: center;
  }
  &[data-up='true'] {
    color: rgba(255, 214, 0, 1);
  }
  &[data-up='fasle'] {
    color: rgba(130, 130, 130, 1);
  }
`

export const YoutubePlayer = styled(ReactPlayer)`
  margin: 120px auto 0;
  width: 486px !important;
  height: 240px !important;
`

export const LinkIcon = styled.button`
  ${IconButton}
  margin-right: 20px;
  cursor: pointer;
`

export const LocationIcon = styled.button`
  ${IconButton}
`
