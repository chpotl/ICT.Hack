import React, { FC } from "react"

interface Props {
  person: {
    image: string
    name: string
  }
}

export const Avatar: FC<Props> = ({ person }) => {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={person.image}
        alt=''
        className='rounded-full w-[70px] h-[70px]'
      />
      <span className='text-darkGreen font-normal text-base'>
        {person.name}
      </span>
    </div>
  )
}
