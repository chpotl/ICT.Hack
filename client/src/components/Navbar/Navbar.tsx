import { useState } from "react"
import { useModal } from "../../hooks/useModal"
import { Button } from "../Buttons/Button"
import { Logo } from "../Logo/Logo"
import { Modal } from "../Modals/Modal"
import { SignUpLogin } from "../Modals/SignUpLogin"
import { Menu } from "../Profile/Menu"
import { Profile } from "../Profile/Profile"
import { SearchInput } from "../Search/SearchInput"
import { Links } from "./Links"

export const Navbar = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpened] = useState(false)

  const { isOpen, toggle, close } = useModal()

  const isLogged = false

  return (
    <>
      <nav className='flex justify-between items-center p-5 w-full'>
        <Logo />
        <SearchInput />

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
                onClick={toggle}
                title='Войти'
                className='bg-darkGreen px-5 py-[15px] rounded-[20px]'
              />
            )}
          </div>
        </div>
      </nav>

      <Modal isOpen={isOpen} closeModal={close}>
        <SignUpLogin />
      </Modal>
    </>
  )
}
