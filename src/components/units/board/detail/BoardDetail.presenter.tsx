import { toYYYYMMDDHHMMSS } from 'src/lib/utils/date'
import * as S from './BoardDetail.styles'
import Image from 'next/image'
import { IBoardDetailUIProps } from './BoardDetail.types'
import { Tooltip } from 'antd'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <>
      <S.ContentWrapper>
        <S.BoardTitleWrapper>
          <S.WriterInfo>
            <Image src={'/images/ic_profile.png'} width={56} height={56} />
            <S.Info>
              <dt>{props.board?.writer}</dt>
              <dd>Date : {props.board?.updatedAt && toYYYYMMDDHHMMSS(props.board?.updatedAt)}</dd>
            </S.Info>
          </S.WriterInfo>
          <S.IconInfo>
            <S.LinkIcon onClick={props.onClickCopyLink}>
              <Image width={34} height={34} src={'/images/ic_link.png'} />
            </S.LinkIcon>
            {(props.board?.boardAddress?.address || props.board?.boardAddress?.addressDetail) && (
              <Tooltip
                placement="topRight"
                title={
                  <>
                    {props.board?.boardAddress?.address}
                    <br />
                    {props.board?.boardAddress?.addressDetail}
                  </>
                }
              >
                <S.LocationIcon>
                  <Image width={34} height={34} src={'/images/ic_location.png'} />
                </S.LocationIcon>
              </Tooltip>
            )}
          </S.IconInfo>
        </S.BoardTitleWrapper>
        <S.ContentsWrapper>
          <S.ContentsTitle>{props.board?.title}</S.ContentsTitle>
          {props.board?.images
            .filter((image) => image !== '')
            .map((imagePath) => (
              <S.ImageContainer>
                <Image
                  src={`https://storage.googleapis.com/${imagePath}`}
                  width={5}
                  height={5}
                  layout="responsive"
                />
              </S.ImageContainer>
            ))}
          <S.ContentsMain>
            <p>{props.board?.contents}</p>
          </S.ContentsMain>
          {props.board?.youtubeUrl && <S.YoutubePlayer url={props.board.youtubeUrl} />}
          <S.ThumbsWrapper>
            <li>
              <S.Thumbs data-up={true} onClick={props.onClickThumbs}>
                <dl>
                  <dt>
                    <Image src={'/images/ic_thumb_up.png'} width={24} height={24} />
                  </dt>
                  <dd>{props.board?.likeCount}</dd>
                </dl>
              </S.Thumbs>
            </li>
            <li>
              <S.Thumbs data-up={false} onClick={props.onClickThumbs}>
                <dl>
                  <dt>
                    <Image src={'/images/ic_thumb_down.png'} width={24} height={24} />
                  </dt>
                  <dd>{props.board?.dislikeCount}</dd>
                </dl>
              </S.Thumbs>
            </li>
          </S.ThumbsWrapper>
        </S.ContentsWrapper>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <Button01 onClick={props.onClickBoardsButton} name={'목록으로'} width="04" />
        <Button01 onClick={props.onClickUpdateButton} name={'수정하기'} width="04" />
        <Button01 onClick={props.onClickDeleteButton} name={'삭제하기'} width="04" />
      </S.ButtonWrapper>
    </>
  )
}
