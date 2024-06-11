import { ApplicationFileType } from "."

export interface ApplicationSearchPreviewType {
    id: number,
    title: string
    post_type: ApplicationFileType,
    writer_name: string,
    major: string,
    created_at: string
}