'use client'

import { useEffect, useState } from 'react'
import { Bag, DefaultProfile, GradientImg, User } from '@/assets'
import { ApplicationBox, Button, TipBox } from '@/components'
import { applicationData, tipData } from '@/constants'
import { getUser, userFollow } from '@/services'
import Image from 'next/image'
import { UserType } from '@/types'

export default function AnotherProfilePage({
  params,
}: {
  params: { id: number }
}) {
  const [userData, setUserData] = useState<UserType>()
  const [follow, setFollow] = useState<boolean>(false)
  console.log(follow)

  const getData = async () => {
    const user: UserType = await getUser(String(params.id))
    setUserData(user)
  }

  const HandleFollow = async () => {
    if (userData) {
      const res = await userFollow(userData?.oauth_id)
      console.log(res)
      setFollow(true)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getData()
    }
    fetchData()
  }, [])

  return (
    <main className="flex flex-col items-center">
      <div className="flex justify-center h-[180px] w-full relative">
        <Image
          src={GradientImg}
          alt="Profile Banner"
          width={1920}
          height={180}
          className="w-full h-full object-cover border-b-2 border-gray100"
          priority
        />
        <Image
          src={userData?.profile_image || DefaultProfile}
          alt="User Profile"
          width={240}
          height={240}
          className="size-[120px] absolute -bottom-[60px] rounded-full border border-gray100"
          priority
        />
      </div>
      <section className="flex flex-col items-center gap-10 p-[60px_40px_120px] sm:px-6 max-w-[880px] w-full">
        <div className="flex flex-col items-center gap-1 py-6">
          <p className="text-titleMedium">{userData?.name}</p>
          <p className="text-bodySmall text-gray600">팔로잉 0 | 팔로워 0</p>
        </div>
        <div className="flex gap-3">
          {follow ? (
            <Button kind="blue" size="small" onClick={HandleFollow}>
              팔로잉
            </Button>
          ) : (
            <Button kind="gray" size="small" onClick={HandleFollow}>
              팔로우
            </Button>
          )}
        </div>
        <article className="flex flex-col gap-6 w-full">
          <h5 className="text-titleSmall">기본 정보</h5>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl border border-blue100 bg-blue50">
                <User size={28} className="text-blue500" />
              </div>
              <div className="flex flex-col items-center gap-[2px]">
                <p className="text-bodySmall">기수</p>
                <p className="text-labelMedium text-gray600">
                  {userData?.generation}기
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl border border-blue100 bg-blue50">
                <Bag size={28} className="text-blue500" />
              </div>
              <div className="flex flex-col items-center gap-[2px]">
                <p className="text-bodySmall">전공</p>
                <p className="text-labelMedium text-gray600">
                  {userData?.major}
                </p>
              </div>
            </div>
          </div>
        </article>
        <div className="w-full h-[1px] bg-gray200"></div>
        <article className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-titleSmall">공유한 지원서 자료</h5>
          </div>
          {/* <div className="grid gap-3 grid-cols-2 sm:grid-cols-1">
            {applicationData.map((value, index) => (
              <ApplicationBox key={index} {...value} />
            ))}
          </div> */}
          <div className="flex justify-center items-center h-[120px]">
            <p className="text-bodyLarge text-gray500">
              아직 공유한 지원서가 없어요.
            </p>
          </div>
        </article>
        <div className="w-full h-[1px] bg-gray200"></div>
        <article className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-titleSmall">공유한 지원서 팁</h5>
          </div>
          {/* <div className="grid gap-3 grid-cols-2 sm:grid-cols-1">
            {tipData.map((value, index) => (
              <TipBox key={index} {...value} />
            ))}
          </div> */}
          <div className="flex justify-center items-center h-[120px]">
            <p className="text-bodyLarge text-gray500">
              아직 공유한 지원서 팁이 없어요.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}
