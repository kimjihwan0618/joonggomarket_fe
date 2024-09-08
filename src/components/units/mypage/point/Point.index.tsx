import Searchbars01UI from 'src/components/commons/searchbars/01/Searchbars01.index'
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
import {
  ApolloQueryResult,
  FetchMoreOptions,
  FetchMoreQueryOptions,
  QueryResult,
} from '@apollo/client'

export default function MyPointUI(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState('전체내역')
  const { keyword, onChangeKeyword } = useSearch()
  const {
    data: transactions,
    refetch: refetch01,
    fetchMore: fetchMore01,
  } = useQueryFetchPointTransactions()
  const {
    data: transactionsLoading,
    refetch: refetch02,
    fetchMore: fetchMore02,
  } = useQueryFetchPointTransactionsOfLoading()
  const {
    data: transactionsBuying,
    refetch: refetch03,
    fetchMore: fetchMore03,
  } = useQueryFetchPointTransactionsOfBuying()
  const {
    data: transactionsSelling,
    refetch: refetch04,
    fetchMore: fetchMore04,
  } = useQueryFetchPointTransactionsOfSelling()
  const [tableData, setTableData] = useState(transactions?.fetchPointTransactions ?? [])
  const [fetchData, setFetchData] = useState<QueryResult['data'] | null>(transactions ?? null)
  const [refetchData, setReFetchData] = useState<QueryResult['refetch']>(() => refetch01)
  const [fetchListName, setFetchListName] = useState('fetchPointTransactions')
  const [fetchMore, setFetchMore] = useState<
    (
      options: FetchMoreQueryOptions<any, any> & FetchMoreOptions<any, any>
    ) => Promise<ApolloQueryResult<any>>
  >(() => fetchMore01)
  const [tableColumn, setTableColumn] = useState(ALL_COLUMNS)
  const { onLoadMore } = useFetchMoreScroll({
    fetchData,
    fetchListName,
    fetchMore,
    variables: {
      search: keyword,
    },
  })

  const onClickTab = async (tabName: string): Promise<void> => {
    setSelectedTab(tabName)
    switch (tabName) {
      case '전체내역':
        setTableData(transactions?.fetchPointTransactions ?? [])
        setFetchData(transactions ?? null)
        setReFetchData(() => refetch01)
        setFetchListName('fetchPointTransactions')
        setFetchMore(() => fetchMore01)
        setTableColumn(ALL_COLUMNS)
        break
      case '충전내역':
        setTableData(transactionsLoading?.fetchPointTransactionsOfLoading ?? [])
        setFetchData(transactionsLoading ?? null)
        setReFetchData(() => refetch02)
        setFetchListName('fetchPointTransactionsOfLoading')
        setFetchMore(() => fetchMore02)
        setTableColumn(LOADING_COLUMNS)
        break
      case '구매내역':
        setTableData(transactionsBuying?.fetchPointTransactionsOfBuying ?? [])
        setFetchData(transactionsBuying ?? null)
        setReFetchData(() => refetch03)
        setFetchListName('fetchPointTransactionsOfBuying')
        setFetchMore(() => fetchMore03)
        setTableColumn(BUYING_COLUMNS)
        break
      case '판매내역':
        setTableData(transactionsSelling?.fetchPointTransactionsOfSelling ?? [])
        setFetchData(transactionsSelling ?? null)
        setReFetchData(() => refetch04)
        setFetchListName('fetchPointTransactionsOfSelling')
        setFetchMore(() => fetchMore04)
        setTableColumn(SELLING_COLUMNS)
        break
    }
  }

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        {selectedTab === '판매내역' && (
          <Searchbars01UI
            refetchData={refetchData}
            refetchVariables={{}}
            onChangeKeyword={onChangeKeyword}
          />
        )}
        {selectedTab === '구매내역' && (
          <Searchbars01UI
            refetchData={refetchData}
            refetchVariables={{}}
            onChangeKeyword={onChangeKeyword}
          />
        )}
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
      <Table02UI
        rowKey="_id"
        data={tableData}
        keyword={keyword}
        columns={tableColumn}
        onLoadMore={onLoadMore}
      />
    </S.Wrapper>
  )
}
