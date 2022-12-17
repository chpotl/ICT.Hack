import React, { FC, useEffect, useState } from "react"
import { Dropdown } from "../Dropdowns/Dropdown"
import { useFilters } from "../../hooks/useFiters"
import { IInitialFilters } from "../../pages/Home/Home"
import { IDropdown } from "../../types/types"
import { Button } from "../Buttons/Button"

interface Props {
  tag: string
  category: string
  setTag: React.Dispatch<React.SetStateAction<string>>
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const Filters: FC<Props> = ({ setCategory, setTag, tag, category }) => {
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
  }

  return (
    <aside className='bg-lightBlack p-5 rounded-[20px] overflow-y-auto border border-gray flex-col gap-y-5 sm:flex hidden h-[80vh] w-[40%] sticky top-5'>
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
      <Button
        title={"Сбросить"}
        className={"bg-mainGreen rounded-[16px] p-2 w-full"}
        onClick={handleResetFilters}
      />
    </aside>
  )
}
