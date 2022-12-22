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
    <section
      className={`${
        projects?.length &&
        "  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
      }`}
    >
      {projects?.length ? (
        projects?.map((project) => (
          <Project project={project} key={project._id} />
        ))
      ) : (
        <div className='w-full h-full flex justify-center items-center'>
          <div className='p-5 border rounded-[20px] border-lightGray'>
            <span className='text-3xl'>
              {isError && "oops..."}
              {isLoading && "загружаем..."}
              {!isLoading && !isError && "ничего не найдено"}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
