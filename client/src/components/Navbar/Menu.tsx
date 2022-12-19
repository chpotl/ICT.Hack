import React, { FC } from "react"
import { Arrow } from "../Icons/Arrow"
import { HomeIcon } from "../Icons/HomeIcon"
import { PlusIcon } from "../Icons/PlusIcon"
import { ProfileIcon } from "../Icons/ProfileIcon"
import { QuitIcon } from "../Icons/QuitIcon"
import { NavLink } from "./NavLink"
import { useMutation } from "react-query"
import { UserService } from "../../services/user"

export type TNavLink = {
  logo: JSX.Element
  title: string
  route: string
  onClick?: () => void
}

interface Props {
  clearUser: () => void
}

export const Menu: FC<Props> = ({ clearUser }) => {
  const handleLogOut = () => {
    // const mutation = useMutation(() => UserService.logOut())
    clearUser()
    console.log("logout")
  }

  const navlinks: TNavLink[] = [
    {
      logo: <HomeIcon />,
      title: "Главная",
      route: "/",
    },
    // {
    //   logo: <Arrow />,
    //   title: "Все гранты",
    //   route: "",
    // },
    {
      logo: <PlusIcon />,
      title: "Создать проект",
      route: "/create-project",
    },
    // {
    //   logo: <Arrow />,
    //   title: "Мои проекты",
    //   route: "",
    // },
    {
      logo: <ProfileIcon />,
      title: "Профиль",
      route: "/profile",
    },
    // {
    //   logo: <Arrow />,
    //   title: "Моя подборка",
    //   route: "",
    // },
    {
      logo: <QuitIcon />,
      title: "Выйти",
      route: "",
      onClick: handleLogOut,
    },
    // {
    //   logo: <Arrow />,
    //   title: "Светлая тема",
    //   route: "",
    // },
  ]

  return (
    <div className='bg-lightBlack w-[20vw] rounded-[20px] border-2 border-lightGray right-5 flex flex-col justify-start  p-5 absolute'>
      {navlinks.map((navlink) => (
        <NavLink navlink={navlink} key={navlink.title} />
      ))}
    </div>
  )
}
