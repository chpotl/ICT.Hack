import React, { FC } from "react"

export interface IDropdownItem {
  option: any
  onClick: React.Dispatch<React.SetStateAction<string>>
  activeOption: string
  selection?: string
  optionSelection?: string
}

export const DropdownItem: FC<IDropdownItem> = ({
  option,
  onClick,
  selection,
  optionSelection,
  activeOption,
}) => {
  const handleChange = () => {
    if (selection) {
      onClick(option[selection])
    } else {
      onClick(option)
    }
  }

  return (
    <button
      onClick={handleChange}
      className={`${
        activeOption === option[selection] || activeOption === option
          ? "bg-lightGreen text-black"
          : "hover:bg-hovLightBlack"
      } p-2 rounded-[10px] font-normal text-start
        `}
    >
      {optionSelection ? option[optionSelection] : option}
    </button>
  )
}
