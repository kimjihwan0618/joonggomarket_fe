import Image from 'next/image'
import * as S from './UsedItemList.styles'
import { useQueryFetchUsedItemsOfTheBest } from 'src/components/commons/hooks/quires/usedItem/useQueryFetchBoardsOfTheBest'
import { useSearch } from 'src/components/commons/hooks/custom/useSearch'
import Searchbars01 from 'src/components/commons/searchbars/01/Searchbars01.container'
import { useQueryFetchUsedItems } from 'src/components/commons/hooks/quires/usedItem/useQueryFetchUsedItems'
import { useState } from 'react'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import theme from 'src/commons/styles/theme'
import InfiniteScroll from 'react-infinite-scroller'

export default function UsedItemListUI(): JSX.Element {
  const { moveToPage } = useMoveToPage()
  const { data: usedItemsBest } = useQueryFetchUsedItemsOfTheBest()
  const { keyword, onChangeKeyword, startDate, setStartDate, endDate, setEndDate } = useSearch()
  const { data: usedItems, refetch: refetchUsedItems, fetchMore } = useQueryFetchUsedItems()
  const [isSoldout, setIsSoldout] = useState(true)

  const onClickTab = async (tabName: string): Promise<void> => {
    switch (tabName) {
      case '판매중상품':
        await setIsSoldout(true)
        break
      case '판매된상품':
        await setIsSoldout(false)
        break
      default:
    }
    await refetchUsedItems({
      search: keyword,
      page: 1,
      isSoldout,
    })
  }

  const onLoadMore = (): void => {
    if (usedItems === undefined) return
    fetchMore({
      variables: {
        page: Math.ceil((usedItems?.fetchUseditems.length ?? 10) / 10 + 1),
        search: keyword,
        isSoldout,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          }
        }
        return {
          fetchUseditems: [...prev?.fetchUseditems, ...fetchMoreResult?.fetchUseditems],
        }
      },
    })
  }

  return (
    <S.Wrapper>
      <S.BestUsedItemSectionTitle>베스트 상품</S.BestUsedItemSectionTitle>
      <S.BestUsedItemWrapper>
        {usedItemsBest?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestUsedItem>
            <S.ItemImageBox>
              <Image
                src={
                  el.images.filter((imagePath) => imagePath !== '' && imagePath.includes('.'))
                    .length !== 0
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : '/images/ic-noimage.jpg'
                }
                objectFit="cover"
                layout="fill"
              />
            </S.ItemImageBox>
            <S.UsedItemInfo1>
              <S.Title>{el.name}</S.Title>
              <S.Remarks>{el.remarks}</S.Remarks>
              <S.InfoBottom>
                <S.Price>{new Intl.NumberFormat('en-US').format(el.price)}원</S.Price>
                <S.PickedItem>
                  <Image src="/images/ic_favorite.png" width={24} height={24} />
                  <S.PickedCount>{el.pickedCount}</S.PickedCount>
                </S.PickedItem>
              </S.InfoBottom>
            </S.UsedItemInfo1>
          </S.BestUsedItem>
        ))}
      </S.BestUsedItemWrapper>
      <S.UsedItemSearchWrapper>
        <S.SearchWrapper>
          <S.TabsItem>
            <S.Tab onClick={() => onClickTab('판매중상품')} data-isactive={isSoldout}>
              판매중상품
            </S.Tab>
            <S.Tab onClick={() => onClickTab('판매된상품')} data-isactive={!isSoldout}>
              판매된상품
            </S.Tab>
          </S.TabsItem>
          <Searchbars01
            refetchData={refetchUsedItems}
            fetchOptions={{ isSoldout }}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            onChangeKeyword={onChangeKeyword}
          />
        </S.SearchWrapper>
        <S.UsedItemsWrapper>
          <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
            {usedItems?.fetchUseditems.map((el) => (
              <S.UsedItem>
                <S.ItemImageBox2>
                  <Image
                    src={
                      el.images.filter((imagePath) => imagePath !== '' && imagePath.includes('.'))
                        .length !== 0
                        ? `https://storage.googleapis.com/${el.images[0]}`
                        : '/images/ic-noimage.jpg'
                    }
                    objectFit="cover"
                    layout="fill"
                  />
                </S.ItemImageBox2>
                <S.UsedItemInfo2>
                  <S.LeftInfo>
                    <S.Title2>{el.name}</S.Title2>
                    <S.Remarks2>{el.remarks}</S.Remarks2>
                    <S.Tags>{el.tags}</S.Tags>
                    <S.SellerPicked>
                      <S.Seller>
                        <Image
                          src={
                            el.seller.picture !== '' && el.seller.picture?.includes('.')
                              ? `https://storage.googleapis.com/${el.seller.picture}`
                              : '/images/ic_profile2.png'
                          }
                          width={24}
                          height={24}
                          alt="프로필 아이콘"
                        />
                        &nbsp;&nbsp;{el.seller.name}
                      </S.Seller>
                      <S.Picked>
                        <Image src={'/images/ic_favorite.png'} width={24} height={24} alt="하트" />
                        &nbsp;&nbsp;{el.pickedCount}
                      </S.Picked>
                    </S.SellerPicked>
                  </S.LeftInfo>
                  <S.Price2>{new Intl.NumberFormat('en-US').format(el.price)}원</S.Price2>
                </S.UsedItemInfo2>
              </S.UsedItem>
            ))}
          </InfiniteScroll>
        </S.UsedItemsWrapper>
        <S.Bottom>
          <Button01
            onClick={moveToPage('/markets/new')}
            background={theme.colors.main}
            iconSrc={'/images/ic_pencil.png'}
            name="상품 등록"
          />
        </S.Bottom>
      </S.UsedItemSearchWrapper>
    </S.Wrapper>
  )
}
