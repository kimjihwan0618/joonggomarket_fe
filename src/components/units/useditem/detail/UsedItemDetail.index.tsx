import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import * as S from './UsedItemDetail.styles'
import Image from 'next/image'
import { Modal, Tooltip } from 'antd'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import { useRouter } from 'next/router'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useQueryFetchUsedItem } from 'src/components/commons/hooks/quires/usedItem/useQueryFetchUsedItem'
import { useTextCopy } from 'src/components/commons/hooks/custom/useTextCopy'
import theme from 'src/commons/styles/theme'

export default function UsedItemDetailUI(): JSX.Element {
  const router = useRouter()
  const useditemId = typeof router.query.useditemId === 'string' ? router.query.useditemId : ''
  const { moveToPage } = useMoveToPage()
  const { data } = useQueryFetchUsedItem(useditemId)
  const { onCopyLink } = useTextCopy()

  return (
    <>
      {useditemId && (
        <>
          <S.ContentWrapper>
            <S.UsedItemTitleWrapper>
              <S.WriterInfo>
                <Image
                  src={
                    data?.fetchUseditem?.seller.picture !== '' &&
                    data?.fetchUseditem?.seller.picture?.includes('.')
                      ? `https://storage.googleapis.com/${data?.fetchUseditem?.seller.picture}`
                      : '/images/ic_profile2.png'
                  }
                  width={56}
                  height={56}
                />
                <S.Info>
                  <dt>{data?.fetchUseditem?.seller.name}</dt>
                  <dd>
                    Date :{' '}
                    {data?.fetchUseditem?.updatedAt &&
                      toYYYYMMDDHHMMSS(data?.fetchUseditem?.updatedAt)}
                  </dd>
                </S.Info>
              </S.WriterInfo>
              <S.IconInfo>
                <S.LinkIcon onClick={onCopyLink}>
                  <Image width={34} height={34} src={'/images/ic_link.png'} />
                </S.LinkIcon>
                {(data?.fetchUseditem?.useditemAddress?.address ||
                  data?.fetchUseditem?.useditemAddress?.addressDetail) && (
                  <Tooltip
                    placement="topRight"
                    title={
                      <>
                        {data?.fetchUseditem?.useditemAddress?.address}
                        <br />
                        {data?.fetchUseditem?.useditemAddress?.addressDetail}
                      </>
                    }
                  >
                    <S.LocationIcon>
                      <Image width={34} height={34} src={'/images/ic_location.png'} />
                    </S.LocationIcon>
                  </Tooltip>
                )}
              </S.IconInfo>
            </S.UsedItemTitleWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitleBar>
                <S.TextBox>
                  <S.Remarks>{data?.fetchUseditem?.remarks}</S.Remarks>
                  <S.Name>{data?.fetchUseditem?.name}</S.Name>
                </S.TextBox>
                <S.PickItem>
                  <Image src={'/images/ic_favorite.png'} width={36} height={36} />
                  <S.PickCount>{data?.fetchUseditem?.pickedCount}</S.PickCount>
                </S.PickItem>
              </S.ContentsTitleBar>
              <S.Price>
                {new Intl.NumberFormat('en-US').format(data?.fetchUseditem?.price)}원
              </S.Price>
              <S.ContentsMain>
                <p>{data?.fetchUseditem?.contents}</p>
              </S.ContentsMain>
              <S.Tags>{data?.fetchUseditem?.tags}</S.Tags>
            </S.ContentsWrapper>
          </S.ContentWrapper>
          <S.ButtonWrapper>
            <Button01
              background={theme.colors.gray04}
              onClick={moveToPage('/markets')}
              name={'목록으로'}
              width="04"
            />
            <Button01
              onClick={moveToPage(`/markets/${useditemId}/edit`)}
              name={'수정하기'}
              width="04"
              background={theme.colors.main}
            />
          </S.ButtonWrapper>
        </>
      )}
    </>
  )
}
