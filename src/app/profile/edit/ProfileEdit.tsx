'use client'

import { BackButton, Button, Input, Select } from '@/components'
import { Add, DefaultProfile } from '@/assets'
import Image from 'next/image'
import { UserType } from '@/types'
import { majorOption } from '@/constants'
import { useState } from 'react'
import { getCookie, uploadFile } from '@/utils'
import { editProfile } from '@/services'
import { useRouter } from 'next/navigation'

interface ImgDataType {
  img?: File
  imgString?: string
}

export const ProfileEdit = ({ myData }: { myData: UserType }) => {
  const [generation, setGeneration] = useState<string>(`${myData.generation}`)
  const [major, setMajor] = useState<string>(myData.user_major)
  const [imgData, setImgData] = useState<ImgDataType>({
    imgString: myData.profile_image,
  })

  const router = useRouter()

  const isChanged = () => {
    if (generation !== `${myData.generation}`) return false
    else if (major !== myData.user_major) return false
    else if (imgData.imgString !== myData.profile_image) return false
    else return true
  }

  const editProfileHandler = async () => {
    const editedData = {
      profile_image: myData.profile_image,
      generation: +generation,
      user_major: major,
    }
    const token = getCookie('access_token') || ''
    await editProfile(token, editedData)
    router.replace('/profile')
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        <BackButton />
        <h3 className="text-titleLarge">프로필 수정</h3>
      </div>
      <article className="flex gap-10 items-center">
        <Image
          src={imgData.imgString || DefaultProfile}
          alt="Profile Image"
          width={240}
          height={240}
          priority
          className="size-[120px] rounded-full border border-gray100"
        />
        <input
          type="file"
          className="hidden"
          id="profileImage"
          onChange={(e) =>
            uploadFile(
              e,
              (file) => setImgData((data) => ({ ...data, img: file })),
              (str) => setImgData((data) => ({ ...data, imgString: str })),
            )
          }
        />
        <label
          htmlFor="profileImage"
          className="p-12 rounded-full cursor-pointer border border-gray200 bg-gray100"
        >
          <Add />
        </label>
      </article>
      <article className="flex flex-col gap-10">
        <Input
          label="기수"
          placeholder="기수를 입력해 주세요."
          value={generation}
          change={(e) => setGeneration(e.target.value.slice(0, 2))}
        />
        <Select
          label="전공"
          placeholder="전공 선택"
          value={major}
          options={majorOption}
          change={setMajor}
        />
      </article>
      <Button
        size="large"
        className="w-full"
        onClick={editProfileHandler}
        disabled={isChanged()}
      >
        프로필 수정하기
      </Button>
    </>
  )
}
