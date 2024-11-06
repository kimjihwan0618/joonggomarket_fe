import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationToggleUseditemPickArgs,
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
          refetchQueries: [
            {
              query: FETCH_USED_ITEM,
              variables: { useditemId },
            },
          ],
        })
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { toggleUsedItemPick, loading }
}
