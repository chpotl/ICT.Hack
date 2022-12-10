import React, { FC } from "react"

type TButton = {
  title: string
  className: string
  onClick: () => void
}

export const Button: FC<TButton> = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full font-bold text-2xl border-none text-black ${className}`}
    >
      {title}
    </button>
  )
}
