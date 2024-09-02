import styled from '@emotion/styled'
import ReactPlayer from 'react-player'
import { css } from '@emotion/react'

const IconButton = css`
  background: none;
  border: none;
`

export const ContentWrapper = styled.div`
  padding: 60px 75px;
  /* min-width: 920px; */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`

export const UsedItemTitleWrapper = styled.div`
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
  }
  dd {
    font-size: 1.3rem;
    margin-left: 0px;
    color: rgba(130, 130, 130, 1);
  }
`

export const ContentsWrapper = styled.div`
  margin-top: 20px;
`

export const ContentsTitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100% !important;
`

export const TextBox = styled.div``

export const Remarks = styled.h5`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.gray04};
`

export const Name = styled.h4`
  font-size: 2.4rem;
  font-weight: bold;
`

export const PickItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PickCount = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`

export const Price = styled.p`
  font-weight: bold;
  font-size: 3.6rem;
  margin-top: 8px;
`

export const ContentsMain = styled.div`
  margin-top: 40px;
  p {
    font-size: 1.6rem;
  }
`

export const Tags = styled.p`
  color: ${({ theme }) => theme.colors.gray04};
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 20px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 87px auto 40px;
  padding: 60px 75px;
  /* min-width: 920px; */
  padding-bottom: 87px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);

  button:nth-of-type(2) {
    margin: 0 24px;
  }
`

export const LinkIcon = styled.button`
  ${IconButton}
  margin-right: 20px;
  cursor: pointer;
`

export const LocationIcon = styled.button`
  ${IconButton}
`
