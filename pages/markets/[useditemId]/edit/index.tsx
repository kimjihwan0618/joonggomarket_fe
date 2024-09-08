import { FETCH_USED_ITEM } from 'src/components/commons/hooks/quires/usedItem/useQueryFetchUsedItem'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { IQuery, IQueryFetchUseditemArgs } from 'src/commons/types/generated/types'
import UsedItemWriteUI from 'src/components/units/useditem/write/UsedItemWrite.index'

export default function UsedItemEditPage() {
  const router = useRouter()
  const useditemId = typeof router.query.useditemId === 'string' ? router.query.useditemId : ''
  const { data } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(
    FETCH_USED_ITEM,
    {
      variables: { useditemId },
      skip: !router.query.useditemId,
    }
  )
  if (!useditemId) return <></>
  return <UsedItemWriteUI isEdit={true} data={data} />
}
