import Image from 'next/image'
import * as S from './UsedItemList.styles'
import { useQueryFetchUsedItemsOfTheBest } from 'src/components/commons/hooks/quires/usedItem/useQueryFetchBoardsOfTheBest'
import { useSearch } from 'src/components/commons/hooks/custom/useSearch'
import { useQueryFetchUsedItems } from 'src/components/commons/hooks/quires/usedItem/useQueryFetchUsedItems'
import { useState } from 'react'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import theme from 'src/commons/styles/theme'
import InfiniteScroll from 'react-infinite-scroller'
import Searchbars01UI from 'src/components/commons/searchbars/01/Searchbars01.index'
import { useFetchMoreScroll } from 'src/components/commons/hooks/custom/useFetchMoreScroll'
import UsedItemUI from '../item/UsedItem.index'

export default function UsedItemListUI(): JSX.Element {
  const { moveToPage } = useMoveToPage()
  const { data: usedItemsBest } = useQueryFetchUsedItemsOfTheBest()
  const { keyword, onChangeKeyword, setStartDate, setEndDate } = useSearch()
  const { data: usedItems, refetch: refetchUsedItems, fetchMore } = useQueryFetchUsedItems()
  const [isSoldout, setIsSoldout] = useState(false)
  const { onLoadMore } = useFetchMoreScroll({
    fetchData: usedItems,
    fetchListName: 'fetchUseditems',
    fetchMore,
    variables: {
      search: keyword,
      isSoldout,
    },
  })

  const onClickTab = async (tabName: string): Promise<void> => {
    const toggleSoldout = tabName === '판매중상품' ? false : true
    setIsSoldout(toggleSoldout)
    await refetchUsedItems({
      search: keyword,
      page: 1,
      isSoldout: toggleSoldout,
    })
  }

  return (
    <S.Wrapper>
      <S.BestUsedItemSectionTitle>베스트 상품</S.BestUsedItemSectionTitle>
      <S.BestUsedItemWrapper>
        {usedItemsBest?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestUsedItem onClick={moveToPage(`/markets/${el._id}`)}>
            <S.ItemImageBox>
              <Image
                unoptimized
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
                  <Image unoptimized src="/images/ic_favorite.png" width={24} height={24} />
                  <S.PickedCount>{el.pickedCount}</S.PickedCount>
                </S.PickedItem>
              </S.InfoBottom>
            </S.UsedItemInfo1>
          </S.BestUsedItem>
        ))}
      </S.BestUsedItemWrapper>
      <S.UsedItemSearchWrapper>
        <S.SearchWrapper>
          <Searchbars01UI
            refetchData={refetchUsedItems}
            refetchVariables={{ isSoldout }}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            onChangeKeyword={onChangeKeyword}
          />
          <S.TabsItem>
            <S.Tab onClick={() => onClickTab('판매중상품')} data-isactive={!isSoldout}>
              판매중상품
            </S.Tab>
            <S.Tab onClick={() => onClickTab('판매된상품')} data-isactive={isSoldout}>
              판매된상품
            </S.Tab>
          </S.TabsItem>
        </S.SearchWrapper>
        <S.UsedItemsWrapper>
          <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
            {usedItems?.fetchUseditems.map((el) => (
              <UsedItemUI
                onClick={moveToPage(`/markets/${el._id}`)}
                usedItem={el}
                keyword={keyword}
              />
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
