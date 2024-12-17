import styled from '@emotion/styled'
import { css } from '@emotion/react'
import theme from 'src/commons/styles/theme'

const IconButton = css`
  background: none;
  border: none;
`

export const ContentWrapper = styled.div`
  padding: 60px 75px;
  /* min-width: 920px; */
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  ${theme.media.screen3} {
    padding: 40px 25px;
  }
`

export const UsedItemTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
`

export const CarouselWrapper = styled.div`
  margin: 60px auto 0px;
  width: 360px;
  ${theme.media.screen3} {
    width: 220px;
  }
`

export const Carousel = styled.div`
  position: relative;
  margin: 0 auto;
  p,
  h3 {
    color: white;
  }
  .slick-prev {
    z-index: 1; /* 버튼이 슬라이드 위에 표시되도록 설정 */
  }

  .slick-next {
    z-index: 1; /* 버튼이 슬라이드 위에 표시되도록 설정 */
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.gray03};
  }
  .slick-dots {
    bottom: 20px;
  }
  .slick-dots button {
    font-size: 0; /* 버튼 텍스트 제거 */
    border-radius: 50%;
    padding: 0;
    border: 1px solid white;
    cursor: pointer;
    outline: none;
  }
  .slick-dots button:before {
    color: ${({ theme }) => theme.colors.gray03};
  }
  .slick-dots li button:hover:before {
    color: ${({ theme }) => theme.colors.gray04} !important;
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.colors.main}; /* 활성화된 동그라미 버튼 색상 */
  }
  ${theme.media.screen3} {
    .slick-prev {
      left: -60px;
    }
    .slick-next {
      right: -40px;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 360px;
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 설정 */
  ${theme.media.screen3} {
    height: 260px;
    margin-bottom: 20px;
  }
`

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  & > span {
    border-radius: 100px;
  }
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

export const Heart = styled.div`
  cursor: pointer;
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
  font-size: 1.6rem;
  padding: 0px !important;
  border: none !important;
`

export const Tags = styled.p`
  color: ${({ theme }) => theme.colors.gray04};
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 40px;
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
    margin-left: 24px;
  }
`

export const LinkIcon = styled.button`
  ${IconButton}
  cursor: pointer;
`

export const LocationIcon = styled.button`
  ${IconButton}
  margin-left: 20px;
`
export const PreviewImageList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PreviewItem = styled.li`
  position: relative;
  margin-right: 24px;
  border: ${(props) => props['data-selected'] && `1px solid ${props.theme.colors.main}`};
  &:last-of-type {
    margin-right: 0px;
  }
  &:after {
    cursor: pointer;
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${(props) => props['data-selected'] && props.theme.colors.main};
    opacity: 0.1;
  }
`

export const KakaoMapWrapper = styled.div`
  width: 100%;
  height: 360px;
  padding-top: 60px;
  margin-top: 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray04};
`
