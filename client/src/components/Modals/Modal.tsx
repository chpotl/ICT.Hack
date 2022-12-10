import React, { FC } from "react"

type TModal = {
  children: React.ReactNode
}

export const Modal: FC<TModal> = ({ children }) => {
  return (
    <div className='z-50 rounded-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 p-5'>
      {children}
    </div>
  )
}
