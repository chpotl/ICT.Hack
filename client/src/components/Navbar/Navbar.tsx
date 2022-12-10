import { useState } from "react"
import { Button } from "../Button/Button"
import { Logo } from "../Logo/Logo"
import { Menu } from "../Profile/Menu"
import { Profile } from "../Profile/Profile"
import { TextInput } from "../Search/TextInput"
import { Links } from "./Links"

export const Navbar = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpened] = useState(false)

  const isLogged = false

  return (
    <nav className='flex justify-between items-center p-5 w-full'>
      <Logo />
      <TextInput />

      <div className='flex items-center space-x-10'>
        <Links />

        <div className='relative'>
          {isLogged ? (
            <>
              <Profile
                setProfileDropdownOpened={setProfileDropdownOpened}
                isProfileDropdownOpen={isProfileDropdownOpen}
              />
              {isProfileDropdownOpen && <Menu />}
            </>
          ) : (
            <Button
              title='Войти'
              className='bg-darkGreen px-5 py-[15px] rounded-[20px]'
            />
          )}
        </div>
      </div>
    </nav>
  )
}
