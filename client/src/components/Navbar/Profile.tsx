import React, { FC } from "react"
import { Arrow } from "../Icons/Arrow"

interface Props {
  isMenuOpen: boolean
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const Profile: FC<Props> = ({ isMenuOpen, setMenuOpened }) => {
  const isArrowRotate = `transition-transform duration-500 ${
    isMenuOpen && "rotate-180"
  }`

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={() => setMenuOpened(!isMenuOpen)}
        className='rounded-full bg-lightGray flex justify-center items-center w-[70px] h-[70px]'
      >
        <span className='font-bold text-xl text-white'>ЛЗ</span>
      </button>
      <div className={isArrowRotate}>
        <Arrow />
      </div>
    </div>
  )
}
