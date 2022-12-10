import React, { FC } from "react"

interface Props {
  children: React.ReactNode
  title: string
}

export const WrapperTitle: FC<Props> = ({ children, title }) => {
  return (
    <>
      <span className='text-2xl text-lightGray'>{title}</span>
      <div className='flex flex-col gap-y-5 border border-lightGray rounded-[20px] p-5'>
        {children}
      </div>
    </>
  )
}
