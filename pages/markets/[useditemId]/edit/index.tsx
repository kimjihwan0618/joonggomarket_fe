import UsedItemWriteUI from 'src/components/units/useditem/write/UsedItemWrite.index'
import { useAuth } from 'src/components/commons/hooks/custom/useAuth'

export default function UsedItemEditPage() {
  useAuth()
  return <UsedItemWriteUI isEdit={true} />
}
