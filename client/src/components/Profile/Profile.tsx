import React, { FC } from "react"
import { Arrow } from "../Icons/Arrow"

interface Props {
  isProfileDropdownOpen: boolean
  setProfileDropdownOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const Profile: FC<Props> = ({
  setProfileDropdownOpened,
  isProfileDropdownOpen,
}) => {
  const isArrowRotate = `transition-transform duration-500 ${
    isProfileDropdownOpen && "rotate-180"
  }`

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={() => setProfileDropdownOpened(!isProfileDropdownOpen)}
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
