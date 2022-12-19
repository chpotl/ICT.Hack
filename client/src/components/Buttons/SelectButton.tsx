import React, { FC } from "react"
import { CloseButton } from "./CloseButton"

interface Props {
  title: string
  handleRemoveSelector: (title: string) => void
}

export const SelectButton: FC<Props> = ({ title, handleRemoveSelector }) => {
  return (
    <button
      type='button'
      className='px-[21px] py-[8px] bg-white rounded-[20px] space-x-2'
    >
      <span className='text-xl text-black font-bold'>{title}</span>
      <CloseButton close={() => handleRemoveSelector(title)} color={"black"} />
    </button>
  )
}
