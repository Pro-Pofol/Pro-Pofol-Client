import { ApplicationFileType } from "@/types/applicationFile.type"
import { instance } from "../interceptor"
import { MajorType } from "@/types"

interface PostFileRequest {
	title: string
	type: ApplicationFileType
	major: MajorType
	file: File
}

export const postFile = async (accessToken: string, data: PostFileRequest) => {
	return await instance.post('/post/file', data,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'multipart/form-data'
			}
		}
	)
}