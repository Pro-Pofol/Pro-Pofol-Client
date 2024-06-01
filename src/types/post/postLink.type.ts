import { type MajorType, type ApplicationFileType } from "@/types"

export interface PostLinkType {
	title: string
	link: string
	type: ApplicationFileType,
	major: MajorType
}