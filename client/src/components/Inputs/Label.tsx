import React, { FC } from "react"

interface Props {
  label: string
  required?: boolean
  children: React.ReactNode
}

export const Label: FC<Props> = ({ label, children, required = false }) => {
  return (
    <label className='w-full'>
      <span className='font-bold text-xl'>
        {label} {required && <span className='text-darkGreen'>*</span>}
      </span>
      {children}
    </label>
  )
}
