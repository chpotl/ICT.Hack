import React from "react"
import { useQuery } from "react-query"
import { ProjectService } from "../../services/project"
import { IProject } from "../../types/types"
import { Project } from "../Project/Project"

export const ProjectsList = () => {
  const { data, isError, isLoading } = useQuery(
    ["projects"],
    () => ProjectService.getAll(),
    {
      select: (data) => data.projects,
    }
  )

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {data?.map((project) => (
        <Project project={project} key={project._id} />
      ))}
    </section>
  )
}
