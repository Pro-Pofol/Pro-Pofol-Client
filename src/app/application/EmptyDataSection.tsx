'use client'

interface EmptyDataSectionProps {
    boldText: string
    boldTextAfter: string
    description: string
}

const EmptyDataSection = ({ boldText, boldTextAfter, description }: EmptyDataSectionProps) => {
    return (
        <section className="px-10">
            <div className="border border-gray200 bg-gray50 w-full h-[360px] rounded-xl flex flex-col items-center justify-center gap-2 break-keep px-5">
                <span className="text-titleMedium sm:text-titleSmall">
                    <span className="text-blue500">{boldText}</span>
                    {boldTextAfter}
                </span>
                <span className="text-bodyMedium sm:text-bodySmall text-gray600">
                    {description}
                </span>
            </div>
        </section>
    )
}

export default EmptyDataSection