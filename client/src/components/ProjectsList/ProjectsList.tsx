import { FC } from "react"
import { useQuery } from "react-query"
import { ProjectService } from "../../services/project"
import { Project } from "../Project/Project"
import { IInitialFilters } from "../../pages/Home/Home"

interface Props {
  filters: IInitialFilters
}

export const ProjectsList: FC<Props> = ({ filters }) => {
  const {
    data: projects,
    isError,
    isLoading,
  } = useQuery(["projects", filters], () => ProjectService.getAll(filters), {
    select: (data) => data.projects,
  })

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {projects?.length ? (
        projects?.map((project) => (
          <Project project={project} key={project._id} />
        ))
      ) : (
        <h1 className='text-3xl'>Ничего не найдено</h1>
      )}
    </section>
  )
}
