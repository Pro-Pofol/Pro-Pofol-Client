import { ApplicationPreviewType } from "@/types/applicationPreview.type"
import { instance } from "../interceptor"
import { cookies } from "next/headers"
import { PostSearchType } from "@/types"

interface GetApplicationDataResponseType {
    posts: ApplicationPreviewType[]
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