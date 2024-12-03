import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from 'src/commons/types/generated/types'
import { FETCH_USED_ITEM } from '../../quires/usedItem/useQueryFetchUsedItem'

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`
export const useMutationToggleUsedItemPick = (
  useditemId: IQueryFetchUseditemQuestionsArgs['useditemId']
) => {
  const [toggleUsedItemPickMutation, { loading }] = useMutation<
    Pick<IMutation, 'toggleUseditemPick'>,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK)

  const toggleUsedItemPick = async (): Promise<void> => {
    try {
      if (!loading) {
        const result = await toggleUsedItemPickMutation({
          variables: {
            useditemId,
          },
          update(cache, { data }) {
            const pickedCount = data.toggleUseditemPick
            const existingData = cache.readQuery<Pick<IQuery, 'fetchUseditem'>>({
              query: FETCH_USED_ITEM,
              variables: { useditemId },
            })
            cache.writeQuery({
              query: FETCH_USED_ITEM,
              data: {
                fetchUseditem: {
                  ...existingData.fetchUseditem,
                  pickedCount,
                },
              },
            })
          },
          // 리패치 제거
          // FETCH_USED_ITEM
        })
      }
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message })
    }
  }

  return { toggleUsedItemPick, loading }
}
