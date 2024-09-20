import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IUpdateUseditemInput,
  IMutationUpdateUseditemArgs,
} from 'src/commons/types/generated/types'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useRouter } from 'next/router'
import { IUsedItemWriteForm } from 'src/components/units/useditem/write/UsedItemWrite.schema'
import { FETCH_USED_ITEM } from '../../quires/usedItem/useQueryFetchUsedItem'
import { useMutationUploadFile } from '../file/useMutationUploadFile'

interface IUseMutationUpdateUsedItemProps {
  getValues: UseFormGetValues<IUsedItemWriteForm>
  files: File[]
  fileUrls: string[]
}

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`

export const useMutationUpdateUsedItem = (props: IUseMutationUpdateUsedItemProps) => {
  const router = useRouter()
  const { uploadFile } = useMutationUploadFile()
  const { moveToPage } = useMoveToPage()
  const [updateUsedItemMutation] = useMutation<
    Pick<IMutation, 'updateUseditem'>,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM)

  const updateUsedItem = async (): Promise<void> => {
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
      const imagesResult = await (
        await Promise.all(props.files.map((el) => el instanceof File && uploadFile({ file: el })))
      ).map((res) => res?.data?.uploadFile.url ?? '')
      const images = props.fileUrls.map((el, index) => {
        if (imagesResult[index]) {
          return imagesResult[index]
        } else {
          return el.replace('https://storage.googleapis.com/', '')
        }
      })
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

      const updateUseditemInput: IUpdateUseditemInput = {
        name,
        remarks,
        contents,
        price: Number(price),
        tags,
        useditemAddress,
        images,
      }
      if (typeof router.query.useditemId !== 'string') {
        Modal.error({ content: '시스템에 문제가 있습니다.' })
        return
      }
      const result = await updateUsedItemMutation({
        variables: {
          updateUseditemInput,
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      })
      if (result?.data?.updateUseditem?._id) {
        Modal.success({ content: '상품이 수정되었습니다.' })
        moveToPage(`/markets/${result?.data?.updateUseditem?._id}`)()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { updateUsedItem }
}
