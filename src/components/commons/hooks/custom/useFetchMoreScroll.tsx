import { ApolloQueryResult, FetchMoreOptions, FetchMoreQueryOptions } from '@apollo/client'
import { useState } from 'react'

interface IUseFetchMoreScroll {
  fetchData: {}
  fetchListName: string
  fetchMore: (
    options: FetchMoreQueryOptions<any, any> & FetchMoreOptions<any, any>
  ) => Promise<ApolloQueryResult<any>>
  variables: {}
}

export const useFetchMoreScroll = (props: IUseFetchMoreScroll) => {
  const [fetchedPages, setFetchedPages] = useState<Set<number>>(new Set())

  const onLoadMore = (): void => {
    if (props.fetchData === undefined) return

    const currentPage = Math.ceil((props.fetchData?.[props.fetchListName].length ?? 10) / 10 + 1)

    if (fetchedPages.has(currentPage)) {
      return
    }

    setFetchedPages((prev) => new Set(prev).add(currentPage))

    props.fetchMore({
      variables: {
        ...{
          page: currentPage,
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

  const resetPageCache = (): void => {
    setFetchedPages(new Set())
  }

  return {
    onLoadMore,
    resetPageCache,
  }
}
