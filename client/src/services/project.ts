import { IProject } from "../types/types"
import { api } from "./axios"

type ProjectsResponse = {
  projects: IProject[]
}

type ProjectResponse = {
  project: IProject
}

export const ProjectService = {
  async getAll(): Promise<ProjectsResponse> {
    const { data } = await api.get("/api/project")
    return data
  },
  async getById(id: string | undefined): Promise<ProjectResponse> {
    const { data } = await api.get(`/api/project/${id}`)
    return data
  },
}
