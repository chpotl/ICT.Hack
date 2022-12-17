import { useState } from "react"
import { ProjectsList } from "../../components/ProjectsList/ProjectsList"
import { Filters } from "../../components/Filters/Filters"

export interface IInitialFilters {
  tags: string
  category: string
}

export const Home = () => {
  const [tag, setTag] = useState("")
  const [category, setCategory] = useState("")

  const filters = {
    tags: tag,
    category,
  }

  return (
    <div className='flex justify-between gap-5'>
      <Filters
        tag={tag}
        category={category}
        setCategory={setCategory}
        setTag={setTag}
      />
      <ProjectsList filters={filters} />
    </div>
  )
}
