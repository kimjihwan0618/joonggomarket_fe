// import Searchbars01UI from 'src/components/commons/searchbars/01/Searchbars01.index'
import * as S from './Point.styles'
import { useState } from 'react'
import { useSearch } from 'src/components/commons/hooks/custom/useSearch'
import Table02UI from 'src/components/commons/dataGrid/table/02/Table02.index'
import { useFetchMoreScroll } from 'src/components/commons/hooks/custom/useFetchMoreScroll'
import { useQueryFetchPointTransactions } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactions'
import { useQueryFetchPointTransactionsOfBuying } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactionsOfBuying'
import { useQueryFetchPointTransactionsOfLoading } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactionsOfLoading'
import { useQueryFetchPointTransactionsOfSelling } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactionsOfSelling'
import { ALL_COLUMNS, BUYING_COLUMNS, LOADING_COLUMNS, SELLING_COLUMNS } from './Point.columns'
import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date'

export default function MyPointUI(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState('전체내역')
  const { keyword, onChangeKeyword } = useSearch()
  const { data: transactions, fetchMore: fetchMore01 } = useQueryFetchPointTransactions()
  const { data: transactionsLoading, fetchMore: fetchMore02 } =
    useQueryFetchPointTransactionsOfLoading()
  const {
    data: transactionsBuying,
    // refetch: refetch03,
    fetchMore: fetchMore03,
  } = useQueryFetchPointTransactionsOfBuying()
  const {
    data: transactionsSelling,
    // refetch: refetch04,
    fetchMore: fetchMore04,
  } = useQueryFetchPointTransactionsOfSelling()
  const { onLoadMore: onLoadMore01 } = useFetchMoreScroll({
    fetchData: transactions,
    fetchListName: 'fetchPointTransactions',
    fetchMore: fetchMore01,
    variables: {
      search: '',
    },
  })
  const { onLoadMore: onLoadMore02 } = useFetchMoreScroll({
    fetchData: transactionsLoading,
    fetchListName: 'fetchPointTransactionsOfLoading',
    fetchMore: fetchMore02,
    variables: {
      search: '',
    },
  })
  const { onLoadMore: onLoadMore03 } = useFetchMoreScroll({
    fetchData: transactionsBuying,
    fetchListName: 'fetchPointTransactionsOfBuying',
    fetchMore: fetchMore03,
    variables: {
      search: keyword,
    },
  })
  const { onLoadMore: onLoadMore04 } = useFetchMoreScroll({
    fetchData: transactionsSelling,
    fetchListName: 'fetchPointTransactionsOfSelling',
    fetchMore: fetchMore04,
    variables: {
      search: keyword,
    },
  })

  const onClickTab = async (tabName: string): Promise<void> => {
    setSelectedTab(tabName)
  }

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        {/* {selectedTab === '구매내역' && (
          <Searchbars01UI
            refetchData={refetch03}
            refetchVariables={{}}
            onChangeKeyword={onChangeKeyword}
          />
        )}
        {selectedTab === '판매내역' && (
          <Searchbars01UI
            refetchData={refetch04}
            refetchVariables={{}}
            onChangeKeyword={onChangeKeyword}
          />
        )} */}
        <S.TabsItem>
          <S.Tab onClick={() => onClickTab('전체내역')} data-isactive={selectedTab === '전체내역'}>
            전체내역
          </S.Tab>
          <S.Tab onClick={() => onClickTab('충전내역')} data-isactive={selectedTab === '충전내역'}>
            충전내역
          </S.Tab>
          <S.Tab onClick={() => onClickTab('구매내역')} data-isactive={selectedTab === '구매내역'}>
            구매내역
          </S.Tab>
          <S.Tab onClick={() => onClickTab('판매내역')} data-isactive={selectedTab === '판매내역'}>
            판매내역
          </S.Tab>
        </S.TabsItem>
      </S.SearchWrapper>
      {selectedTab === '전체내역' && (
        <Table02UI
          rowKey="_id"
          data={transactions?.fetchPointTransactions.map((el) => ({
            ...el,
            createdAt: toYYYYMMDDHHMMSS(el.createdAt),
            amount: new Intl.NumberFormat('en-US').format(el.amount),
            balance: new Intl.NumberFormat('en-US').format(el.balance),
          }))}
          keyword={keyword}
          columns={ALL_COLUMNS}
          onLoadMore={onLoadMore01}
        />
      )}
      {selectedTab === '충전내역' && (
        <Table02UI
          rowKey="_id"
          data={transactionsLoading?.fetchPointTransactionsOfLoading.map((el) => ({
            ...el,
            createdAt: toYYYYMMDDHHMMSS(el.createdAt),
            amount: new Intl.NumberFormat('en-US').format(el.amount),
            balance: new Intl.NumberFormat('en-US').format(el.balance),
          }))}
          keyword={keyword}
          columns={LOADING_COLUMNS}
          onLoadMore={onLoadMore02}
        />
      )}
      {selectedTab === '구매내역' && (
        <Table02UI
          rowKey="_id"
          data={transactionsBuying?.fetchPointTransactionsOfBuying.map((el) => ({
            ...el,
            createdAt: toYYYYMMDDHHMMSS(el.createdAt),
            useditem_name: el?.useditem?.name ?? '',
            amount: new Intl.NumberFormat('en-US').format(el.amount),
            balance: new Intl.NumberFormat('en-US').format(el.balance),
          }))}
          keyword={keyword}
          columns={BUYING_COLUMNS}
          onLoadMore={onLoadMore03}
        />
      )}
      {selectedTab === '판매내역' && (
        <Table02UI
          rowKey="_id"
          data={transactionsSelling?.fetchPointTransactionsOfSelling.map((el) => ({
            ...el,
            createdAt: toYYYYMMDDHHMMSS(el.createdAt),
            useditem_name: el?.useditem?.name ?? '',
            amount: new Intl.NumberFormat('en-US').format(el.amount),
            balance: new Intl.NumberFormat('en-US').format(el.balance),
          }))}
          keyword={keyword}
          columns={SELLING_COLUMNS}
          onLoadMore={onLoadMore04}
        />
      )}
    </S.Wrapper>
  )
}
