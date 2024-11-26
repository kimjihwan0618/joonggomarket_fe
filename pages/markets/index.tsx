import Head from 'next/head'
import UsedItemListUI from 'src/components/units/useditem/list/UsedItemList.index'

export default function UsedItemListPage() {
  return (
    <>
      <Head>
        <title>중고마켓 | 장터</title>
        <meta name="description" content="중고상품을 자유롭게 거래해보세요." />
        <meta property="og:title" content="중고마켓 | 장터" />
        <meta property="og:description" content="중고상품을 자유롭게 거래해보세요." />
      </Head>
      <UsedItemListUI />
    </>
  )
}
