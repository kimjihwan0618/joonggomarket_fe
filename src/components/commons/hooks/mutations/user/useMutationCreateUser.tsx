import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IMutation, IMutationCreateUserArgs } from 'src/commons/types/generated/types'
import type { UseFormGetValues } from 'react-hook-form'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useRouter } from 'next/router'
import { ICreateUserForm } from 'src/components/units/auth/signup/Signup.schema'

interface IUseMutationCreateUserProps {
  getValues: UseFormGetValues<ICreateUserForm>
}

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      name
    }
  }
`

export const useMutationCreateUser = (props: IUseMutationCreateUserProps) => {
  const router = useRouter()
  const { moveToPage } = useMoveToPage()
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
