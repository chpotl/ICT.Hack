import React, { FC } from "react"
import { useQuery } from "react-query"
import { ProjectService } from "../../services/project"
import { IProject } from "../../types/types"
import { Project } from "../Project/Project"

interface Props {
  projects: IProject[] | undefined
}

export const ProjectsList: FC<Props> = ({ projects }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-10'>
      {projects?.map((project) => (
        <Project project={project} key={project._id} />
      ))}
    </section>
  )
}
