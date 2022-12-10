import React, { FC } from "react"

interface Props {
  title: string
}

export const SelectButton: FC<Props> = ({ title }) => {
  return (
    <button
      className='flex items-center space-x-2 rounded-[20px] p-[10px] border border-lightGray'
      type='button'
    >
      <div className='rounded-full h-[27px] w-[27px] bg-white' />
      <span className='text-xl font-bold'>{title}</span>
    </button>
  )
}
