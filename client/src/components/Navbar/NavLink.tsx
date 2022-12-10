import React, { FC } from "react"
import { TNavLink } from "./Menu"
import { Link } from "react-router-dom"

interface Props {
  navlink: TNavLink
}

export const NavLink: FC<Props> = ({ navlink }) => {
  return (
    <Link to={""}>
      <div className='flex space-x-2 justify-between items-center w-full border'>
        {navlink.logo}
        <div className='flex justify-start w-full'>
          <span className='text-sm font-normal'>{navlink.title}</span>
        </div>
      </div>
    </Link>
  )
}
