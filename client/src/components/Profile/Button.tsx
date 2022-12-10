import React, { FC } from "react"
import { TButton } from "./Dropdown"
import { Link } from "react-router-dom"

interface Props {
  button: TButton
}

export const Button: FC<Props> = ({ button }) => {
  return (
    <Link to={""}>
      <div className='flex space-x-2 justify-between items-center w-full border'>
        {button.logo}
        <div className='flex justify-start w-full'>
          <span className='text-sm font-normal'>{button.title}</span>
        </div>
      </div>
    </Link>
  )
}
