import { ApplicationFileType, MajorType } from ".."

export interface PostSearchType {
    keyword: string
    type: 'Everything' | ApplicationFileType
    major: MajorType,
    sort: 'ASC' | 'DESC'
}