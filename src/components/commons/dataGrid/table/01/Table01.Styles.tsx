import styled from '@emotion/styled'
import { css } from '@emotion/react'
import theme from 'src/commons/styles/theme'

export const Table = styled.table`
  margin: 40px 0 20px;
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  ${theme.media.screen3} {
    table-layout: fixed;
  }
`

export const TableHead = styled.thead`
  font-size: 1.8rem;
  font-weight: 500;
  white-space: nowrap;
  th {
    text-align: center;
  }
  ${theme.media.screen3} {
    th:first-of-type {
      width: 50px;
    }
    th:last-of-type {
      width: 120px;
    }
  }
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  cursor: pointer;
  td {
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.gray04};
    font-size: 1.6rem;
    ${theme.media.screen3} {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }
  }
  td[data-issearch='true'] {
    &:hover {
      text-decoration: 'underline';
      color: ${({ theme }) => theme.colors.main};
    }
  }

  height: 52px;
  &:hover {
    background: ${({ theme }) => theme.colors.gray06};
  }
`
export const TableHeadRow = styled.tr`
  td {
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.gray04};
    font-size: 1.6rem;
  }
  td[data-issearch='true'] {
    &:hover {
      text-decoration: 'underline';
      color: ${({ theme }) => theme.colors.main};
    }
  }
  th {
    text-align: center;
  }
  height: 52px;
`
