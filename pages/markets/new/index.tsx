import { useAuth } from 'src/components/commons/hooks/custom/useAuth'
import UsedItemWriteUI from 'src/components/units/useditem/write/UsedItemWrite.index'

export default function BoardAddPage() {
  useAuth()
  return <UsedItemWriteUI isEdit={false} />
}
