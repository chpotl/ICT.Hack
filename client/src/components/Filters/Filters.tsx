import React from "react"
import { Dropdown } from "../Dropdowns/Dropdown"

export const Filters = () => {
  return (
    <aside className='bg-lightBlack p-5 rounded-[20px] border border-gray flex flex-col gap-y-5'>
      <Dropdown title='Категория' data={["1", "2", "3", "4"]} />
      <Dropdown title='Категория' data={["1", "2", "3", "4"]} />
      <Dropdown title='Категория' data={["1", "2", "3", "4"]} />
      <Dropdown title='Категория' data={["1", "2", "3", "4"]} />
    </aside>
  )
}
