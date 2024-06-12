'use client'
import { Portfolio } from "@/assets";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Button, Chip, Input, Select } from "..";
import { BaseModal } from "./BaseModal";
import { getCookie, toast } from "@/utils";
import { ApplicationFileType, MajorType } from "@/types";
import { postLink } from "@/services/post/postLink";
import { postFile } from "@/services";
import { useRouter } from "next/navigation";

interface ApplicationModalType {
    click: Dispatch<SetStateAction<boolean>>
    change?: Dispatch<SetStateAction<string>>
}

interface ApplicationDataType {
    kind: ApplicationFileType
    title: ''
    dataType: 'link' | 'file'
    link: '',
    file: File | null
    major: MajorType[]
}

const majorData: MajorType[] = ['Frontend', 'Backend', 'Android', 'iOS', 'CrossPlatform', 'AI', 'DevOps', 'Design', 'Game', 'Blockchain']

const tagToKorean: Record<ApplicationFileType, string> = {
    Portfolio: '포트폴리오',
    PersonalStatement: '자기소개서',
    Resume: '이력서',
}

const tagColor: Record<ApplicationFileType, string> = {
    Portfolio: 'bg-attentionBackground text-attention',
    PersonalStatement: 'bg-coutionBackground text-coution',
    Resume: 'bg-gray100 text-gray500',
}

