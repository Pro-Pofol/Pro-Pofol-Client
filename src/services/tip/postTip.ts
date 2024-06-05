import { UploadTipType } from "@/types"
import { instance } from "../interceptor"

export const postTip = async (accessToken: string, data: UploadTipType) => {
	return await instance.post('/tip', data,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)
}