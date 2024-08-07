import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Table = styled.table`
  margin: 40px 0 54px;
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`

export const TableHead = styled.thead`
  font-size: 1.8rem;
  font-weight: 500;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  td {
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.gray04};
    font-size: 1.6rem;
  }
  td[data-isClick='true'] {
    cursor: pointer;
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
