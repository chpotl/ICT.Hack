import { api } from "./axios"

export const UserService = {
  async register(data: any) {
    return api.post(`api/user/signup`, data, { withCredentials: true })
  },
  async login(data: any) {
    return api.post(`api/user/login`, data, { withCredentials: true })
  },
}
