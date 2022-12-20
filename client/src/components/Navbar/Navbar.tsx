import { FC, useState } from "react"
import { useModal } from "../../hooks/useModal"
import { Button } from "../Buttons/Button"
import { Logo } from "../Logo/Logo"
import { Modal } from "../Modals/Modal"
import { SignUpLogin } from "../Forms/SignUpLogin"
import { Menu } from "./Menu"
import { Profile } from "./Profile"
import { SearchInput } from "../Search/SearchInput"
import { Links } from "./Links"

interface Props {
  token: string | undefined
  user: any
  toggle: () => void
  clearUser: () => void
}

export const Navbar: FC<Props> = ({ token, user, toggle, clearUser }) => {
  const [isMenuOpen, setMenuOpened] = useState(false)

  const isLogged = token ? true : false

  return (
    <>
      <nav className='flex justify-between items-center p-5 w-full'>
        <Logo />
        <SearchInput placeholder='Искать грант' />

        <div className='flex items-center space-x-10'>
          <div className='hidden sm:block'>
            <Links />
          </div>

          {isLogged ? (
            <div className='relative'>
              <Profile
                user={user}
                setMenuOpened={setMenuOpened}
                isMenuOpen={isMenuOpen}
              />
              {isMenuOpen && <Menu clearUser={clearUser} />}
            </div>
          ) : (
            <Button
              onClick={toggle}
              title='Войти'
              className='bg-darkGreen px-5 py-[15px] rounded-[20px]'
            />
          )}
        </div>
      </nav>
    </>
  )
}
