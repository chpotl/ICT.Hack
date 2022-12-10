import { useState } from "react"
import { Logo } from "../Logo/Logo"
import { Dropdown } from "../Profile/Dropdown"
import { Profile } from "../Profile/Profile"
import { TextInput } from "../Search/TextInput"
import { Links } from "./Links"

export const Navbar = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpened] = useState(false)

  return (
    <nav className='flex justify-between items-center p-5 w-full'>
      <Logo />
      <TextInput />

      <div className='flex items-center space-x-10'>
        <Links />

        <div className='relative'>
          <Profile
            setProfileDropdownOpened={setProfileDropdownOpened}
            isProfileDropdownOpen={isProfileDropdownOpen}
          />
          {isProfileDropdownOpen && <Dropdown />}
        </div>
      </div>
    </nav>
  )
}
