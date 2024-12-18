import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  ICreateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
} from 'src/commons/types/generated/types'
import { IBoardWriterForm } from 'src/components/units/board/write/BoardWrite.schema'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useMutationUploadFile } from '../file/useMutationUploadFile'
import { FETCH_BOARDS_COUNT } from '../../quires/board/useQueryFetchBoardsCount'

interface IuseMutationCreateBoardProps {
  getValues: UseFormGetValues<IBoardWriterForm>
  files: File[]
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
  const { uploadFile } = useMutationUploadFile()
  const [createBoardMutation, { loading }] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD)

  const createBoard = async (): Promise<void> => {
    const { addressDetail, writer, password, title, contents, youtubeUrl, address, zipcode } =
      props.getValues()
    try {
      const images = await (
        await Promise.all(props.files.map((el) => uploadFile({ file: el })))
      ).map((res) => res?.data?.uploadFile.url ?? '')
      const boardAddress = {
        address,
        addressDetail,
        zipcode,
      }
      const createBoardInput: ICreateBoardInput = {
        writer,
        password,
        title,
        contents,
        images,
        youtubeUrl,
        boardAddress,
      }
      const result = await createBoardMutation({
        variables: {
          createBoardInput,
        },
        update(cache, { data }) {
          const newBoardRef = cache.writeFragment({
            data: {
              __typename: 'Board',
              ...data?.createBoard,
            },
            fragment: gql`
              fragment NewBoard on Board {
                _id
                title
                contents
                writer
                createdAt
              }
            `,
          })

          cache.modify({
            fields: {
              fetchBoardsCount(existingCount = 0) {
                return existingCount + 1
              },
              fetchBoards(existingBoards = []) {
                if (existingBoards.length < 10) {
                  return [newBoardRef, ...existingBoards]
                }
              },
              fetchBoardsOfTheBest(existingBoards = []) {
                if (existingBoards.length < 4) {
                  return [...existingBoards, newBoardRef]
                } else {
                  return existingBoards
                }
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_BOARDS
        // FETCH_BOARDS_BEST
        // FETCH_BOARDS_COUNT
      })
      if (result?.data?.createBoard?._id) {
        Modal.success({ content: '게시글이 등록되었습니다.' })
        moveToPage(`/boards/${result?.data?.createBoard?._id}`)()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createBoard, loading }
}
