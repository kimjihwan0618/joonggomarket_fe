import InfiniteScroll from 'react-infinite-scroller'
import * as S from 'src/components/commons/dataGrid/table/02/Table02.Styles'

interface ITableProps {
  data: {}[]
  columns: { name: string; dataKey: string; isSearch: boolean }[]
  rowKey: string
  rowHandler?: { onClickRow: (path: string) => () => void | (() => void); path: string }
  keyword: string
  onLoadMore: () => void
}

export default function Table02UI(props: ITableProps): JSX.Element {
  return (
    <S.Wrapper>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={false}>
        <S.Table>
          <S.TableHead>
            <S.TableHeadRow>
              {props.columns.map((column) => (
                <th key={column.name}>{column.name}</th>
              ))}
            </S.TableHeadRow>
          </S.TableHead>
          <S.TableBody>
            {props.data?.map((el, idx) => (
              <S.TableRow key={el[props.rowKey]} id={el[props.rowKey]}>
                {props.columns.map((column) =>
                  column.isSearch ? (
                    <td data-issearch={true} key={el[props.rowKey]}>
                      {el[column.dataKey]
                        .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
                        .split('!@#')
                        .map((el2: string) => (
                          <span style={{ color: el2 === props.keyword ? 'red' : 'black' }}>
                            {el2}
                          </span>
                        ))}
                    </td>
                  ) : column.dataKey.includes('.') ? (
                    <td>{column.dataKey.split('.').reduce((acc, key) => acc?.[key], el)}</td>
                  ) : (
                    <td>{el[column.dataKey]}</td>
                  )
                )}
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.Table>
      </InfiniteScroll>
    </S.Wrapper>
  )
}
