import { api } from "./axios"

export const UserService = {
  async register(data: any) {
    return api.post(`/user/signup`, data, { withCredentials: true })
  },
}
