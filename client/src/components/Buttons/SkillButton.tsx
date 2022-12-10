import React, { FC } from "react"
import { CloseButton } from "./CloseButton"

interface Props {
  title: string
}

export const SkillButton: FC<Props> = ({ title }) => {
  return (
    <button
      type='button'
      className='px-[21px] py-[8px] bg-white rounded-[20px] space-x-2'
    >
      <span className='text-xl text-black font-bold'>{title}</span>
      <CloseButton close={() => {}} color={"black"} />
    </button>
  )
}
