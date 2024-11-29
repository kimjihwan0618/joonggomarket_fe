import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import * as S from './UsedItemDetail.styles'
import Image from 'next/image'
import { Modal, Tooltip } from 'antd'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import { useRouter } from 'next/router'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useQueryFetchUsedItem } from 'src/components/commons/hooks/quires/usedItem/useQueryFetchUsedItem'
import { useMutationToggleUsedItemPick } from 'src/components/commons/hooks/mutations/usedItem/useMutationToggleUsedItemPick'
import { useTextCopy } from 'src/components/commons/hooks/custom/useTextCopy'
import theme from 'src/commons/styles/theme'
import Slider from 'react-slick'
import { useEffect, useRef, useState } from 'react'
import KakaoMapUI from 'src/components/commons/kakaomap/KakaomapUI'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'
import 'react-quill/dist/quill.snow.css'
import { useMutationCreatePointTransactionOfBuyingAndSelling } from 'src/components/commons/hooks/mutations/usedItem/useMutationCreatePointTransactionOfBuyingAndSelling'

export default function UsedItemDetailUI(): JSX.Element {
  const router = useRouter()
  const [isSliding, setIsSliding] = useState(false)
  const useditemId = typeof router.query.useditemId === 'string' ? router.query.useditemId : ''
  const { toggleUsedItemPick } = useMutationToggleUsedItemPick(useditemId)
  const { moveToPage } = useMoveToPage()
  const { data, error } = useQueryFetchUsedItem(useditemId)
  const { data: userLoggedin } = useQueryFetchUserLoggedIn()
  const { createPointTransactionOfBuyingAndSelling, loading } =
    useMutationCreatePointTransactionOfBuyingAndSelling()
  const { onCopyLink } = useTextCopy()
  const [isOpen, setIsOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const sliderRef = useRef(null)

  const onClickSellingOk = async (): Promise<void> => {
    await createPointTransactionOfBuyingAndSelling()
    setIsOpen(false)
  }

  const handleBeforeChange = (oldIndex, newIndex) => {
    setImageIndex(newIndex)
  }

  const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
  }

  useEffect(() => {
    if (error) {
      Modal.warning({ content: '유효한 상품이 아닙니다.' })
      moveToPage(`/markets`)()
    }
  }, [error])

  return (
    <>
      {useditemId && (
        <>
          <Modal
            title="해당 제품을 구입하시겠습니까?"
            open={isOpen}
            onOk={onClickSellingOk}
            onCancel={() => setIsOpen(false)}
            okButtonProps={{ disabled: loading }}
            confirmLoading={loading}
            okText="확인"
            cancelText="취소"
          />
          <S.ContentWrapper>
            <S.UsedItemTitleWrapper>
              <S.WriterInfo>
                <Image
                  unoptimized
                  src={
                    data?.fetchUseditem?.seller.picture !== '' &&
                    data?.fetchUseditem?.seller.picture?.includes('.')
                      ? `${process.env.NEXT_PUBLIC_S3_STORAGE}${data?.fetchUseditem?.seller.picture}`
                      : '/images/ic_profile2.png'
                  }
                  width={56}
                  height={56}
                />
                <S.Info>
                  <dt>{data?.fetchUseditem?.seller.name}</dt>
                  <dd>
                    Date :{' '}
                    {data?.fetchUseditem?.updatedAt &&
                      toYYYYMMDDHHMMSS(data?.fetchUseditem?.updatedAt)}
                  </dd>
                </S.Info>
              </S.WriterInfo>
              <S.IconInfo>
                <S.LinkIcon onClick={onCopyLink}>
                  <Image unoptimized width={34} height={34} src={'/images/ic_link.png'} />
                </S.LinkIcon>
                {(data?.fetchUseditem?.useditemAddress?.address ||
                  data?.fetchUseditem?.useditemAddress?.addressDetail) && (
                  <Tooltip
                    placement="topRight"
                    title={
                      <>
                        {data?.fetchUseditem?.useditemAddress?.address}
                        <br />
                        {data?.fetchUseditem?.useditemAddress?.addressDetail}
                      </>
                    }
                  >
                    <S.LocationIcon>
                      <Image unoptimized width={34} height={34} src={'/images/ic_location.png'} />
                    </S.LocationIcon>
                  </Tooltip>
                )}
              </S.IconInfo>
            </S.UsedItemTitleWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitleBar>
                <S.TextBox>
                  <S.Remarks>{data?.fetchUseditem?.remarks}</S.Remarks>
                  <S.Name>{data?.fetchUseditem?.name}</S.Name>
                </S.TextBox>
                <S.PickItem>
                  <S.Heart onClick={toggleUsedItemPick}>
                    <Image unoptimized src={'/images/ic_favorite.png'} width={36} height={36} />
                  </S.Heart>
                  <S.PickCount>{data?.fetchUseditem?.pickedCount}</S.PickCount>
                </S.PickItem>
              </S.ContentsTitleBar>
              <S.Price>
                {new Intl.NumberFormat('en-US').format(data?.fetchUseditem?.price)}원
              </S.Price>
              {data?.fetchUseditem?.images.length !== 0 && (
                <S.CarouselWrapper>
                  <S.Carousel>
                    <Slider
                      {...{
                        ...SETTINGS,
                        infinite:
                          data?.fetchUseditem?.images.filter((image) => image !== '').length > 1,
                      }}
                      ref={sliderRef}
                    >
                      {data?.fetchUseditem?.images
                        .filter((image) => image !== '')
                        .map((image) => (
                          <S.ImageWrapper>
                            <S.ImageBox>
                              <Image
                                src={`${process.env.NEXT_PUBLIC_S3_STORAGE}${image}`}
                                alt="상품 이미지"
                                width={296}
                                height={296}
                              />
                            </S.ImageBox>
                          </S.ImageWrapper>
                        ))}
                    </Slider>
                  </S.Carousel>
                </S.CarouselWrapper>
              )}
              <S.PreviewImageList>
                {data?.fetchUseditem?.images
                  .filter((image) => image !== '')
                  .map((image, index) => (
                    <S.PreviewItem
                      onClick={() => {
                        if (isSliding) return
                        setIsSliding(true)
                        setImageIndex(index)
                        sliderRef.current.slickGoTo(index)
                        setTimeout(() => setIsSliding(false), 250)
                      }}
                      data-selected={index === imageIndex}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_S3_STORAGE}${image}`}
                        width={78}
                        height={78}
                      />
                    </S.PreviewItem>
                  ))}
              </S.PreviewImageList>
              <S.ContentsMain
                dangerouslySetInnerHTML={{ __html: data?.fetchUseditem?.contents }}
              ></S.ContentsMain>
              <S.Tags>{data?.fetchUseditem?.tags.map((tag) => <>{tag}&nbsp;</>)}</S.Tags>
            </S.ContentsWrapper>
            {data?.fetchUseditem?.useditemAddress?.lat &&
              data?.fetchUseditem?.useditemAddress?.lng && (
                <S.KakaoMapWrapper>
                  <KakaoMapUI lat={37.5665} lng={126.978} />
                </S.KakaoMapWrapper>
              )}
          </S.ContentWrapper>
          <S.ButtonWrapper>
            <Button01
              background={theme.colors.gray04}
              onClick={moveToPage('/markets')}
              name={'목록으로'}
              width="04"
            />
            {data?.fetchUseditem?.seller?._id === userLoggedin?.fetchUserLoggedIn?._id && (
              <Button01
                onClick={moveToPage(`/markets/${useditemId}/edit`)}
                name={'수정하기'}
                width="04"
                background={theme.colors.main}
              />
            )}
            {data?.fetchUseditem?.seller?._id !== userLoggedin?.fetchUserLoggedIn?._id &&
              !data?.fetchUseditem?.soldAt && (
                <Button01
                  onClick={() => setIsOpen(true)}
                  name={'구매하기'}
                  width="04"
                  background={theme.colors.main}
                />
              )}
          </S.ButtonWrapper>
        </>
      )}
    </>
  )
}
