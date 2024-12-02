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
import { useMutationUploadFile } from '../file/useMutationUploadFile'

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
  const [createUsedItemMutation, { loading }] = useMutation<
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
        update(cache, { data }) {
          const newUseditemRef = cache.writeFragment({
            data: {
              __typename: 'Useditem',
              ...data?.createUseditem,
            },
            fragment: gql`
              fragment NewUseditem on Useditem {
                _id
                name
                remarks
                contents
                price
                tags
                createdAt
              }
            `,
          })

          cache.modify({
            fields: {
              fetchUseditems(existingUseditems = []) {
                return [newUseditemRef, ...existingUseditems]
              },
              fetchUseditemsOfTheBest(existingUseditems = []) {
                if (existingUseditems.length < 4) {
                  return [...existingUseditems, newUseditemRef]
                } else {
                  return existingUseditems
                }
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_USED_ITEMS
        // FETCH_USED_ITEMS_BEST
        // FETCH_USED_ITEMS_I_SOLD
      })
      if (result?.data?.createUseditem?._id) {
        Modal.success({ content: '상품이 등록되었습니다.' })
        moveToPage(`/markets/${result?.data?.createUseditem?._id}`)()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createUsedItem, loading }
}
