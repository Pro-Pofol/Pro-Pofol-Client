import { ApplicationFileType } from "@/types/applicationFile.type"
import { instance } from "../interceptor"
import { MajorType } from "@/types"

interface PostFileRequest {
	title: string
	type: ApplicationFileType,
	major: MajorType[]
}

// 미완성
export const postFile = async (accessToken: string, data: PostFileRequest, file: File) => {
	return await instance.post('/post/link', data,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)
}