import React, { FC } from "react"
import { TNavLink } from "./Menu"
import { Link } from "react-router-dom"

interface Props {
  navlink: TNavLink
}

export const NavLink: FC<Props> = ({ navlink }) => {
  return (
    <Link to={navlink.route}>
      <div className='flex p-5 space-x-2 items-center w-full hover:bg-hovLightBlack rounded-xl transition-colors duration-500 ease-out'>
        {navlink.logo}
        <span className='text-base font-normal'>{navlink.title}</span>
      </div>
    </Link>
  )
}
