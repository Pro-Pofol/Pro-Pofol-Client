'use client'

import { Portfolio } from '@/assets'
import { BaseModal } from './BaseModal'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Button, Input } from '..'
import { UploadTipType } from '@/types'
import { getCookie, toast } from '@/utils'
import { useRouter } from 'next/navigation'
import { fixTip } from '@/services'

interface TipModalType {
  click: Dispatch<SetStateAction<boolean>>
  change?: Dispatch<SetStateAction<string>>
  title: string
  content: string
  id: number
}

export const TipFixModal = ({
  click,
  change = () => {},
  title,
  content,
  id,
}: TipModalType) => {
  const route = useRouter()
  const [data, setData] = useState<UploadTipType>({
    title: title,
    content: content,
  })

  const changeData = useCallback((name: string, value: string): void => {
    setData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const submitTip = useCallback(async () => {
    const token = getCookie('access_token')
    if (!token) {
      toast.error('토큰이 없습니다!')
      return
    }

    if (!data.title.length || data.title.length > 55) {
      toast.error('제목의 길이는 1부터 55사이여야 합니다.')
      return
    }

    if (!data.content.length) {
      toast.error('팁 내용이 없을 수 없습니다.')
      return
    }

    fixTip(id, data.title, data.content)
      .then(() => {
        toast.success('성공적으로 수정되었습니다!')
        change('')
        click(false)
        route.push(`/tip/${id}`)
      })
      .catch(() => {
        toast.error('업로드에 실패했습니다.')
      })
  }, [data])

  return (
    <BaseModal
      title="지원서 팁 수정"
      subTitle="나만의 지원서 팁을 수정해 보세요."
      icon={<Portfolio size={28} />}
      click={() => {
        change('')
        click(false)
      }}
      className="w-[640px]"
    >
      {/* 제목 입력 */}
      <Input
        label="제목"
        placeholder="팁 제목을 입력해 주세요."
        value={data.title}
        change={(e) => changeData('title', e.currentTarget.value)}
        err={data.title.length > 55}
      />
      {/* 내용 입력 */}
      <Input
        label="내용"
        placeholder="공유하실 팁 내용을 입력해 주세요."
        value={data.content}
        change={(e) => changeData('content', e.currentTarget.value)}
        isArea
      />
      {/* 자료 공유 버튼 */}
      <Button kind="primary" className="ml-auto" onClick={submitTip}>
        팁 수정하기
      </Button>
    </BaseModal>
  )
}
