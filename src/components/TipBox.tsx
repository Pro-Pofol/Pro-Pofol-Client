import { dateToString } from "@/utils";

interface TipBoxProps {
    title: string;
    name: string;
    date: string;
}

/**
 * TIP을 간략하게 표시해주는 컴포넌트입니다.
 * 
 * 사용 예시
 * ```
    <TipBox title="제목" name="유저 이름" date="날짜" />
 ```
 */
export const TipBox = ({ title, name, date }: TipBoxProps) => {
    return (
        <div className="p-8 flex sm:flex-col w-full gap-2.5 justify-between items-center sm:items-start border border-gray100 bg-white rounded-3xl cursor-pointer">
            <span className="text-titleSmall text-black truncate w-full">{title}</span>
            <div className="text-bodySmall text-gray600 flex justify-end items-center gap-2 w-fit sm:w-full text-nowrap">
                <span>{name}</span>
                <div className="w-0.5 h-0.5 bg-gray600 rounded-full" />
                <span>{dateToString(date)}</span>
            </div>
        </div>
    )
}
