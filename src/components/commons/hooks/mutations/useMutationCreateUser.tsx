import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from 'src/commons/types/generated/types'
import { IBoardWriterForm } from 'src/components/units/board/write/BoardWrite.schema'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from '../custom/useMoveToPage'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { accessTokenState, vistedPageState } from 'src/commons/stores'

interface IUseMutationCreateUserProps {
  getValues: UseFormGetValues<IBoardWriterForm>
}

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      name
    }
  }
`

export const useMutationCreateUser = (props) => {
  const router = useRouter()
  const { moveToPage } = useMoveToPage()
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [vistedPage, setVisitedPage] = useRecoilState(vistedPageState)
  const [createUserMutation] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(
    CREATE_USER
  )

  const createUser = async (): Promise<void> => {
    const { email, password, name } = props.getValues()
    try {
      const result = await createUserMutation({
        variables: {
          createUserInput: {
            email,
            name,
            password,
          },
        },
      })
      Modal.success({ content: '회원가입이 완료되었습니다.' })
      moveToPage('/login')()
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createUser }
}
