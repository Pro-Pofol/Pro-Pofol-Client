"use client"

import { Arrow, Bag, Delete, FileUpload, Link, More } from "@/assets";
import { ApplicationDeleteModal } from "@/components/modal/ApplicationDelete";
import { useState } from "react";

export default function Detail(){

    const [open, setOpen] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)

    return(
        <>
            {
                modal &&
                <ApplicationDeleteModal click={setModal} />
            }
            <section className="w-full flex justify-center">
                <article className="flex flex-col w-[50%] min-w-[600px] mt-16 gap-10">
                    <div className="flex justify-between items-center">
                        <div className="p-2 border border-gray200 rounded-lg cursor-pointer">
                            <Arrow direction="left"/>
                        </div>
                        <div className="cursor-pointer relative" onClick={()=>setOpen(!open)}>
                            <More/>
                            {
                                open &&    
                                <button
                                    onClick={()=>setModal(!modal)}
                                    className="absolute top-8 right-1 flex items-center text-labelMedium gap-2 p-3 rounded-xl w-[160px] border border-gray200 bg-gray50"
                                    >
                                    <Delete className="text-gray800" />
                                    자료 삭제하기
                                </button>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="px-4 py-[6px] text-attention bg-attentionBackground text-bodySmall rounded-full">
                                포트폴리오
                            </span>
                        </div>
                        <h1 className="text-headlineSmall text-black">개인적으로 완벽한 포트폴리오</h1>
                        <div className="flex items-center gap-2 text-gray600">
                            <p>이강혁</p>
                            <p>﹒</p>
                            <p>2024.04.22. 14:07</p>
                        </div>
                    </div>
                    <div className="bg-gray200 h-[1px]"/>
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue50 border border-blue100 rounded-xl">
                                <Bag className="text-blue500" size={28}/>
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-bodySmall text-black">자료분야</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-labelMedium text-gray600">Frontend</p>
                                    <p className="text-labelLarge text-gray300">|</p>
                                    <p className="text-labelMedium text-gray600">Backend</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue50 border border-blue100 rounded-xl">
                                <FileUpload className="text-blue500" size={28}/>
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-bodySmall text-black">자료분야</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-labelMedium text-gray600">Frontend</p>
                                    <p className="text-labelLarge text-gray300">|</p>
                                    <p className="text-labelMedium text-gray600">Backend</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray200 h-[1px]"/>
                    <div className="flex flex-col gap-4 pb-[120px]">
                        <p className="text-titleSmall text-gray950">자료 미리보기</p>
                        <embed className="w-full h-[100vh]" src="https://velog.io/@lgb9811/%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A1%9C-%EC%B7%A8%EC%A7%81%EA%B9%8C%EC%A7%80-%ED%95%B4%EB%86%93%EA%B3%A0-%EC%95%84%EC%A7%81%EB%8F%84-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%9D%B4-%EB%AD%94%EC%A7%80-%EB%AA%A8%EB%A5%B8%EB%8B%A4%EA%B3%A0" />
                        <div className="flex itmes-center justify-between p-4 border border-gray200 bg-gray50 rounded-xl cursor-pointer">
                            <div className="flex items-center gap-3">
                                <p className="text-bodyMedium text-gray950">자료링크 이동</p>
                                <p className="w-[400px] text-labelMedium text-gray600 whitespace-nowrap overflow-hidden text-ellipsis">https://velog.io/@lgb9811/%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A1%9C-%EC%B7%A8%EC%A7%81%EA%B9%8C%EC%A7%80-%ED%95%B4%EB%86%93%EA%B3%A0-%EC%95%84%EC%A7%81%EB%8F%84-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%9D%B4-%EB%AD%94%EC%A7%80-%EB%AA%A8%EB%A5%B8%EB%8B%A4%EA%B3%A0</p>
                            </div>
                            <Link className="text-gray800"/>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}
