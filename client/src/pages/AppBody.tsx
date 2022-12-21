import React, { useState } from "react"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { useModal } from "../hooks/useModal"
import { Modal } from "../components/Modals/Modal"
import { SignUpLogin } from "../components/Forms/SignUpLogin"
import { IUser } from "../types/types"
import { useQuery } from "react-query"
import { ProjectService } from "../services/project"

type Props = {
  children: React.ReactNode
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
}

export const AppBody = ({ children, token, setToken }: Props) => {
  const { isOpen, toggle, close } = useModal()

  const [user, setUser] = useState<IUser | {}>({})

  useQuery(["get me"], () => ProjectService.getMe(), {
    select: (data) => data.user,
    onSuccess: (data) => {
      setUser(data)
    },
  })

  const clearUser = () => {
    setToken("")
    setUser({})
  }

  return (
    <div className='bg-black text-white overflow-x-hidden'>
      <Navbar clearUser={clearUser} user={user} token={token} toggle={toggle} />
      <main className='min-h-screen mx-auto px-5'>{children}</main>
      <Footer />

      <Modal isOpen={isOpen} closeModal={close}>
        <SignUpLogin setUser={setUser} setToken={setToken} close={close} />
      </Modal>
    </div>
  )
}
