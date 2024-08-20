import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import * as S from './BoardList.styles'
import Image from 'next/image'
import 'react-datepicker/dist/react-datepicker.css'
import { IBoardListUIProps } from './BoardList.types'
import Pagination from 'src/components/commons/dataGrid/pagination'
import Table from 'src/components/commons/dataGrid/table'
import Searchbars01 from 'src/components/commons/searchbars/01/Searchbars01.container'

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.BestBoardsSectionTitle>베스트 게시글</S.BestBoardsSectionTitle>
      <S.BestBoardWrapper>
        <S.BestBoardItem>
          <S.ItemImage
            data-src={
              'https://static.vecteezy.com/system/resources/previews/014/001/155/non_2x/amazing-beach-landscape-super-wide-panoramic-exotic-travel-background-luxury-travel-idyllic-couple-honeymoon-love-destination-sunny-sea-sand-sky-exotic-resort-coast-palm-lagoon-seascape-banner-photo.jpg'
            }
          />
          <S.BoardInfo>
            <S.Title>게시물 제목입니다.</S.Title>
            <S.Detail>
              <ul>
                <S.Writer>노원두</S.Writer>
                <S.CreatedAt>Date:2021.02.18</S.CreatedAt>
              </ul>
              <S.ThumbBox>
                <Image src={'/images/ic_thumb_up.png'} width={24} height={24} />
                <S.ThumbCount>356</S.ThumbCount>
              </S.ThumbBox>
            </S.Detail>
          </S.BoardInfo>
        </S.BestBoardItem>
      </S.BestBoardWrapper>
      <Searchbars01
        refetchTableDatas={props.refetchTableDatas}
        refetchTableDatasCount={props.refetchTableDatasCount}
        setActivePage={props.setActivePage}
        setStartPage={props.setStartPage}
        endDate={props.endDate}
        startDate={props.startDate}
        setEndDate={props.setEndDate}
        setStartDate={props.setStartDate}
        setKeyword={props.setKeyword}
      />
      <Table
        data={props?.boards?.map((board) => ({
          ...board,
          createdAt: toYYYYMMDDHHMMSS(board.createdAt),
        }))}
        keyword={props.keyword}
        rowKey="_id"
        activePage={props.activePage}
        onClickActionCell={props.onClickActionCell}
        columns={[
          { name: '제목', dataKey: 'title', isSearch: true },
          { name: '작성자', dataKey: 'writer', isSearch: false },
          { name: '날짜', dataKey: 'createdAt', isSearch: false },
        ]}
      />
      <S.BottomWrapper>
        <Pagination
          onClickPage={props.onClickPage}
          onClickPrev={props.onClickPrev}
          onClickNext={props.onClickNext}
          activePage={props.activePage}
          startPage={props.startPage}
          lastPage={props.lastPage}
        />
        <S.BoardAddButton onClick={props.onClickAddBoardButton}>
          <Image src={'/images/ic_create.png'} width={18} height={18} />
          <p>게시글 등록</p>
        </S.BoardAddButton>
      </S.BottomWrapper>
    </S.Wrapper>
  )
}
