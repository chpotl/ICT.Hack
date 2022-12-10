import React, { FC } from "react"

interface Props {
  children: React.ReactNode
}

export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className='bg-lightBlack rounded-[20px] p-5 border border-lightGray'>
      {children}
    </div>
  )
}
