import { ApolloQueryResult, FetchMoreOptions, FetchMoreQueryOptions } from '@apollo/client'
import { debounce } from 'lodash'
import { useCallback, useState } from 'react'

interface IUseFetchMoreScroll {
  fetchData: {}
  fetchListName: string
  fetchMore: (
    options: FetchMoreQueryOptions<any, any> & FetchMoreOptions<any, any>
  ) => Promise<ApolloQueryResult<any>>
  variables: {}
}

export const useFetchMoreScroll = (props: IUseFetchMoreScroll) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const onLoadMore = async (): Promise<void> => {
    if (isLoading || !hasMore) return
    if (props.fetchData === undefined) return

    try {
      setIsLoading(true)
      const result = await props.fetchMore({
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
            setHasMore(false)
            return {
              [props.fetchListName]: [...prevItems],
            }
          }
          return {
            [props.fetchListName]: [...prevItems, ...newItems],
          }
        },
      })
    } catch (error) {
      console.error('Error fetching more items:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const debouncedLoadMore = useCallback(
    debounce(() => {
      onLoadMore()
    }, 300),
    [props.fetchData]
  )

  return {
    onLoadMore: debouncedLoadMore,
    isLoading,
    hasMore,
  }
}
