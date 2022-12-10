import React from "react"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"

type Props = {
  children: React.ReactNode
}

export const AppBody = ({ children }: Props) => {
  return (
    <div className='bg-black text-white overflow-x-hidden'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
