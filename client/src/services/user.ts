import { IUser } from "../types/types"
import { api } from "./axios"

type UserResponse = {
  user: IUser
}

export const UserService = {
  async register(data: any) {
    return api.post(`api/user/signup`, data, { withCredentials: true })
  },
  async login(data: any) {
    return api.post(`api/user/login`, data, { withCredentials: true })
  },
  async getMe(): Promise<UserResponse> {
    const { data } = await api.get("api/user/me", { withCredentials: true })
    return data
  },
}
