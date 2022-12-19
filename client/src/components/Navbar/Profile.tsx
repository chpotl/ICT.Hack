import React, { FC } from "react"
import { Arrow } from "../Icons/Arrow"
import { IUser } from "../../types/types"

interface Props {
  isMenuOpen: boolean
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>
  user: IUser
}

export const Profile: FC<Props> = ({ isMenuOpen, setMenuOpened, user }) => {
  const isArrowRotate = `transition-transform duration-500 ${
    isMenuOpen && "rotate-180"
  }`

  console.log("user", user)

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={() => setMenuOpened(!isMenuOpen)}
        className={`rounded-full bg-lightGray flex justify-center items-center w-[70px] h-[70px] group hover:bg-black  transition-colors duration-500 ease`}
      >
        <span className='font-bold text-xl text-white group-hover:text-mainGreen'>
          {user?.username}
        </span>
      </button>
      <div className={isArrowRotate}>
        <Arrow />
      </div>
    </div>
  )
}
