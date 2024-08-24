import * as S from 'src/components/commons/dataGrid/table/Table.Styles'

interface ITableProps {
  data: {}[]
  columns: { name: string; dataKey: string; isSearch: boolean }[]
  rowKey: string
  rowHandler: { onClickRow: (path: string) => () => void | (() => void); path: string }
  activePage: number
  keyword: string
}

export default function Table(props: ITableProps): JSX.Element {
  return (
    <S.Table>
      <S.TableHead>
        <S.TableHeadRow>
          <th>번호</th>
          {props.columns.map((column) => (
            <th key={column.name}>{column.name}</th>
          ))}
        </S.TableHeadRow>
      </S.TableHead>
      <S.TableBody>
        {props.data?.map((el, idx) => (
          <S.TableRow
            key={el[props.rowKey]}
            onClick={props.rowHandler.onClickRow(`${props.rowHandler.path}/${el[props.rowKey]}`)}
            id={el[props.rowKey]}
          >
            <td>{(props.activePage - 1) * 10 + idx + 1}</td>
            {props.columns.map((column) =>
              column.isSearch ? (
                <td data-issearch={true} key={el[props.rowKey]}>
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
