import React, { FC } from "react"
import chelik from "../../assets/chelik.jpg"

interface Props {
  person: string
}

export const Avatar: FC<Props> = ({ person }) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={chelik} alt='' className='rounded-full w-[70px] h-[70px]' />
      <span className='text-darkGreen font-normal text-base'>{person}</span>
    </div>
  )
}
