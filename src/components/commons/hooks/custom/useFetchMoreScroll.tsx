import { ApolloQueryResult, FetchMoreOptions, FetchMoreQueryOptions } from '@apollo/client'

interface IUseFetchMoreScroll {
  fetchData: {}
  fetchListName: string
  fetchMore: (
    options: FetchMoreQueryOptions<any, any> & FetchMoreOptions<any, any>
  ) => Promise<ApolloQueryResult<any>>
  variables: {}
}

export const useFetchMoreScroll = (props: IUseFetchMoreScroll) => {
  const onLoadMore = (): void => {
    console.log(props)
    if (props.fetchData === undefined) return
    props.fetchMore({
      variables: {
        ...{
          page: Math.ceil((props.fetchData?.[props.fetchListName].length ?? 10) / 10 + 1),
        },
        ...props.variables,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const prevItems = prev?.[props.fetchListName] ?? []
        const newItems = fetchMoreResult?.[props.fetchListName] ?? []
        if (!newItems.length) {
          return {
            [props.fetchListName]: [...prevItems],
          }
        }
        return {
          [props.fetchListName]: [...prevItems, ...newItems],
        }
      },
    })
  }

  return {
    onLoadMore,
  }
}
