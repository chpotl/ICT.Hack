import React from "react"

type Link = {
  title: string
  url: string
}

export const Links = () => {
  const links: Link[] = [
    {
      title: "Главная",
      url: "#",
    },
    {
      title: "Студенты",
      url: "#",
    },
    {
      title: "Проекты",
      url: "#",
    },
    {
      title: "Биржа",
      url: "#",
    },
  ]

  return (
    <ul className='flex space-x-10'>
      {links.map((link) => (
        <li
          key={link.title}
          className='font-bold text-2xl hover:text-lightGreen transition-colors duration-300 ease-linear'
        >
          <a href={link.url}>{link.title}</a>
        </li>
      ))}
    </ul>
  )
}
