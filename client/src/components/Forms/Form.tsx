import React, { FC } from "react"
import { Wrapper } from "./Wrapper"

interface Props {
  children: React.ReactNode
  onSubmit: () => void
  title: string
}

export const Form: FC<Props> = ({ children, onSubmit, title }) => {
  return (
    <Wrapper>
      <h1 className='font-bold text-4xl mb-5'>{title}</h1>
      <form className='flex flex-col gap-y-5' onSubmit={onSubmit}>
        {children}
      </form>
    </Wrapper>
  )
}
