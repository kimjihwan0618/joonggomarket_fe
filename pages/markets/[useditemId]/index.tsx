import UsedItemQuestionListUI from 'src/components/units/useditem/detail/question/list/UsedItemQuestiontList.index'
import UsedItemQuestionWriteUI from 'src/components/units/useditem/detail/question/write/UsedItemQuestionWrite.index'
import UsedItemDetail from 'src/components/units/useditem/detail/UsedItemDetail.index'

export default function UsedItemDetailPage() {
  return (
    <>
      <UsedItemDetail />
      <UsedItemQuestionWriteUI isEdit={false} />
      <UsedItemQuestionListUI />
    </>
  )
}
