import React, { FC, useState } from "react"
import { Arrow } from "../Icons/Arrow"

type TDropdown = {
  title: string
  data: any[]
}

export const Dropdown: FC<TDropdown> = ({ title, data }) => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpenDropdown = () => {
    setIsOpened(!isOpened)
  }

  const isArrowRotate = `transition-transform duration-500 ${
    isOpened && "rotate-180"
  }`

  return (
    <div
      onClick={handleOpenDropdown}
      className='p-[10px] rounded-[10px] hover:bg-hovLightBlack cursor-pointer transition-colors duration-300'
    >
      <div className='flex justify-between w-full items-center'>
        <span className='font-bold text-xl text-white'>{title}</span>
        <div className={isArrowRotate}>
          <Arrow />
        </div>
      </div>

      {isOpened && (
        <div>{data ? data.map((option) => <div>{option}</div>) : null}</div>
      )}
    </div>
  )
}
