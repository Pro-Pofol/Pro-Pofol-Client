import { ApplicationFileType, MajorType } from ".."

export interface PostSearchType {
    keyword: string
    kind: 'everything' | ApplicationFileType
    major: MajorType,
    sort: 'ASC' | 'DESC'
}