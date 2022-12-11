import React, { ButtonHTMLAttributes, FC } from "react"

type TButton = {
  title: string
  className: string
  onClick?: () => void
  type?: "button" | "reset" | "submit" | undefined
}

export const Button: FC<TButton> = ({ title, className, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-bold text-2xl border-none text-black ${className}`}
    >
      {title}
    </button>
  )
}
