import React, { FC } from "react"

type TButton = {
  title: string
  className: string
}

export const Button: FC<TButton> = ({ title, className }) => {
  return (
    <button
      className={`w-full font-bold text-2xl border-none text-black ${className}`}
    >
      {title}
    </button>
  )
}
