import { ApolloQueryResult, FetchResult, gql, useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IBoard,
  ICreateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
} from 'src/commons/types/generated/types'
import { IBoardWriterForm } from 'src/components/units/board/write/BoardWrite.schema'

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
    }
  }
`
export const useMutationCreateBoard = (getValues) => {
  const [createBoardMutation] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD)

  const createBoard = async (): Promise<FetchResult<Pick<IMutation, 'createBoard'>>> => {
    const {
      address,
      addressDetail,
      zipcode,
      writer,
      password,
      title,
      contents,
      images,
      youtubeUrl,
    } = getValues()
    try {
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
      })
      return result
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createBoard }
}
