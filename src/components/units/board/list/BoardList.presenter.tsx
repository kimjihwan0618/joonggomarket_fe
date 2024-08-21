import { toYYYYMMDD, toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
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
        {props.boardsBest?.map((el) => (
          <S.BestBoardItem id={el._id} onClick={props.onClickBoard}>
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
        onClickRow={props.onClickBoard}
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
