import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Button } from "../../components/Buttons/Button"
import { Dropdown } from "../../components/Dropdowns/Dropdown"
import { Project } from "../../components/Project/Project"
import { ProjectsList } from "../../components/ProjectsList/ProjectsList"
import { useFilters } from "../../hooks/useFiters"
import { ProjectService } from "../../services/project"
import { Filters } from "../../components/Filters/Filters"

export interface IInitialFilters {
  tags: string
  category: string
}

export const Home = () => {
  // const [filters, setFilters] = useState<IInitialFilters>({
  //   tags: "",
  //   category: "",
  // })
  const [tag, setTag] = useState("")
  const [category, setCategory] = useState("")

  const filters = {
    tags: tag,
    category,
  }

  // sm:grid grid-cols-[0.24fr__1fr] gap-5
  return (
    <>
      <Filters
        tag={tag}
        category={category}
        setCategory={setCategory}
        setTag={setTag}
      />
      <ProjectsList filters={filters} />
    </>
  )
}
