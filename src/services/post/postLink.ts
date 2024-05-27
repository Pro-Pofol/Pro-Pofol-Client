import { PostLinkType } from "@/types"
import { instance } from "../interceptor"

export const postLink = async (accessToken: string, data: PostLinkType) => {
	return await instance.post('/post/link', data,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)
}