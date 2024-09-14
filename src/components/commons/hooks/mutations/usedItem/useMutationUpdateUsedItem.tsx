import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IUpdateBoardInput,
  IMutation,
  IMutationUpdateBoardArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from 'src/commons/types/generated/types'
import { IBoardWriterForm } from 'src/components/units/board/write/BoardWrite.schema'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from 'src/components/commons/hooks/quires/board/useQueryFetchBoard'
import { FETCH_USED_ITEM } from '../../quires/usedItem/useQueryFetchUsedItem'

interface IUseMutationUpdateBoardProps {
  getValues: UseFormGetValues<IBoardWriterForm>
  fileUrls: string[]
}

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $boardId: ID!, $password: String!) {
    updateBoard(updateBoardInput: $updateBoardInput, boardId: $boardId, password: $password) {
      _id
      title
      contents
      writer
    }
  }
`

export const useMutationUpdateUsedItem = (props: IUseMutationUpdateBoardProps) => {
  const router = useRouter()
  const { moveToPage } = useMoveToPage()
  const [updateUsedItemMutation] = useMutation<
    Pick<IMutation, 'updateBoard'>,
    IMutationUpdateUseditemArgs
  >(UPDATE_BOARD)

  const updateUsedItem = async (): Promise<void> => {
    const { addressDetail, title, contents, address, zipcode } = props.getValues()
    try {
      const useditemAddress = {
        address,
        addressDetail,
        zipcode,
      }
      const updateUseditemInput: IUpdateUseditemInput = {
        name,
        remarks,
        price,
        tags,
        contents,
        useditemAddress,
        images: props.fileUrls,
      }
      if (typeof router.query.useditemId !== 'string') {
        Modal.error({ content: '시스템에 문제가 있습니다.' })
        return
      }
      const result = await updateUsedItemMutation({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      })
      if (result?.data?.updateBoard?._id) {
        Modal.success({ content: '상품이 수정되었습니다.' })
        moveToPage(`/markets/${result?.data?.updateBoard?._id}`)()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { updateUsedItem }
}
