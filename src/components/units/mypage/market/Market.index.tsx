import Searchbars01UI from 'src/components/commons/searchbars/01/Searchbars01.index'
import * as S from './Market.styles'
import { useState } from 'react'
import { useSearch } from 'src/components/commons/hooks/custom/useSearch'
import Table from 'src/components/commons/dataGrid/table/01/Table01.index'
import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import Pagination from 'src/components/commons/dataGrid/pagination/01/Pagination01.index'
import { useQueryFetchUsedItemsISold } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchUsedItemsISold'
import { useQueryFetchUsedItemsISoldCount } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchUsedItemsISoldCount'

const TABLE_COLUMNS = [
  { name: '상품명', dataKey: 'name', isSearch: true },
  { name: '', dataKey: 'soldAtConvert', isSearch: false },
  { name: '판매가격', dataKey: 'price', isSearch: false },
  { name: '날짜', dataKey: 'createdAt', isSearch: false },
]

export default function MyMarketUI(): JSX.Element {
  const { moveToPage } = useMoveToPage()
  const [selectedTab, setSelectedTab] = useState('나의상품')
  const { keyword, onChangeKeyword, selectedPage, setSelectedPage, startPage, setStartPage } =
    useSearch()
  const { data: usedItemsISold, refetch: refetchUsedItemsISold } = useQueryFetchUsedItemsISold()
  const { data: usedItemsISoldCount } = useQueryFetchUsedItemsISoldCount()

  const onClickTab = async (tabName: string): Promise<void> => {
    setSelectedTab(tabName)
    switch (tabName) {
      case '나의상품':
        break
      case '마이찜':
        break
    }
    // await refetchUsedItems({
    //   search: keyword,
    //   page: 1,
    //   isSoldout,
    // })
  }

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Searchbars01UI
          refetchData={refetchUsedItemsISold}
          refetchVariables={{}}
          setSelectedPage={setSelectedPage}
          setStartPage={setStartPage}
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
      <Table
        rowKey="_id"
        data={usedItemsISold?.fetchUseditemsISold.map((usedItem) => ({
          ...usedItem,
          soldAtConvert: usedItem.soldAt ? '판매완료' : '',
          createdAt: toYYYYMMDDHHMMSS(usedItem.createdAt),
          price: `￦${new Intl.NumberFormat('en-US').format(usedItem.price)}원`,
        }))}
        keyword={keyword}
        activePage={selectedPage}
        rowHandler={{ onClickRow: moveToPage, path: '/markets' }}
        columns={TABLE_COLUMNS}
      />
      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        startPage={startPage}
        setStartPage={setStartPage}
        refetchVariables={{
          search: keyword,
        }}
        refetch={refetchUsedItemsISold}
        keyword={keyword}
        count={usedItemsISoldCount?.fetchUseditemsCountISold ?? 0}
      />
    </S.Wrapper>
  )
}
