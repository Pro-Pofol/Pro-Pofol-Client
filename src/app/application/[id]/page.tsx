'use client'

import { Arrow, Bag, Delete, Download, FileUpload, Linking, More } from '@/assets'
import { ApplicationDeleteModal } from '@/components/modal/ApplicationDelete'
import { getApplicationDetail, getMe, getUser } from '@/services'
import { ApplicationType, UserType } from '@/types'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Detail({ params }: { params: { id: number } }) {
  const [open, setOpen] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [detailData, setDetailData] = useState<ApplicationType>()
  const [userData, setUserData] = useState<UserType>()
  const [myData, setMyData] = useState<UserType>()
  const [fileLink, setFileLink] = useState<string>('')
  const [fileData, setFileData] = useState<File | null>(null)
  const [embedReady, setEmbedReady] = useState<boolean>(false)
  const route = useRouter()

  const getData = async () => {
    const data: ApplicationType = await getApplicationDetail(params.id)
    const user: UserType = await getUser(data.writer_id)
    setUserData(user)
    setDetailData(data)
    if (data.link?.split('/')[2].match('s3.ap-northeast-2.amazonaws.com')) {
      axios.get(data.link || '', {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'application/pdf',
          Accept: 'application/pdf',
        },
      }).then(res => {
        const blobData = new Blob([res.data], { type: 'application/pdf' })
        const Link = window.URL.createObjectURL(blobData)

        setEmbedReady(true)
        setFileLink(Link)
        setFileData(
          new File([blobData],
            `${Link.split('/').at(-1)}.pdf`
            || `${data.major}_${data.post_type}_${data.id}.pdf`,
            { type: blobData.type }
          )
        )
      })
    } else {
      setEmbedReady(true)
    }
    route.refresh()
  }

  const MyData = async () => {
    const my = await getMe()
    setMyData(my)
  }

  const DateFormat = () => {
    if (detailData?.created_at) {
      const DateObj = new Date(detailData.created_at)

      const year = String(DateObj.getFullYear())
      let month = String(DateObj.getMonth() + 1)
      let day = String(DateObj.getDate())
      let hour = String(DateObj.getHours())
      let minute = String(DateObj.getMinutes())

      month = Number(month) >= 10 ? month : '0' + month
      day = Number(day) >= 10 ? day : '0' + day
      hour = Number(hour) >= 10 ? hour : '0' + hour
      minute = Number(minute) >= 10 ? minute : '0' + minute
      return year + '.' + month + '.' + day + '.' + ' ' + hour + ':' + minute
    }
  }

  const fileSizeToString = useCallback((size: number) => {
    if (size < 1000) return `${size}B`
    if (size < 1000000) return `${(size / 1000).toFixed(1)}KB`
    if (size < 1000000000) return `${(size / 1000000).toFixed(1)}MB`
    return `1GB+`
  }, [])

  useEffect(() => {
    getData()
    MyData()
  }, [])

  return (
    <>
      {modal && (
        <ApplicationDeleteModal postId={detailData?.id} click={setModal} />
      )}
      <section className="w-full flex justify-center">
        <article className="flex flex-col w-[50%] min-w-[600px] mt-16 gap-10">
          <div className="flex justify-between items-center">
            <div className="p-2 border border-gray200 rounded-lg cursor-pointer" onClick={() => route.back()}>
              <Arrow direction="left" />
            </div>
            {userData?.oauth_id === myData?.oauth_id && (
              <div
                className="cursor-pointer relative"
                onClick={() => setOpen(!open)}
              >
                <More />
                {open && (
                  <button
                    onClick={() => setModal(!modal)}
                    className="absolute top-8 right-1 flex items-center text-labelMedium gap-2 p-3 rounded-xl w-[160px] border border-gray200 bg-gray50"
                  >
                    <Delete className="text-gray800" />
                    자료 삭제하기
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="px-4 py-[6px] text-attention bg-attentionBackground text-bodySmall rounded-full">
                {detailData?.post_type === 'Portfolio'
                  ? '포트폴리오'
                  : detailData?.post_type === 'Resume'
                    ? '이력서'
                    : detailData?.post_type === 'PersonalStatement'
                      ? '자기소개서'
                      : ''}
              </span>
            </div>
            <h1 className="text-headlineSmall text-black">
              {detailData?.title}
            </h1>
            <div className="flex items-center gap-2 text-gray600">
              <p
                onClick={() =>
                  route.push(`/profile/${detailData?.writer_id}`)
                }
                className="cursor-pointer"
              >
                {userData?.name}
              </p>
              <p>﹒</p>
              <p>{DateFormat()}</p>
            </div>
          </div>
          <div className="bg-gray200 h-[1px]" />
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue50 border border-blue100 rounded-xl">
                <Bag className="text-blue500" size={28} />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-bodySmall text-black">자료분야</p>
                <div className="flex items-center gap-2">
                  <p className="text-labelMedium text-gray600">
                    {detailData?.major}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue50 border border-blue100 rounded-xl">
                <FileUpload className="text-blue500" size={28} />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-bodySmall text-black">자료형식</p>
                <div className="flex items-center gap-2">
                  <p className="text-labelMedium text-gray600">{fileLink ? 'PDF' : 'Web Link'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray200 h-[1px]" />
          <div className="flex flex-col gap-4 pb-[120px]">
            <p className="text-titleSmall text-gray950">자료 미리보기</p>
            {
              embedReady &&
              <embed className="w-full h-[100vh]" src={fileLink || detailData?.link} />
            }
            {detailData?.link && (
              <Link
                href={fileLink || detailData?.link}
                target="_blank"
                className="flex itmes-center justify-between p-4 border border-gray200 bg-gray50 rounded-xl cursor-pointer"
                download={fileData?.name}
              >
                <div className="flex items-center gap-3 break-keep">
                  <p className="text-bodyMedium text-gray950">
                    {fileLink ? '자료 파일 다운로드' : '자료링크 이동'}
                  </p>
                  <p className={`${fileLink ? 'w-auto' : 'w-[400px] truncate'} text-labelMedium text-gray600`}>
                    {embedReady && ((fileData) ? `${fileData.name} (${fileSizeToString(fileData.size)})` : detailData.link)}
                  </p>
                </div>
                {
                  fileLink ?
                    <Download className="text-gray800" />
                    :
                    <Linking className="text-gray800" />
                }
              </Link>
            )}
          </div>
        </article>
      </section>
    </>
  )
}
