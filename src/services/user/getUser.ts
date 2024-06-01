import { UserType } from "@/types"
import { instance } from ".."

export const getUser = (id: string) => {
    return instance.get<UserType>(`/users/${id}`)
}