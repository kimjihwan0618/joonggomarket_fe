import Image from 'next/image'
import * as S from 'src/components/commons/table/pagination/Pagination.Styles'
import type { MouseEvent } from 'react'

interface IPaginationProps {
  startPage: number
  lastPage: number
  activePage: number
  onClickPrev: (event: MouseEvent<HTMLButtonElement>) => void
  onClickNext: (event: MouseEvent<HTMLButtonElement>) => void
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function Pagination(props: IPaginationProps): JSX.Element {
  return (
    <S.Pagination>
      {!(props.startPage === 1) && (
        <S.PrevButton onClick={props.onClickPrev}>
          <Image src={'/images/ic_page_prev.png'} width={7.41} height={12} />
        </S.PrevButton>
      )}
      {new Array(10).fill('').map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.PageButton
              key={index}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              data-isActive={index + props.startPage === props.activePage}
            >
              {index + props.startPage}
            </S.PageButton>
          )
      )}
      {props.startPage + 10 <= props.lastPage && (
        <S.NextButton onClick={props.onClickNext}>
          <Image src={'/images/ic_page_next.png'} width={7.41} height={12} />
        </S.NextButton>
      )}
    </S.Pagination>
  )
}
