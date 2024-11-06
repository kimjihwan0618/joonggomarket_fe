import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  ICreateUseditemInput,
  IMutationCreateUseditemArgs,
} from 'src/commons/types/generated/types'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { IUsedItemWriteForm } from 'src/components/units/useditem/write/UsedItemWrite.schema'
import { FETCH_USED_ITEMS } from '../../quires/usedItem/useQueryFetchUsedItems'
import { useMutationUploadFile } from '../file/useMutationUploadFile'
import { FETCH_USED_ITEMS_BEST } from '../../quires/usedItem/useQueryFetchBoardsOfTheBest'

interface IUseMutationCreateUsedItemProps {
  getValues: UseFormGetValues<IUsedItemWriteForm>
  files: File[]
}

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`

export const useMutationCreateUsedItem = (props: IUseMutationCreateUsedItemProps) => {
  const { moveToPage } = useMoveToPage()
  const { uploadFile } = useMutationUploadFile()
  const [createUsedItemMutation] = useMutation<
    Pick<IMutation, 'createUseditem'>,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM)

  const createUsedItem = async (): Promise<void> => {
    const {
      name,
      remarks,
      contents,
      price,
      tags: strTags,
      address,
      addressDetail,
      zipcode,
      lat,
      lng,
    } = props.getValues()
    try {
      const images = await (
        await Promise.all(props.files.map((el) => uploadFile({ file: el })))
      ).map((res) => res?.data?.uploadFile.url ?? '')
      const useditemAddress = {
        address,
        addressDetail,
        zipcode,
        lat: Number(lat),
        lng: Number(lng),
      }
      const tags = strTags
        .split('#')
        .filter((tag) => tag !== '')
        .map((tag) => `#${tag}`)

      const createUseditemInput: ICreateUseditemInput = {
        name,
        remarks,
        contents,
        price: Number(price),
        tags,
        useditemAddress,
        images,
      }
      const result = await createUsedItemMutation({
        variables: {
          createUseditemInput,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
          {
            query: FETCH_USED_ITEMS_BEST,
          },
        ],
      })
      if (result?.data?.createUseditem?._id) {
        Modal.success({ content: '상품이 등록되었습니다.' })
        moveToPage(`/markets/${result?.data?.createUseditem?._id}`)()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createUsedItem }
}
