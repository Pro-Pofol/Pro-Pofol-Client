import { Close, Delete } from "@/assets";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useRef } from "react"
import { Button } from "../Button";

interface LoginModalType{
    click: Dispatch<SetStateAction<boolean>>
}

export const ApplicationDeleteModal = ({click}:LoginModalType) =>{
    
    const modalRef = useRef<HTMLDivElement>(null)
    const route = useRouter()

    return(
        <section className="w-screen h-screen fixed bg-modalBackground backdrop-blur-sm top-0 z-40">
            <article ref={modalRef} onClick={(e)=> e.target === modalRef.current ? click(false) : ''} className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col p-10 rounded-3xl bg-white gap-10">
                    <div className="flex flex-col gap-3 w-[25vw] min-w-64">
                        <div className="flex justify-between">
                            <div className="p-3 bg-criticalBackground border border-criticalMiddle rounded-xl">
                                <Delete size={28} className="text-critical"/>
                            </div>
                            <div onClick={()=>click(false)}>
                                <Close size={28}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-titleMedium">자료 삭제</p>
                            <p className="text-bodySmall text-gray600">자료를 삭제하시면 복구가 불가능해요.</p>
                        </div>
                        <div className="flex gap-3 mt-7">
                            <Button className="w-full" size="medium" kind="gray" onClick={()=>click(false)}>취소</Button>
                            <Button onClick={()=>route.push('/application')} className="w-full" size="medium" kind="red">자료 삭제하기</Button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}