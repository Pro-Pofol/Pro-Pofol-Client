import { Close, Facebook, Google, Kakaotalk } from "@/assets";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";

interface LoginModalType{
    click: Dispatch<SetStateAction<boolean>>
}

const option = [
    {value: '1', name: "Backend"},
    {value: '2', name: "Frontend"},
    {value: '3', name: "iOS"},
    {value: '4', name: "Android"},
    {value: '5', name: "DevOps"},
    {value: '6', name: "Design"},
    {value: '7', name: "AI"},
    {value: '8', name: "CrossPlatform"},
    {value: '9', name: "Blockchain"},
]

export const SigninModal = ({click}:LoginModalType) =>{

    const modalRef = useRef<HTMLDivElement>(null)
    const [major, setMajor] = useState<string>(""); 

    return(
        <section className="w-screen h-screen fixed bg-modalBackground backdrop-blur-sm top-0 z-40">
            <article ref={modalRef} onClick={(e)=> e.target === modalRef.current ? click(false) : ''} className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col p-10 rounded-3xl bg-white gap-10">
                    {/* 회원가입 설명 및 닫기 버튼 */}
                    <div className="w-[440px] flex flex-col gap-2">
                        <div className="w-full flex justify-end">
                            <Close size={24} onClick={()=>click(false)}/>
                        </div>
                        <div>
                            <p className="text-headlineSmall text-black">회원가입</p>
                        </div>
                        <div>
                            <p className="text-BodyMedium text-gray600">회원 정보를 입력해주세요.</p>
                        </div>
                    </div>
                    {/* 회원가입 인풋 들들 */}
                    <div className="w-[440px] flex flex-col gap-4 text-BodyMedium">
                        <Input label="이름" placeholder="이름을 입력해주세요."/>
                        <Input label="기수" placeholder="기수을 입력해주세요."/>
                        <Select label="전공" placeholder="전공을 선택해주세요." options={option} value={major} change={setMajor}/>
                    </div>
                    <Button className="w-full mb-[24px]" disabled size="large">회원가입</Button>
                </div>
            </article>
        </section>
    );
}