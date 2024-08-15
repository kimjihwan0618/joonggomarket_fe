import * as S from 'src/components/commons/dataGrid/table/Table.Styles'
import type { MouseEvent } from 'react'

interface ITableProps {
  data: {}[]
  columns: { name: string; dataKey: string; isSearch: boolean }[]
  rowKey: string
  onClickActionCell: (event: MouseEvent<HTMLTableCellElement>) => void
  activePage: number
  keyword: string
}

export default function Table(props: ITableProps): JSX.Element {
  return (
    <S.Table>
      <S.TableHead>
        <S.TableRow>
          <th>번호</th>
          {props.columns.map((column) => (
            <th key={column.name}>{column.name}</th>
          ))}
        </S.TableRow>
      </S.TableHead>
      <S.TableBody>
        {props.data?.map((el, idx) => (
          <S.TableRow key={el[props.rowKey]}>
            <td>{(props.activePage - 1) * 10 + idx + 1}</td>
            {props.columns.map((column) =>
              column.isSearch ? (
                <td
                  data-isSearch={true}
                  key={el[props.rowKey]}
                  id={el[props.rowKey]}
                  onClick={props.onClickActionCell}
                >
                  {el[column.dataKey]
                    .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
                    .split('!@#')
                    .map((el2) => (
                      <span style={{ color: el2 === props.keyword ? 'red' : 'black' }}>{el2}</span>
                    ))}
                </td>
              ) : (
                <td>{el[column.dataKey]}</td>
              )
            )}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  )
}
