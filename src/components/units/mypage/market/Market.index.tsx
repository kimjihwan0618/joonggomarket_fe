import Searchbars01UI from 'src/components/commons/searchbars/01/Searchbars01.index'
import * as S from './Market.styles'
import { useState } from 'react'
import { useSearch } from 'src/components/commons/hooks/custom/useSearch'
import { useQueryFetchUsedItemsISold } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchUsedItemsISold'
import { useQueryFetchUseditemsIPicked } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchUseditemsIPicked'
import InfiniteScroll from 'react-infinite-scroller'
import { useFetchMoreScroll } from 'src/components/commons/hooks/custom/useFetchMoreScroll'
import * as S2 from 'src/components/units/useditem/list/UsedItemList.styles'
import UsedItemUI from '../../useditem/item/UsedItem.index'

export default function MyMarketUI(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState('나의상품')
  const { keyword, onChangeKeyword } = useSearch()
  const {
    data: usedItemsISold,
    refetch: refetchUsedItemsISold,
    fetchMore: fetchMore01,
  } = useQueryFetchUsedItemsISold()
  const {
    data: usedItemsIPicked,
    refetch: refetchUsedItemsIPicked,
    fetchMore: fetchMore02,
  } = useQueryFetchUseditemsIPicked()
  const { onLoadMore } = useFetchMoreScroll({
    fetchData: selectedTab === '나의상품' ? usedItemsISold : usedItemsIPicked,
    fetchListName: selectedTab === '나의상품' ? 'fetchUseditemsISold' : 'fetchUseditemsIPicked',
    fetchMore: selectedTab === '나의상품' ? fetchMore01 : fetchMore02,
    variables: {
      search: keyword,
    },
  })

  const onClickTab = async (tabName: string): Promise<void> => {
    setSelectedTab(tabName)
    switch (tabName) {
      case '나의상품':
        await refetchUsedItemsISold({
          search: keyword,
          page: 1,
        })
        break
      case '마이찜':
        await refetchUsedItemsIPicked({
          search: keyword,
          page: 1,
        })
        break
    }
  }

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Searchbars01UI
          refetchData={selectedTab === '나의상품' ? refetchUsedItemsISold : refetchUsedItemsIPicked}
          refetchVariables={{}}
          onChangeKeyword={onChangeKeyword}
        />
        <S.TabsItem>
          <S.Tab onClick={() => onClickTab('나의상품')} data-isactive={selectedTab === '나의상품'}>
            나의상품
          </S.Tab>
          <S.Tab onClick={() => onClickTab('마이찜')} data-isactive={selectedTab === '마이찜'}>
            마이찜
          </S.Tab>
        </S.TabsItem>
      </S.SearchWrapper>
      <S2.UsedItemsWrapper>
        {selectedTab === '나의상품' ? (
          usedItemsISold?.fetchUseditemsISold?.length === 0 ? (
            <S.NoneDataNotice>나의상품 데이터가 존재하지 않습니다.</S.NoneDataNotice>
          ) : (
            <InfiniteScroll
              pageStart={0}
              loadMore={onLoadMore}
              hasMore={usedItemsISold?.fetchUseditemsISold.length > 0}
              useWindow={false}
            >
              {usedItemsISold?.fetchUseditemsISold.map((el) => (
                <UsedItemUI key={el._id} usedItem={el} keyword={keyword} />
              ))}
            </InfiniteScroll>
          )
        ) : usedItemsIPicked?.fetchUseditemsIPicked?.length === 0 ? (
          <S.NoneDataNotice>마이찜 데이터가 존재하지 않습니다.</S.NoneDataNotice>
        ) : (
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={usedItemsIPicked?.fetchUseditemsIPicked.length > 0}
            useWindow={false}
          >
            {usedItemsIPicked?.fetchUseditemsIPicked.map((el) => (
              <UsedItemUI key={el._id} usedItem={el} keyword={keyword} />
            ))}
          </InfiniteScroll>
        )}
      </S2.UsedItemsWrapper>
    </S.Wrapper>
  )
}
