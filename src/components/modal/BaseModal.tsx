import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { SubTitleSection } from ".."

interface BaseModalType {
    title: string
    subTitle: string
    icon?: React.ReactNode
    click: Dispatch<SetStateAction<boolean>> | (() => void)
    children: React.ReactNode
    className?: string
}

export const BaseModal = ({ title, subTitle, icon, click, children, className }: BaseModalType) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const body = document.querySelector('body')
        if (body) {
            body.style.overflow = 'hidden'
        }
        return () => {
            if (body) {
                body.style.overflow = ''
            }
        }
    }, [])

    return (
        <section className="w-screen h-screen fixed bg-modalBackground backdrop-blur-sm top-0 z-40">
            <article ref={modalRef} onClick={(e) => e.target === modalRef.current ? click(false) : ''} className="w-full h-full flex justify-center items-center overflow-y-auto">
                <div className={`flex flex-col p-8 rounded-3xl bg-white gap-10 ${className}`}>
                    <SubTitleSection
                        title={title}
                        subTitle={subTitle}
                        icon={icon}
                        onClick={() => click(false)}
                    />
                    {children}
                </div>
            </article>
        </section >
    )
}