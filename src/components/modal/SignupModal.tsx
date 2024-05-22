'use client'

import { Close } from '@/assets'
import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Select } from '../Select'
import Link from 'next/link'
import { AuthSignupType } from '@/types'
import { authSignup } from '@/services'
import { getCookie } from '@/utils'

const option = [
  { value: '1', name: 'Backend' },
  { value: '2', name: 'Frontend' },
  { value: '3', name: 'iOS' },
  { value: '4', name: 'Android' },
  { value: '5', name: 'DevOps' },
  { value: '6', name: 'Design' },
  { value: '7', name: 'AI' },
  { value: '8', name: 'CrossPlatform' },
  { value: '9', name: 'Blockchain' },
]

export const SignupModal = ({ kind }: { kind: string }) => {
  const [major, setMajor] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [generation, setGeneration] = useState<string>('')

  const registerUser = async () => {
    const signupJson: AuthSignupType = {
      generation: +generation,
      name: name,
      major: major,
    }
    const access_token = getCookie('Access_Token')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const token = await authSignup(kind, access_token, signupJson)
    console.log(token)
  }

  return (
    <section className="w-screen h-screen absolute bg-modalBackground backdrop-blur-sm top-0 z-40">
      <article className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col p-10 rounded-3xl bg-white gap-10">
          {/* 회원가입 설명 및 닫기 버튼 */}
          <div className="w-[440px] flex flex-col gap-2">
            <div className="w-full flex justify-end">
              <Link href="/">
                <Close size={24} />
              </Link>
            </div>
            <div>
              <p className="text-headlineSmall text-black">회원가입</p>
            </div>
            <div>
              <p className="text-BodyMedium text-gray600">
                회원 정보를 입력해주세요.
              </p>
            </div>
          </div>
          {/* 회원가입 인풋 들들 */}
          <div className="w-[440px] flex flex-col gap-4 text-BodyMedium">
            <Input
              label="이름"
              placeholder="이름을 입력해주세요."
              value={name}
              change={(e) => setName(e.target.value)}
            />
            <Input
              label="기수"
              placeholder="기수을 입력해주세요."
              value={generation}
              change={(e) => setGeneration(e.target.value.slice(0, 1))}
            />
            <Select
              label="전공"
              placeholder="전공을 선택해주세요."
              options={option}
              value={major}
              change={setMajor}
            />
          </div>
          <Button
            className="w-full mb-[24px]"
            disabled={!(major && name && generation)}
            size="large"
            onClick={registerUser}
          >
            회원가입
          </Button>
        </div>
      </article>
    </section>
  )
}
