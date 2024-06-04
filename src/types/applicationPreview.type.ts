import { ApplicationFileType } from "."

export interface ApplicationPreviewType {
    post_id: number,
    post_title: string
    post_post_type: ApplicationFileType,
    post_writer_id: string,
    post_major: string,
    post_created_at: string
}