import React from "react"
import { Arrow } from "../Icons/Arrow"
import { Button } from "./Button"

export type TButton = {
  logo: JSX.Element
  title: string
}

export const Dropdown = () => {
  const buttons: TButton[] = [
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
      {buttons.map((button) => (
        <Button button={button} key={button.title} />
      ))}
    </div>
  )
}
