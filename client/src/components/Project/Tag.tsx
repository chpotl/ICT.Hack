import React, { FC } from "react"

type TTag = {
  title: string
}

export const Tag: FC<TTag> = ({ title }) => {
  return (
    <div className='bg-white rounded-[10px] text-black text-xl font-bold px-[6px] py-[3px]'>
      # {title}
    </div>
  )
}
