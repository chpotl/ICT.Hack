import React from "react"

type Props = {
  children: React.ReactNode
}

export const AppBody = ({ children }: Props) => {
  return (
    <main className='relative w-screen h-screen mx-auto bg-black text-white overflow-hidden'>
      {children}
    </main>
  )
}
