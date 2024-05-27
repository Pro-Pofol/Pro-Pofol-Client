import { MajorType } from "./majorType"
import { PostType } from "./postType"

export type applicationType = {
    id: number
    post_type: PostType
    title: string
    content: string
    link: string
    major: MajorType
    writer_id: string
    created_at: Date
}