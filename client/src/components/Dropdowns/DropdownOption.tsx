import React, { FC } from "react"

interface Props {
  name: string
  onSelect: React.Dispatch<React.SetStateAction<string>>
  select: string
  selectOption: string
}

export const DropdownOption: FC<Props> = ({
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
