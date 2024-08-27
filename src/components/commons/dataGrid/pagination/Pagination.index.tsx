import Image from 'next/image'
import * as S from 'src/components/commons/dataGrid/pagination/Pagination.Styles'
import { Dispatch, SetStateAction, useState, type MouseEvent } from 'react'
import { ApolloQueryResult } from '@apollo/client'
import { IQuery } from 'src/commons/types/generated/types'

interface IPaginationProps {
  selectedPage: number
  setSelectedPage: Dispatch<SetStateAction<number>>
  startDate: string | null
  startPage: number
  setStartPage: Dispatch<SetStateAction<number>>
  endDate: string | null
  refetch: (variables?: Partial<any>) => Promise<ApolloQueryResult<any>>
  keyword: string
  count: number
}

export default function Pagination(props: IPaginationProps): JSX.Element {
  const lastPage = props.count
  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    const page = Number(event.currentTarget.id)
    props.setSelectedPage(page)
    props.refetch({
      page,
      endDate: props.endDate,
      startDate: props.startDate,
      search: props.keyword,
    })
  }

  const onClickPrev = (): void => {
    if (props.startPage === 1) return
    props.setStartPage(props.startPage - 10)
    void props.refetch({
      page: props.startPage - 10,
      endDate: props.endDate,
      startDate: props.startDate,
      search: props.keyword,
    })
    props.setSelectedPage(props.startPage - 10)
  }

  const onClickNext = (): void => {
    if (props.startPage + 10 <= lastPage) {
      props.setStartPage(props.startPage + 10)
      props.setSelectedPage(props.startPage + 10)
      void props.refetch({
        page: props.startPage + 10,
        endDate: props.endDate,
        startDate: props.startDate,
        search: props.keyword,
      })
    }
  }

  return (
    <S.Pagination>
      {!(props.startPage === 1) && (
        <S.PrevButton onClick={onClickPrev}>
          <Image src={'/images/ic_page_prev.png'} width={7.41} height={12} />
        </S.PrevButton>
      )}
      {new Array(10).fill('').map(
        (_, index) =>
          index + props.startPage <= lastPage && (
            <S.PageButton
              key={index}
              id={String(index + props.startPage)}
              onClick={onClickPage}
              data-isactive={index + props.startPage === props.selectedPage}
            >
              {index + props.startPage}
            </S.PageButton>
          )
      )}
      {props.startPage + 10 <= lastPage && (
        <S.NextButton onClick={onClickNext}>
          <Image src={'/images/ic_page_next.png'} width={7.41} height={12} />
        </S.NextButton>
      )}
    </S.Pagination>
  )
}
