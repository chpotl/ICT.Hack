import React from "react"
import { Arrow } from "../Icons/Arrow"
import { NavLink } from "./NavLink"

export type TNavLink = {
  logo: JSX.Element
  title: string
}

export const Menu = () => {
  const navlinks: TNavLink[] = [
    {
      logo: <Arrow />,
      title: "Главная",
    },
    {
      logo: <Arrow />,
      title: "Все гранты",
    },
    {
      logo: <Arrow />,
      title: "Создать проект",
    },
    {
      logo: <Arrow />,
      title: "Мои проекты",
    },
    {
      logo: <Arrow />,
      title: "Профиль",
    },
    {
      logo: <Arrow />,
      title: "Моя подборка",
    },
    {
      logo: <Arrow />,
      title: "Выйти",
    },
    {
      logo: <Arrow />,
      title: "Светлая тема",
    },
  ]

  return (
    <div className='bg-lightBlack rounded-[20px] border-2 border-lightGray right-5 flex flex-col justify-start w-full p-5 absolute'>
      {navlinks.map((navlink) => (
        <NavLink navlink={navlink} key={navlink.title} />
      ))}
    </div>
  )
}
