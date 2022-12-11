import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Button } from "../../components/Buttons/Button"
import { Dropdown } from "../../components/Dropdowns/Dropdown"
import { Project } from "../../components/Project/Project"
import { ProjectsList } from "../../components/ProjectsList/ProjectsList"
import { useFilters } from "../../hooks/useFiters"
import { ProjectService } from "../../services/project"

export interface IInitialFilters {
  tags: string
  category: string
}

export const Home = () => {
  const [activeTag, setActiveTag] = useState("")
  const [activeCategory, setActiveCategory] = useState("")

  const [activeFilters, setActiveFilters] = useState<IInitialFilters>({
    tags: "",
    category: "",
  })

  const { categories, tags } = useFilters()

  const {
    data: projects,
    isError,
    isLoading,
  } = useQuery(
    ["projects", activeFilters],
    () => ProjectService.getAll(activeFilters),
    {
      select: (data) => data.projects,
    }
  )

  useEffect(() => {
    console.log("effect")
    setActiveFilters({
      tags: activeTag,
      category: activeCategory,
    })
  }, [activeTag, activeCategory])

  return (
    <div className='grid grid-cols-[20%__80%] gap-5 p-5'>
      <aside className='bg-lightBlack p-5 rounded-[20px] border border-gray flex flex-col gap-y-5'>
        <Dropdown
          select={activeCategory}
          onSelect={setActiveCategory}
          title='Категория'
          selectOption={"_id"}
          data={categories?.category}
        />
        <Dropdown
          select={activeTag}
          onSelect={setActiveTag}
          title='Теги'
          selectOption={"name"}
          data={tags?.tag}
        />
        <button
          onClick={() => {
            setActiveTag("")
            setActiveCategory("")
            setActiveFilters({ tags: "", category: "" })
          }}
        >
          Сбросить
        </button>
      </aside>
      <ProjectsList projects={projects} />
    </div>
  )
}
