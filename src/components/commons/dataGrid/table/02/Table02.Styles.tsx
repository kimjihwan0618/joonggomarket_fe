import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  max-height: 592.8px;
  overflow-y: auto;
`

export const Table = styled.table`
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
  cursor: pointer;
  td {
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.gray04};
    font-size: 1.6rem;
    span {
      font-size: 1.6rem;
    }
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
