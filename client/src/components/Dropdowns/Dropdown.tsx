import { useState } from "react"
import { Arrow } from "../Icons/Arrow"
import { DropdownItem } from "./DropdownItem"
import { IDropdown } from "../../types/types"

export const Dropdown = <T,>({
  selectOption,
  title,
  data,
  onSelect,
  select,
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
        onClick={handleOpenDropdown}
        className='flex justify-between w-full items-center p-[10px] transition-colors duration-300 rounded-[16px] hover:bg-hovLightBlack'
      >
        <span className='font-bold text-xl text-white'>{title}</span>
        <div className={isArrowRotate}>
          <Arrow />
        </div>
      </button>

      {isOpened && (
        <div className='flex flex-col gap-y-2'>
          {data
            ? data.map((item, i) => {
                return (
                  <DropdownItem
                    select={select}
                    selectOption={item[selectOption]}
                    onSelect={onSelect}
                    name={item.name}
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
