import { toYYYYMMDD, toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import * as S from './BoardList.styles'
import Image from 'next/image'
import 'react-datepicker/dist/react-datepicker.css'
import Pagination from 'src/components/commons/dataGrid/pagination/01/Pagination01.index'
import Table from 'src/components/commons/dataGrid/table/01/Table01.index'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useQueryFetchBoards } from 'src/components/commons/hooks/quires/board/useQueryFetchBoards'
import { useQueryFetchBoardsCount } from 'src/components/commons/hooks/quires/board/useQueryFetchBoardsCount'
import { useQueryFetchBoardsOfTheBest } from 'src/components/commons/hooks/quires/board/useQueryFetchBoardsOfTheBest'
import { useSearch } from 'src/components/commons/hooks/custom/useSearch'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'
import Searchbars01UI from 'src/components/commons/searchbars/01/Searchbars01.index'

const TABLE_COLUMNS = [
  { name: '제목', dataKey: 'title', isSearch: true },
  { name: '작성자', dataKey: 'writer', isSearch: false },
  { name: '날짜', dataKey: 'createdAt', isSearch: false },
]

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
      <Searchbars01UI
        refetchData={refetchBoards}
        refetchVariables={{ startDate, endDate }}
        refetchDataCount={refetchBoardsCount}
        setSelectedPage={setSelectedPage}
        setStartPage={setStartPage}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        onChangeKeyword={onChangeKeyword}
        dateUsed={true}
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
        columns={TABLE_COLUMNS}
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
          count={boardsCount?.fetchBoardsCount ?? 0}
        />
        <Button01
          onClick={moveToPage('/boards/new')}
          background={theme.colors.main}
          iconSrc={'/images/ic_pencil.png'}
          name="게시글 등록"
        />
      </S.BottomWrapper>
    </S.Wrapper>
  )
}
