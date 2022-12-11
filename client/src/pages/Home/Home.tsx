import { useState } from "react"
import { Dropdown } from "../../components/Dropdowns/Dropdown"
import { Filters } from "../../components/Filters/Filters"
import { Project } from "../../components/Project/Project"
import { ProjectsList } from "../../components/ProjectsList/ProjectsList"

export const Home = () => {
  return (
    <div className='grid grid-cols-[20%__80%] gap-5 p-10'>
      <Filters />
      <ProjectsList />
    </div>
  )
}
