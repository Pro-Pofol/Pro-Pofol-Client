import { GradientImg } from "@/assets"
import Image from "next/image"

export const TipBanner = () => {
    return (
        <section className="w-full h-[240px] relative border-b-2 border-gray100 overflow-hidden flex justify-center items-center">
            <Image src={GradientImg} alt="Banner 이미지" className="w-full h-[240px] absolute object-cover object-center -z-[1]" priority />
            <div className="flex flex-col gap-3 items-center">
                <span className="text-headlineLarge text-white">지원서 작성 팁</span>
                <span className="text-bodyLarge text-gray200">PROPOFOL 사용자들이 직접 작성한 유용한 지원서 작성 팁이에요.</span>
            </div>
        </section>
    )
}