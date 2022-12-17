import React, { FC } from "react"

export interface IDropdownItem {
  name: string
  onSelect: React.Dispatch<React.SetStateAction<string>>
  select: string
  selectOption: string
}

export const DropdownItem: FC<IDropdownItem> = ({
  name,
  onSelect,
  select,
  selectOption,
}) => {
  return (
    <button
      onClick={() => onSelect(selectOption)}
      className={`${
        select === selectOption ? "" : "hover:bg-hovLightBlack"
      } p-2 rounded-[10px] font-normal text-start ${
        select === selectOption ? "bg-lightGreen text-black" : ""
      }`}
    >
      {name}
    </button>
  )
}
