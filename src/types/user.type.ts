import { MajorType } from "."

export interface UserType {
    oauth_id: string
    name: string
    major: MajorType
    generation: number
    profile_image: string
}