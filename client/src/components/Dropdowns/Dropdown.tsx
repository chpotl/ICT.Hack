import { useState } from "react"
import { Arrow } from "../Icons/Arrow"
import { DropdownItem } from "./DropdownItem"
import { IDropdown } from "../../types/types"

export const Dropdown = <T,>({
  options,
  placeholder,
  onChange,
  selection,
  optionSelection,
  activeOption,
  border,
}: IDropdown<T>) => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpenDropdown = () => {
    setIsOpened(!isOpened)
  }

  const isArrowRotate = `transition-transform duration-500 ${
    isOpened && "rotate-180"
  }`

  return (
    <div className='rounded-[10px]'>
      <button
        type='button'
        onClick={handleOpenDropdown}
        className={`${
          border && "border border-lightGray"
        } flex justify-between w-full items-center p-[10px] transition-colors duration-300 rounded-[16px] hover:bg-hovLightBlack`}
      >
        <span className='font-bold text-xl text-white'>{placeholder}</span>
        <div className={isArrowRotate}>
          <Arrow />
        </div>
      </button>

      {isOpened && (
        <div className='flex flex-col'>
          {options
            ? options.map((option, i) => {
                return (
                  <DropdownItem
                    activeOption={activeOption}
                    selection={selection}
                    optionSelection={optionSelection}
                    option={option}
                    onClick={onChange}
                    key={i}
                  />
                )
              })
            : null}
        </div>
      )}
    </div>
  )
}
