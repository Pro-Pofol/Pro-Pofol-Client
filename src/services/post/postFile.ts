import { ApplicationFileType } from "@/types/applicationFile.type"
import { instance } from "../interceptor"
import { MajorType } from "@/types"

interface PostFileRequest {
	title: string
	type: ApplicationFileType
	major: MajorType
}

export const postFile = async (accessToken: string, data: PostFileRequest, file: File) => {
	const formData = new FormData()
	formData.append('title', data.title)
	formData.append('type', data.type)
	formData.append('major', data.major)
	formData.append('file', file)

	return await instance.post('/post/file', data,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)
}