export const ApplicationModal = ({ click, change = () => { } }: ApplicationModalType) => {
    const [data, setData] = useState<ApplicationDataType>({
        kind: 'Portfolio',
        title: '',
        dataType: 'link',
        link: '',
        file: null,
        major: []
    })
    const router = useRouter()

    const changeData = useCallback(<T, _>(name: string, value: T): void => {
        setData((prev) => ({ ...prev, [name]: value }))
    }, [])

    const UploadFile = useCallback((
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = (e.target.files as FileList)[0]

        if (selectedFile !== null) {
            if (selectedFile?.name.match(/^.*\.pdf$/)) {
                changeData('file', selectedFile)
            }
        }
    }, [])

    const fileSizeToString = useCallback((size: number) => {
        if (size < 1000) return `${size}B`
        if (size < 1000000) return `${(size / 1000).toFixed(1)}KB`
        if (size < 1000000000) return `${(size / 1000000).toFixed(1)}MB`
        return `1GB+`
    }, [])

    const submitApplication = useCallback(async () => {
        const token = getCookie('access_token')
        if (!token) {
            toast.error('토큰이 없습니다!')
            return
        }

        if (!data.title.length || data.title.length > 55) {
            toast.error('제목의 길이는 1부터 55사이여야 합니다.')
            return
        }

        if (data.major.length === 0) {
            toast.error('전공은 없을 수 없습니다.')
            return
        }

        const uploadData = {
            title: data.title,
            type: data.kind,
            major: data.major[0]
        }

        try {
            if (data.dataType === 'link') {
                if (!data.link.length || data.link.length > 93) {
                    toast.error('링크의 길이는 1부터 93사이여야 합니다.')
                    return
                }
                await postLink(token, {
                    ...uploadData,
                    link: data.link
                })
            } else {
                if (!data.file) {
                    toast.error('파일을 추가해주십시오.')
                    return
                }

                await postFile(token, {
                    ...uploadData,
                    file: data.file
                })
            }

            toast.success('성공적으로 업로드되었습니다!')
            router.refresh()
            change('')
            click(false)
        } catch {
            toast.error('업로드에 실패했습니다.')
        }
    }, [data])

    return (
        <BaseModal
            title="지원서 자료 공유"
            subTitle="사용자들에게 나만의 지원서 자료를 공유해 보세요."
            icon={<Portfolio size={28} />}
            click={() => {
                change('')
                click(false)
            }}
            className="w-[640px]"
        >
            {/* 유형 선택 */}
            <div className="flex gap-4 flex-wrap">
                {
                    (Object.keys(tagColor) as ApplicationFileType[]).map(v => (
                        <div className='flex items-center gap-2 cursor-pointer transition-all' key={v} onClick={() => changeData('kind', v)}>
                            {
                                data.kind === v ?
                                    <div className='border border-blue500 p-[3px] rounded-full w-5 h-5'>
                                        <div className="bg-blue500 w-full h-full rounded-full" />
                                    </div>
                                    :
                                    <div className='border border-gray300 p-[3px] rounded-full w-5 h-5' />
                            }
                            <div className={`px-[11px] w-fit h-fit py-1 rounded-full text-labelLarge ${tagColor[v]}`}>{tagToKorean[v]}</div>
                        </div>
                    ))
                }
            </div>
            {/* 자료 제목 입력 */}
            <Input
                label="제목"
                placeholder="자료 제목을 입력해 주세요."
                change={(e) => changeData('title', e.currentTarget.value)}
                value={data.title}
                err={data.title.length > 55}
            />
            {/* 자료 업로드 */}
            <div className="flex gap-4 flex-col">
                <div className={`p-1.5 gap-0.5 flex items-center transition-all rounded-xl border border-gray200 bg-gray50 text-bodySmall relative text-gray600 h-15 w-full`}>
                    <div className={`absolute border border-gray100 bg-white py-2 px-4 text-transparent rounded-lg w-[calc(50%-7px)] transition-all ${data.dataType === 'link' ? 'left-[6px]' : 'left-[calc(50%+1px)]'}`}>{data.dataType === 'link' ? '자료 링크' : '자료 파일'}</div>
                    <span className={`transition-all w-full flex justify-center py-3 px-4 z-10 cursor-pointer ${data.dataType === 'link' ? 'text-blue500' : 'text-gray600'}`} onClick={() => changeData('dataType', 'link')}>자료 링크</span>
                    <span className={`transition-all w-full flex justify-center py-3 px-4 z-10 cursor-pointer ${data.dataType === 'file' ? 'text-blue500' : 'text-gray600'}`} onClick={() => changeData('dataType', 'file')}>자료 파일</span>
                </div>
                {
                    data.dataType === 'link' ?
                        <Input
                            placeholder="링크를 입력해 주세요."
                            change={(e) => changeData('link', e.currentTarget.value)}
                            value={data.link}
                            err={data.link.length > 93}
                        />
                        :
                        <div className={`p-2 gap-3 flex items-center transition-all rounded-xl border border-gray200 bg-gray50 text-bodySmall h-15`}>
                            <input type="file" id="dataFile" className="hidden" onChange={UploadFile} accept=".pdf" />
                            <label htmlFor="dataFile" className="border border-gray200 bg-white rounded-lg py-2 px-3 text-bodySmall h-10 text-nowrap">파일 업로드</label>
                            {
                                data.file ?
                                    <div className="text-bodySmall text-blue500 inline">
                                        {/* 이거 왜 말줄임 안됨? */}
                                        <span className='inline'>{data.file.name.split('.')[0]}</span>
                                        <span className="inline w-fit">{`.${data.file.name.split('.')[1]} (${fileSizeToString(data.file.size)})`}</span>
                                    </div>
                                    :
                                    <span className='text-labelMedium text-gray500'>최대 5MB까지 업로드 할 수 있습니다.</span>
                            }
                        </div>
                }
            </div>
            {/* 전공 선택 */}
            <div className="flex gap-3 items-center [&>div:first-child]:w-[240px] flex-wrap">
                <Select
                    placeholder="전공 선택..."
                    value=''
                    change={(value: string) => data.major.length < 1 && changeData('major', [...data.major, value])}
                    options={majorData.filter(v => !data.major.includes(v)).map(v => ({
                        name: v,
                        value: v
                    }))}
                />
                <div className="flex flex-wrap gap-3">
                    {
                        data.major.map(v => (
                            <Chip key={v} value={v} deleteFn={(value: string) => changeData('major', data.major.filter(v => v !== value))} />
                        ))
                    }
                </div>
            </div>
            {/* 자료 공유 버튼 */}
            <div className="flex w-full justify-end">
                <Button kind="primary" onClick={submitApplication}>자료 공유하기</Button>
            </div>
        </BaseModal>
    )
}