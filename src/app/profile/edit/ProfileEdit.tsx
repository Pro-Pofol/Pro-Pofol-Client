'use client'

import { BackButton, Button, Input, Select } from '@/components'
import { Add, DefaultProfile } from '@/assets'
import Image from 'next/image'
import { UserType } from '@/types'
import { majorOption } from '@/constants'
import { useState } from 'react'
import { uploadFile } from '@/utils'

interface ImgDataType {
  img?: File
  imgString?: string
}

export const ProfileEdit = ({ myData }: { myData: UserType }) => {
  const [generation, setGeneration] = useState<string>(`${myData.generation}`)
  const [major, setMajor] = useState<string>(myData.major)
  const [imgData, setImgData] = useState<ImgDataType>({
    imgString: myData.profile_image,
  })

  const editProfile = () => {}

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
      <Button size="large" className="w-full" onClick={editProfile}>
        프로필 수정하기
      </Button>
    </>
  )
}
