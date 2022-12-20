import { ICategory, IProject } from "../types/types"
import { api } from "./axios"
import { IInitialFilters } from "../pages/Home/Home"

type ProjectsResponse = {
  projects: IProject[]
}

type ProjectResponse = {
  project: IProject
}

type CategoryResponse = {
  category: ICategory[]
}

type TagsResponse = {
  tag: string[]
}

export const ProjectService = {
  async getById(id: string | undefined): Promise<ProjectResponse> {
    const { data } = await api.get(`/api/project/${id}`)
    return data
  },
  async getCategories(): Promise<CategoryResponse> {
    const { data } = await api.get(`/api/category`)
    return data
  },
  async getTags(): Promise<TagsResponse> {
    const { data } = await api.get(`/api/tag`)
    return data
  },
  async getAll(filters: IInitialFilters): Promise<ProjectsResponse> {
    const isFilterOn = Object.values(filters).join("") !== ""

    if (isFilterOn) {
      const query = Object.entries(filters)
        .map(([key, value]) => {
          if (value) return `${key}=${value}&`
        })
        .join("")
        .slice(0, -1)

      const { data } = await api.get(`/api/project?${query}`)
      return data
    }

    const { data } = await api.get("/api/project")
    return data
  },
  async createNew(project: IProject): Promise<IProject> {
    return api.post("/api/project", project, {
      withCredentials: true,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    })
  },
  async upload(photo: any) {
    return api.post("/api/project", photo, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
}
