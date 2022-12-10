import React from "react"
import { Project } from "../Project/Project"

export const ProjectsList = () => {
  const projects = ["", "", "", ""]

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {projects.map((project, i) => (
        <Project key={i} />
      ))}
    </section>
  )
}
