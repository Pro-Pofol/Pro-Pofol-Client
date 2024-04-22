import { Close } from "@/assets"

interface SubTitleSectionProps {
    title: string
    subTitle: string
    icon: React.ReactNode
    onClick?: () => void
}

/**
 * 현재 이 `section`이 어떤 것을 표시해주는 지 알려주는 컴포넌트입니다.
 * 
 * icon은 `assets` 폴더에서 불러와서 컴포넌트로 추가해야합니다.
 * 
 * 그때 icon은 size는 28px여야 합니다.
 * 
 * `onClick`은 Modal에서 Modal을 없애기 위해 사용합니다.
 * 
 * 사용 예시
 * ```
    <SubTitleSection
        title="title"
        subTitle="subTitle"
        icon={<Portfolio size={28} />}
    />
    ```
 */
export const SubTitleSection = ({ title, subTitle, icon, onClick }: SubTitleSectionProps) => {
    return (
        <section className={`flex flex-col gap-3 break-keep ${onClick ? 'w-full' : 'w-fit'}`}>
            <div className="flex justify-between">
                <div className="p-3 border border-blue100 bg-blue50 text-blue500 rounded-xl">{icon}</div>
                {
                    onClick &&
                    <Close size={28} className="text-black" onClick={onClick} />
                }
            </div>
            <div className="flex flex-col gap-1">
                <span className={onClick ? 'text-titleMedium' : 'text-titleLarge'}>{title}</span>
                <span className="text-bodyMedium">{subTitle}</span>
            </div>
        </section>
    )
}