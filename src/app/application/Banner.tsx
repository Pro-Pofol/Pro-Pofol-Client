import { GradientImg } from "@/assets"
import Image from "next/image"

export const ApplicationBanner = () => {
    return (
        <section className="w-full h-[240px] relative border-b-2 border-gray100 overflow-hidden flex justify-center items-center">
            <Image src={GradientImg} alt="Banner 이미지" className="w-full h-[240px] absolute object-cover object-center -z-[1]" priority />
            <div className="flex flex-col gap-3 items-center">
                <span className="text-headlineLarge text-white">지원서 자료</span>
                <span className="text-bodyLarge text-gray200">PROPOFOL에서 수 많은 지원서를 살펴보고, 나만의 지원서를 만들어 보세요.</span>
            </div>
        </section>
    )
}