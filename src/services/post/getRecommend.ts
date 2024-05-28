import { ApplicationPreviewType } from "@/types/applicationPreview.type"
import { instance } from "../interceptor"

interface GetRecommendResponseType {
    posts: ApplicationPreviewType[]
}

export const getRecommend = async () => {
	return await instance.get<GetRecommendResponseType>('/post/recommend')
}