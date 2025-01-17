import Image from 'next/image'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import * as S from './UsedItem.styles'
import theme from 'src/commons/styles/theme'

export default function UsedItemUI(props): JSX.Element {
  const { moveToPage } = useMoveToPage()

  return (
    <S.UsedItem onClick={moveToPage(`/markets/${props.usedItem._id}`)}>
      <S.ItemImageBox2>
        <Image
          unoptimized
          src={
            props.usedItem.images.filter((imagePath) => imagePath !== '' && imagePath.includes('.'))
              .length !== 0
              ? `${process.env.NEXT_PUBLIC_S3_STORAGE}${props.usedItem.images.filter((imagePath) => imagePath !== '' && imagePath.includes('.'))[0]}`
              : '/images/ic-noimage.jpg'
          }
          objectFit="cover"
          layout="fill"
        />
      </S.ItemImageBox2>
      <S.UsedItemInfo2>
        <S.LeftInfo>
          <S.Title2>
            {props.usedItem.name
              .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
              .split('!@#')
              .map((el2: string) => (
                <span style={{ color: el2 === props.keyword ? theme.colors.main : 'black' }}>
                  {el2}
                </span>
              ))}
          </S.Title2>
          <S.Remarks2>{props.usedItem.remarks}</S.Remarks2>
          <S.Tags>{props.usedItem.tags}</S.Tags>
          <S.SellerPicked>
            <S.Seller>
              <Image
                unoptimized
                src={
                  props.usedItem.seller?.picture && props.usedItem.seller.picture?.includes('.')
                    ? `${process.env.NEXT_PUBLIC_S3_STORAGE}${props.usedItem.seller.picture}`
                    : '/images/ic_profile2.png'
                }
                width={24}
                height={24}
                alt="프로필 아이콘"
              />
              &nbsp;&nbsp;{props.usedItem.seller.name}
            </S.Seller>
            <S.Picked>
              <Image
                unoptimized
                src={'/images/ic_favorite.png'}
                width={24}
                height={24}
                alt="하트"
              />
              &nbsp;&nbsp;{props.usedItem.pickedCount}
            </S.Picked>
          </S.SellerPicked>
        </S.LeftInfo>
        <S.PriceBox>
          <S.Price2>{new Intl.NumberFormat('en-US').format(props.usedItem.price)}원</S.Price2>
          <S.IsSold data-sold={props.usedItem.soldAt !== null}>
            {props.usedItem.soldAt ? '판매완료' : '판매중'}
          </S.IsSold>
        </S.PriceBox>
      </S.UsedItemInfo2>
    </S.UsedItem>
  )
}
