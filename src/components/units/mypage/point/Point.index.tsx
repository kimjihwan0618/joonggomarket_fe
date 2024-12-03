import * as S from './Point.styles'
import { useState } from 'react'
import { useSearch } from 'src/components/commons/hooks/custom/useSearch'
import Table from 'src/components/commons/dataGrid/table/01/Table01.index'
import { useQueryFetchPointTransactions } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactions'
import { useQueryFetchPointTransactionsOfBuying } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactionsOfBuying'
import { useQueryFetchPointTransactionsOfLoading } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactionsOfLoading'
import { useQueryFetchPointTransactionsOfSelling } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactionsOfSelling'
import { ALL_COLUMNS, BUYING_COLUMNS, LOADING_COLUMNS, SELLING_COLUMNS } from './Point.columns'
import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import Pagination from 'src/components/commons/dataGrid/pagination/01/Pagination01.index'
import { useQueryFetchPointTransactionsCount } from 'src/components/commons/hooks/quires/usedItem/mypage/useQueryFetchPointTransactionsCount'

export default function MyPointUI(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState('전체내역')
  const { keyword, startPage, setSelectedPage, selectedPage, setStartPage, startDate, endDate } =
    useSearch()
  const { data: transactions, refetch: refetch01 } = useQueryFetchPointTransactions()
  const { data: transactionsLoading, refetch: refetch02 } =
    useQueryFetchPointTransactionsOfLoading()
  const { data: transactionsBuying, refetch: refetch03 } = useQueryFetchPointTransactionsOfBuying()
  const { data: transactionsSelling, refetch: refetch04 } =
    useQueryFetchPointTransactionsOfSelling()
  const { data: pointTransactionCount, refetch: refetchPointTransactionCount } =
    useQueryFetchPointTransactionsCount()

  const onClickTab = async (tabName: string): Promise<void> => {
    setSelectedTab(tabName)
    setSelectedPage(1)

    switch (tabName) {
      case '전체내역':
        refetch01({
          search: '',
          page: 1,
        })
        break
      case '충전내역':
        refetch02({
          search: '',
          page: 1,
        })
        break
      case '구매내역':
        refetch03({
          search: '',
          page: 1,
        })
        break
      case '판매내역':
        refetch04({
          search: '',
          page: 1,
        })
        break
    }

    refetchPointTransactionCount({
      status: tabName === '전체내역' ? '' : tabName.replace('내역', ''),
    })
  }

  return (
    <S.Wrapper>
      <S.SearchWrapper>
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
        <>
          <Table
            rowKey="_id"
            data={transactions?.fetchPointTransactions.map((el) => ({
              ...el,
              createdAt: toYYYYMMDDHHMMSS(el.createdAt),
              amount: new Intl.NumberFormat('en-US').format(el.amount),
              balance: new Intl.NumberFormat('en-US').format(el.balance),
            }))}
            keyword={keyword}
            columns={ALL_COLUMNS}
            activePage={selectedPage}
          />
          <Pagination
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            startPage={startPage}
            setStartPage={setStartPage}
            refetchVariables={{
              endDate,
              startDate,
              search: keyword,
            }}
            refetch={refetch01}
            keyword={keyword}
            count={pointTransactionCount?.fetchPointTransactionsCount ?? 0}
          />
        </>
      )}
      {selectedTab === '충전내역' && (
        <>
          <Table
            rowKey="_id"
            data={transactionsLoading?.fetchPointTransactionsOfLoading.map((el) => ({
              ...el,
              createdAt: toYYYYMMDDHHMMSS(el.createdAt),
              amount: new Intl.NumberFormat('en-US').format(el.amount),
              balance: new Intl.NumberFormat('en-US').format(el.balance),
            }))}
            keyword={keyword}
            columns={LOADING_COLUMNS}
            activePage={selectedPage}
          />
          <Pagination
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            startPage={startPage}
            setStartPage={setStartPage}
            refetchVariables={{
              endDate,
              startDate,
              search: keyword,
            }}
            refetch={refetch02}
            keyword={keyword}
            count={pointTransactionCount?.fetchPointTransactionsCount ?? 0}
          />
        </>
      )}
      {selectedTab === '구매내역' && (
        <>
          <Table
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
            activePage={selectedPage}
          />
          <Pagination
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            startPage={startPage}
            setStartPage={setStartPage}
            refetchVariables={{
              endDate,
              startDate,
              search: keyword,
            }}
            refetch={refetch03}
            keyword={keyword}
            count={pointTransactionCount?.fetchPointTransactionsCount ?? 0}
          />
        </>
      )}
      {selectedTab === '판매내역' && (
        <>
          <Table
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
            activePage={selectedPage}
          />
          <Pagination
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            startPage={startPage}
            setStartPage={setStartPage}
            refetchVariables={{
              endDate,
              startDate,
              search: keyword,
            }}
            refetch={refetch04}
            keyword={keyword}
            count={pointTransactionCount?.fetchPointTransactionsCount ?? 0}
          />
        </>
      )}
    </S.Wrapper>
  )
}
