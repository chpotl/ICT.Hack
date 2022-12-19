import { IUser } from "../types/types"
import { api } from "./axios"

type UserResponse = {
  user: IUser
}

export const UserService = {
  async authUser(data: any, loginOrSign: "login" | "signup") {
    return api.post(`api/user/${loginOrSign}`, data, { withCredentials: true })
  },
  async getMe(): Promise<UserResponse> {
    const { data } = await api.get("api/user/me", { withCredentials: true })
    return data
  },
}
