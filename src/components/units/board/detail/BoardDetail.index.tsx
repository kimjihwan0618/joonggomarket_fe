import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import * as S from './BoardDetail.styles'
import Image from 'next/image'
import { Modal, Tooltip } from 'antd'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import { useMutationDeletaBoard } from 'src/components/commons/hooks/mutations/board/useMutationDeleteBoard'
import { useRouter } from 'next/router'
import { useMutationDisLikeBoard } from 'src/components/commons/hooks/mutations/board/useMutationDisLikeBoard'
import { useMutationLikeBoard } from 'src/components/commons/hooks/mutations/board/useMutationLikeBoard'
import { useQueryFetchBoard } from 'src/components/commons/hooks/quires/board/useQueryFetchBoard'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useTextCopy } from 'src/components/commons/hooks/custom/useTextCopy'
import { useEffect, useState } from 'react'
import Input01 from 'src/components/commons/inputs/01/Input01.index'

export default function BoardDetailUI(): JSX.Element {
  const router = useRouter()
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : ''
  const { moveToPage } = useMoveToPage()
  const [passwordCheck, setPasswordCheck] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { deleteBoard, loading } = useMutationDeletaBoard(boardId, passwordCheck)
  const { data, error } = useQueryFetchBoard(boardId)
  const { disLikeBoard } = useMutationDisLikeBoard(data?.fetchBoard)
  const { likeBoard } = useMutationLikeBoard(data?.fetchBoard)
  const { onCopyLink } = useTextCopy()

  const onClickDeleteOk = async (): Promise<void> => {
    await deleteBoard()
    setPasswordCheck('')
    setIsOpen(false)
  }

  const handlePasswordModal = (): void => {
    event.stopPropagation()
    setIsOpen((prev) => !prev)
    setPasswordCheck('')
  }

  useEffect(() => {
    if (error) {
      Modal.warning({ content: '유효한 게시글이 아닙니다.' })
      moveToPage(`/boards`)()
    }
  }, [error])

  return (
    <>
      {boardId && (
        <>
          <Modal
            title="비밀번호를 입력해주세요."
            open={isOpen}
            onOk={onClickDeleteOk}
            onCancel={() => handlePasswordModal()}
            okButtonProps={{ disabled: passwordCheck === '' || loading }}
            confirmLoading={loading}
            okText="확인"
            cancelText="취소"
          >
            <Input01
              type="password"
              onChange={(e) => setPasswordCheck(e.target.value)}
              value={passwordCheck}
              fullWidth={true}
            />
          </Modal>
          <S.ContentWrapper>
            <S.BoardTitleWrapper>
              <S.WriterInfo>
                <Image unoptimized src={'/images/ic_profile.png'} width={56} height={56} />
                <S.Info>
                  <dt>{data?.fetchBoard?.writer}</dt>
                  <dd>
                    작성일 :{' '}
                    {data?.fetchBoard?.updatedAt && toYYYYMMDDHHMMSS(data?.fetchBoard?.updatedAt)}
                  </dd>
                </S.Info>
              </S.WriterInfo>
              <S.IconInfo>
                <S.LinkIcon onClick={onCopyLink}>
                  <Image unoptimized width={34} height={34} src={'/images/ic_link.png'} />
                </S.LinkIcon>
                {(data?.fetchBoard?.boardAddress?.address ||
                  data?.fetchBoard?.boardAddress?.addressDetail) && (
                  <Tooltip
                    placement="topRight"
                    title={
                      <>
                        {data?.fetchBoard?.boardAddress?.address}
                        <br />
                        {data?.fetchBoard?.boardAddress?.addressDetail}
                      </>
                    }
                  >
                    <S.LocationIcon>
                      <Image unoptimized width={34} height={34} src={'/images/ic_location.png'} />
                    </S.LocationIcon>
                  </Tooltip>
                )}
              </S.IconInfo>
            </S.BoardTitleWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitle>{data?.fetchBoard?.title}</S.ContentsTitle>
              {data?.fetchBoard?.images
                .filter((image) => image !== '')
                .map((imagePath) => (
                  <S.ImageContainer>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_S3_STORAGE}${imagePath}`}
                      width={5}
                      height={5}
                      layout="responsive"
                    />
                  </S.ImageContainer>
                ))}
              <S.ContentsMain>
                <pre>
                  {data?.fetchBoard?.contents.split('\n').map((line, index) => (
                    <>
                      {line}
                      <br />
                    </>
                  ))}
                </pre>
              </S.ContentsMain>
              {data?.fetchBoard?.youtubeUrl && (
                <S.YoutubePlayer url={data?.fetchBoard?.youtubeUrl} />
              )}
              <S.ThumbsWrapper>
                <li>
                  <S.Thumbs data-up={true} onClick={likeBoard}>
                    <dl>
                      <dt>
                        <Image unoptimized src={'/images/ic_thumb_up.png'} width={24} height={24} />
                      </dt>
                      <dd>{data?.fetchBoard?.likeCount}</dd>
                    </dl>
                  </S.Thumbs>
                </li>
                <li>
                  <S.Thumbs data-up={false} onClick={disLikeBoard}>
                    <dl>
                      <dt>
                        <Image
                          unoptimized
                          src={'/images/ic_thumb_down.png'}
                          width={24}
                          height={24}
                        />
                      </dt>
                      <dd>{data?.fetchBoard?.dislikeCount}</dd>
                    </dl>
                  </S.Thumbs>
                </li>
              </S.ThumbsWrapper>
            </S.ContentsWrapper>
          </S.ContentWrapper>
          <S.ButtonWrapper>
            <Button01 onClick={moveToPage('/boards')} name={'목록으로'} width="04" />
            <Button01
              onClick={moveToPage(`/boards/${boardId}/edit`)}
              name={'수정하기'}
              width="04"
            />
            <Button01 onClick={() => setIsOpen(true)} name={'삭제하기'} width="04" />
          </S.ButtonWrapper>
        </>
      )}
    </>
  )
}
