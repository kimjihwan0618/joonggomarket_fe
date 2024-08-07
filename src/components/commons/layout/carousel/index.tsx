import React, { Component } from 'react'
import Slider from 'react-slick'
import * as S from 'src/components/commons/layout/carousel/Carousel.styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const items = [
  { title: 'CAROUSEL DESIGN1', description: '줄바꿈 1\n줄바꿈 2', src: '/images/banner01.png' },
  { title: 'CAROUSEL DESIGN2', description: '줄바꿈 1\n줄바꿈 2', src: '/images/banner02.png' },
  { title: 'CAROUSEL DESIGN3', description: '줄바꿈 1\n줄바꿈 2', src: '/images/banner03.png' },
]

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
            {items.map((obj) => (
              <S.ContentWrapper>
                <Image src={obj.src} alt="Banner Image" layout="fill" objectFit={'cover'} />
                <S.ContentInner>
                  <S.ContentTitle>{obj.title}</S.ContentTitle>
                  <S.ContentDescription>{obj.description}</S.ContentDescription>
                </S.ContentInner>
              </S.ContentWrapper>
            ))}
          </Slider>
        </S.Carousel>
      </S.Wrapper>
    )
  }
}
