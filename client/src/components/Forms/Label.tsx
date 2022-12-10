import React, { FC } from "react"

interface Props {
  label: string
  children: React.ReactNode
}

export const Label: FC<Props> = ({ label, children }) => {
  return (
    <label className='w-full'>
      <span className='font-bold text-xl'>
        {label} <span className='text-darkGreen'>*</span>
      </span>
      {children}
    </label>
  )
}
