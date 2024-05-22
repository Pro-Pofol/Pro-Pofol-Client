'use client'
import { Portfolio } from "@/assets";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Button, Chip, Input, Select } from "..";
import { BaseModal } from "./BaseModal";

interface ApplicationModalType {
    click: Dispatch<SetStateAction<boolean>>
}

type MajorType = 'Frontend' | 'Backend' | 'Android' | 'iOS' | 'CrossPlatform' | 'Ai' | 'DevOps' | 'Embeded' | 'Design' | 'Game' | 'BlockChain'
const majorData: MajorType[] = ['Frontend', 'Backend', 'Android', 'iOS', 'CrossPlatform', 'Ai', 'DevOps', 'Embeded', 'Design', 'Game', 'BlockChain']

const tagColor = {
    포트폴리오: 'bg-attentionBackground text-attention',
    자기소개서: 'bg-coutionBackground text-coution',
    이력서: 'bg-gray100 text-gray500',
}

export const ApplicationModal = ({ click }: ApplicationModalType) => {
    const [selectedKind, setSelectedKind] = useState<keyof typeof tagColor>('포트폴리오')
    const [selectedMajor, setSelectedMajor] = useState<string[]>([])
    const [dataType, setDataType] = useState<'link' | 'file'>('link')
    const [dataFile, setDataFile] = useState<File | null>(null)

    const UploadFile = useCallback((
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = (e.target.files as FileList)[0]

        if (selectedFile !== null) {
            if (selectedFile?.name.match(/^.*\.pdf$/)) {
                setDataFile(selectedFile)
            }
        }
    }, [])

    const fileSizeToString = useCallback((size: number) => {
        if (size < 1000) return `${size}B`
        if (size < 1000000) return `${(size / 1000).toFixed(1)}KB`
        if (size < 1000000000) return `${(size / 1000000).toFixed(1)}MB`
        return `1GB+`
    }, [])

    return (
        <BaseModal
            title="지원서 자료 공유"
            subTitle="사용자들에게 나만의 지원서 자료를 공유해 보세요."
            icon={<Portfolio size={28} />}
            click={click}
            className="w-[640px]"
        >
            {/* 유형 선택 */}
            <div className="flex gap-4 flex-wrap">
                {
                    (Object.keys(tagColor) as (keyof typeof tagColor)[]).map(v => (
                        <div className='flex items-center gap-2 cursor-pointer transition-all' key={v} onClick={() => setSelectedKind(v)}>
                            {
                                selectedKind === v ?
                                    <div className='border border-blue500 p-[3px] rounded-full w-5 h-5'>
                                        <div className="bg-blue500 w-full h-full rounded-full" />
                                    </div>
                                    :
                                    <div className='border border-gray300 p-[3px] rounded-full w-5 h-5' />
                            }
                            <div className={`px-[11px] w-fit h-fit py-1 rounded-full text-labelLarge ${tagColor[v]}`}>{v}</div>
                        </div>
                    ))
                }
            </div>
            {/* 자료 제목 입력 */}
            <Input label="제목" placeholder="자료 제목을 입력해 주세요." />
            {/* 자료 업로드 */}
            <div className="flex gap-4 flex-col">
                <div className={`p-1.5 gap-0.5 flex items-center transition-all rounded-xl border border-gray200 bg-gray50 text-bodySmall relative text-gray600 h-15 w-full`}>
                    <div className={`absolute border border-gray100 bg-white py-2 px-4 text-transparent rounded-lg w-[calc(50%-7px)] transition-all ${dataType === 'link' ? 'left-[6px]' : 'left-[calc(50%+1px)]'}`}>{dataType === 'link' ? '자료 링크' : '자료 파일'}</div>
                    <span className={`transition-all w-full flex justify-center py-3 px-4 z-10 cursor-pointer ${dataType === 'link' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setDataType('link')}>자료 링크</span>
                    <span className={`transition-all w-full flex justify-center py-3 px-4 z-10 cursor-pointer ${dataType === 'file' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setDataType('file')}>자료 파일</span>
                </div>
                {
                    dataType === 'link' ?
                        <Input placeholder="링크를 입력해 주세요." />
                        :
                        <div className={`p-2 gap-3 flex items-center transition-all rounded-xl border border-gray200 bg-gray50 text-bodySmall h-15`}>
                            <input type="file" id="dataFile" className="hidden" onChange={UploadFile} accept=".pdf" />
                            <label htmlFor="dataFile" className="border border-gray200 bg-white rounded-lg py-2 px-3 text-bodySmall h-10 text-nowrap">파일 업로드</label>
                            {
                                dataFile ?
                                    <div className="text-bodySmall text-blue500 inline">
                                        {/* 이거 왜 말줄임 안됨? */}
                                        <span className='inline'>{dataFile.name.split('.')[0]}</span>
                                        <span className="inline w-fit">{`.${dataFile.name.split('.')[1]} (${fileSizeToString(dataFile.size)})`}</span>
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
                    change={(value: string) => selectedMajor.length < 2 && setSelectedMajor(prev => [...prev, value])}
                    options={majorData.filter(v => !selectedMajor.includes(v)).map(v => ({
                        name: v,
                        value: v
                    }))}
                />
                <div className="flex flex-wrap gap-3">
                    {
                        selectedMajor.map(v => (
                            <Chip key={v} value={v} deleteFn={(value: string) => setSelectedMajor(prev => prev.filter(v => v !== value))} />
                        ))
                    }
                </div>
            </div>
            {/* 자료 공유 버튼 */}
            <div className="flex w-full justify-end">
                <Button kind="primary">자료 공유하기</Button>
            </div>
        </BaseModal>
    )
}