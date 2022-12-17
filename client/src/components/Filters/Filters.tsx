import React, { FC, useEffect, useState } from "react"
import { Dropdown } from "../Dropdowns/Dropdown"
import { useFilters } from "../../hooks/useFiters"
import { IInitialFilters } from "../../pages/Home/Home"
import { IDropdown } from "../../types/types"

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<IInitialFilters>>
}

export const Filters: FC<Props> = ({ setFilters }) => {
  const [tag, setTag] = useState("")
  const [category, setCategory] = useState("")

  useEffect(() => {
    setFilters({
      tags: tag,
      category,
    })
  }, [tag, category])

  const { categories, tags } = useFilters()

  const dropdowns: IDropdown<T>[] = [
    {
      select: category,
      onSelect: setCategory,
      title: "Категория",
      selectOption: "_id",
      data: categories?.category,
    },
    {
      select: tag,
      onSelect: setTag,
      title: "Теги",
      selectOption: "name",
      data: tags?.tag,
    },
  ]

  const handleResetFilters = () => {
    setTag("")
    setCategory("")
    setFilters({ tags: "", category: "" })
  }

  return (
    <aside className='bg-lightBlack p-5 rounded-[20px] sticky top-0 overflow-y-auto border border-gray flex-col gap-y-5 sm:flex hidden h-[80vh] w-96'>
      {dropdowns.map((dropdown) => (
        <Dropdown
          select={dropdown.select}
          onSelect={dropdown.onSelect}
          title={dropdown.title}
          selectOption={dropdown.selectOption}
          data={dropdown.data}
          key={dropdown.title}
        />
      ))}
      <button onClick={handleResetFilters}>Сбросить</button>
    </aside>
  )
}
