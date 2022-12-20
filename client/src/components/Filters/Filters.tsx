import React, { FC, useEffect, useState } from "react"
import { Dropdown } from "../Dropdowns/Dropdown"
import { useFilters } from "../../hooks/useFiters"
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
      activeOption: category,
      placeholder: "Категория",
      onChange: setCategory,
      selection: "_id",
      optionSelection: "name",
      options: categories?.category,
    },
    {
      activeOption: tag,
      placeholder: "Тег",
      onChange: setTag,
      selection: "name",
      optionSelection: "name",
      options: tags?.tag,
    },
  ]

  const handleResetFilters = () => {
    setTag("")
    setCategory("")
  }

  return (
    <aside className='bg-lightBlack p-5 rounded-[20px] overflow-y-auto border border-gray flex-col gap-y-5 sm:flex hidden h-[80vh] sticky top-5'>
      {dropdowns.map((dropdown) => (
        <Dropdown
          activeOption={dropdown.activeOption}
          optionSelection={dropdown.optionSelection}
          selection={dropdown.selection}
          options={dropdown.options}
          onChange={dropdown.onChange}
          placeholder={dropdown.placeholder}
          key={dropdown.placeholder}
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
