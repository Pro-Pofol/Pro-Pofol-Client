import { instance } from "../interceptor"
import { ApplicationSearchPreviewType, PostSearchType } from "@/types"

interface GetApplicationDataResponseType {
    posts: ApplicationSearchPreviewType[]
}

export const getApplicationData = async (token: string, data: PostSearchType) => {
    return await instance<GetApplicationDataResponseType>({
        method: 'GET',
        url: '/post/search',
        params: data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}