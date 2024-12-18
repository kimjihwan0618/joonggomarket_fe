import React from 'react'
import Slider from 'react-slick'
import * as S from 'src/components/commons/layout/carousel/Carousel.styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const items = [
  {
    title: '커뮤니티',
    description: `회원 인증없이 자유롭게 글을 쓰고 읽을 수 있는 서비스입니다.`,
    src: `/images/banner01.jpg`,
  },
  {
    title: '중고거래',
    description: `유저 등록후, 중고 물품을 거래할 수 있는 서비스입니다.`,
    src: `/images/banner02.jpg`,
  },
]

export default function SimpleSlider(): JSX.Element {
  const handleBeforeChange = (oldIndex, newIndex) => {
    // console.log(`슬라이드가 변경됩니다: ${oldIndex} -> ${newIndex}`)
  }

  const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <S.Wrapper>
      <S.Carousel>
        <Slider {...SETTINGS}>
          {items.map((obj, idx) => (
            <S.ContentWrapper key={idx}>
              <Image
                unoptimized
                src={obj.src}
                alt="Banner Image"
                layout="fill"
                objectFit={'cover'}
              />
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
