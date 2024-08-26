import { IQuery } from 'src/commons/types/generated/types'

export interface IBoardWriteUIProps {
  isEdit: boolean
  data?: Pick<IQuery, 'fetchBoard'>
}
