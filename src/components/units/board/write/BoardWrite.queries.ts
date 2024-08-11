import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
    }
  }
`

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

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`
