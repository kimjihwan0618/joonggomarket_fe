import { toYYYYMMDD, toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import * as S from './BoardList.styles'
import Image from 'next/image'
import 'react-datepicker/dist/react-datepicker.css'
import Pagination from 'src/components/commons/dataGrid/pagination'
import Table from 'src/components/commons/dataGrid/table'
import Searchbars01 from 'src/components/commons/searchbars/01/Searchbars01.container'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useQueryFetchBoards } from 'src/components/commons/hooks/quires/useQueryFetchBoards'
import { useQueryFetchBoardsCount } from 'src/components/commons/hooks/quires/useQueryFetchBoardsCount'
import { useQueryFetchBoardsOfTheBest } from 'src/components/commons/hooks/quires/useQueryFetchBoardsOfTheBest'
import { useSearch } from 'src/components/commons/hooks/custom/useSearch'

export default function BoardListUI(): JSX.Element {
  const { moveToPage } = useMoveToPage()
  const { data: boardsBest } = useQueryFetchBoardsOfTheBest()
  const { data: boards, refetch: refetchBoards } = useQueryFetchBoards()
  const {
    keyword,
    onChangeKeyword,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedPage,
    setSelectedPage,
    startPage,
    setStartPage,
  } = useSearch()
  const { data: boardsCount, refetch: refetchBoardsCount } = useQueryFetchBoardsCount()

  return (
    <S.Wrapper>
      <S.BestBoardsSectionTitle>베스트 게시글</S.BestBoardsSectionTitle>
      <S.BestBoardWrapper>
        {boardsBest?.fetchBoardsOfTheBest.map((el) => (
          <S.BestBoardItem id={el._id} onClick={moveToPage(`/boards/${el._id}`)}>
            <S.ItemImage
              data-src={el.images.length && `https://storage.googleapis.com/${el.images[0]}`}
            />
            <S.BoardInfo>
              <S.Title>{el.title}</S.Title>
              <S.Detail>
                <ul>
                  <S.Writer>{el.writer}</S.Writer>
                  <S.CreatedAt>{toYYYYMMDD(el.createdAt)}</S.CreatedAt>
                </ul>
                <S.ThumbBox>
                  <Image src={'/images/ic_thumb_up.png'} width={24} height={24} />
                  <S.ThumbCount>{el.likeCount}</S.ThumbCount>
                </S.ThumbBox>
              </S.Detail>
            </S.BoardInfo>
          </S.BestBoardItem>
        ))}
      </S.BestBoardWrapper>
      <Searchbars01
        refetchTableData={refetchBoards}
        refetchTableDataCount={refetchBoardsCount}
        setSelectedPage={setSelectedPage}
        setStartPage={setStartPage}
        endDate={endDate}
        startDate={startDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        onChangeKeyword={onChangeKeyword}
      />
      <Table
        rowKey="_id"
        data={boards?.fetchBoards.map((board) => ({
          ...board,
          createdAt: toYYYYMMDDHHMMSS(board.createdAt),
        }))}
        keyword={keyword}
        activePage={selectedPage}
        rowHandler={{ onClickRow: moveToPage, path: '/boards' }}
        columns={[
          { name: '제목', dataKey: 'title', isSearch: true },
          { name: '작성자', dataKey: 'writer', isSearch: false },
          { name: '날짜', dataKey: 'createdAt', isSearch: false },
        ]}
      />
      <S.BottomWrapper>
        <Pagination
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          startPage={startPage}
          setStartPage={setStartPage}
          startDate={startDate}
          endDate={endDate}
          refetch={refetchBoards}
          keyword={keyword}
          count={boardsCount?.fetchBoardsCount}
        />
        <S.BoardAddButton onClick={moveToPage('/boards/new')}>
          <Image src={'/images/ic_create.png'} width={18} height={18} />
          <p>게시글 등록</p>
        </S.BoardAddButton>
      </S.BottomWrapper>
    </S.Wrapper>
  )
}
