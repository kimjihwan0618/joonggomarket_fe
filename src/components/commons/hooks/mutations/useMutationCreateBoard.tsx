import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  ICreateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
} from 'src/commons/types/generated/types'
import { IBoardWriterForm } from 'src/components/units/board/write/BoardWrite.schema'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from '../custom/useMoveToPage'
import { Address } from 'react-daum-postcode'
import { FETCH_BOARDS } from '../quires/useQueryFetchBoards'

interface IuseMutationCreateBoardProps {
  getValues: UseFormGetValues<IBoardWriterForm>
  fileUrls: string[]
  address: Address['address']
  zonecode: Address['zonecode']
}

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
    }
  }
`
export const useMutationCreateBoard = (props: IuseMutationCreateBoardProps) => {
  const { moveToPage } = useMoveToPage()
  const [createBoardMutation] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD)

  const createBoard = async (): Promise<void> => {
    const { addressDetail, writer, password, title, contents, youtubeUrl } = props.getValues()
    try {
      const boardAddress = {
        address: props.address,
        addressDetail,
        zipcode: props.zonecode,
      }
      const createBoardInput: ICreateBoardInput = {
        writer,
        password,
        title,
        contents,
        images: props.fileUrls,
        youtubeUrl,
        boardAddress,
      }
      const result = await createBoardMutation({
        variables: {
          createBoardInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      })
      if (result?.data?.createBoard?._id) {
        Modal.success({ content: '게시글이 등록되었습니다.' })
        moveToPage(`/boards/${result?.data?.createBoard?._id}`)()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createBoard }
}
