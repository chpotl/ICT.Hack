import React, { FC } from "react"
import { Cross } from "../Icons/Cross"

type TCloseButton = {
  close: () => void
}

export const CloseButton: FC<TCloseButton> = ({ close }) => {
  return (
    <button
      onClick={close}
      className='hover:bg-lightGray p-2 rounded-xl transition-colors duration-300'
    >
      <Cross />
    </button>
  )
}
