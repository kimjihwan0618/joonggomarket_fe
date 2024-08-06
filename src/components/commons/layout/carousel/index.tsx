import React, { Component } from 'react'
import Slider from 'react-slick'
import * as S from 'src/components/commons/layout/carousel/Carousel.styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <S.Wrapper>
        <S.Carousel>
          <Slider {...settings}>
            <S.ContentWrapper>
              <Image
                src="/images/banner01.png"
                alt="Banner Image"
                layout="fill"
                objectFit={'cover'}
              />
              <S.ContentInner>
                <S.ContentTitle>CAROUSEL DESIGN1</S.ContentTitle>
                <S.ContentDescription>
                  캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
                  <br />
                  같은 공간에 하나 이상의 콘텐츠를 보여주며, 한번에 하나씩만 보이고
                  <br />
                  각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
                </S.ContentDescription>
              </S.ContentInner>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <Image
                src="/images/banner02.png"
                alt="Banner Image"
                layout="fill"
                objectFit={'cover'}
              />
              <S.ContentInner>
                <S.ContentTitle>CAROUSEL DESIGN2</S.ContentTitle>
                <S.ContentDescription>
                  캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
                  <br />
                  같은 공간에 하나 이상의 콘텐츠를 보여주며, 한번에 하나씩만 보이고
                  <br />
                  각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
                </S.ContentDescription>
              </S.ContentInner>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <Image
                src="/images/banner03.png"
                alt="Banner Image"
                layout="fill"
                objectFit={'cover'}
              />
              <S.ContentInner>
                <S.ContentTitle>CAROUSEL DESIGN3</S.ContentTitle>
                <S.ContentDescription>
                  캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
                  <br />
                  같은 공간에 하나 이상의 콘텐츠를 보여주며, 한번에 하나씩만 보이고
                  <br />
                  각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
                </S.ContentDescription>
              </S.ContentInner>
            </S.ContentWrapper>
          </Slider>
        </S.Carousel>
      </S.Wrapper>
    )
  }
}
