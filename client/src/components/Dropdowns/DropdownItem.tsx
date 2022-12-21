import React, { FC } from "react"
import { CloseButton } from "../Buttons/CloseButton"

export interface IDropdownItem {
  option: any
  onClick: React.Dispatch<React.SetStateAction<string>>
  activeOption: string
  selection?: any
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

  const handleRemoveDropdwonItem = () => {
    onClick("")
  }

  const isActive = activeOption === option[selection] || activeOption === option

  return (
    <div
      className={`flex items-center ${
        isActive ? "bg-lightGreen text-black" : "hover:bg-hovLightBlack"
      } rounded-[10px]`}
    >
      <button
        onClick={handleChange}
        className={`font-normal p-2 text-start w-full
        `}
      >
        {optionSelection ? option[optionSelection] : option}
      </button>
      {isActive ? (
        <CloseButton color='black' close={handleRemoveDropdwonItem} />
      ) : null}
    </div>
  )
}
