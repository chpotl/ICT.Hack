import React, { FC } from "react"
import { Link } from "react-router-dom"

type TLinkButton = {
  title: string
  className: string
  url: string
}

export const LinkButton: FC<TLinkButton> = ({ url, title, className }) => {
  return (
    <Link
      to={url}
      className={`font-bold text-2xl border rounded-[10px] border-lightGray ${className}`}
    >
      {title}
    </Link>
  )
}
