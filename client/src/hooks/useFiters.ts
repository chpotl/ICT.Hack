import { useQuery } from "react-query"
import { ProjectService } from "../services/project"

export const useFilters = () => {
  const { data: categories, status: categoriesStatus } = useQuery(
    ["categories"],
    () => ProjectService.getCategories()
  )
  const { data: tags, status: tagsStatus } = useQuery(["tags"], () =>
    ProjectService.getTags()
  )

  return { tags, categories }
}
