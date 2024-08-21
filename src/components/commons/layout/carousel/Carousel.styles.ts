import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 400px;
  margin-top: 100px;
`

export const Carousel = styled.div`
  position: relative;
  margin: 0 auto;
  p,
  h3 {
    color: white;
  }
  .slick-prev {
    left: 18%; /* 좌측 위치 조정 */
    z-index: 1; /* 버튼이 슬라이드 위에 표시되도록 설정 */
    width: 48px;
    height: 48px;
  }

  .slick-next {
    right: 18%; /* 우측 위치 조정 */
    z-index: 1; /* 버튼이 슬라이드 위에 표시되도록 설정 */
  }
  .slick-next:before {
    font-size: 48px;
  }
  .slick-prev:before {
    font-size: 48px;
  }
  .slick-dots {
    bottom: 40px;
  }
  .slick-dots button {
    font-size: 0; /* 버튼 텍스트 제거 */
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 8px;
    height: 8px;
    padding: 0;
    border: 1px solid white;
    cursor: pointer;
    outline: none;
  }

  .slick-dots .slick-active button {
    background: white; /* 활성화된 동그라미 버튼 색상 */
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 설정 */
`

export const ContentInner = styled.div`
  height: 100%;
  width: 70%;
  min-width: 920px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

export const ContentTitle = styled.h3`
  font-size: 4.8rem;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
`

export const ContentDescription = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  white-space: pre-wrap;
`
