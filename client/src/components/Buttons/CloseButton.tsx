import React, { FC } from "react"
import { Cross } from "../Icons/Cross"

type TCloseButton = {
  close: () => void
  color: string
}

export const CloseButton: FC<TCloseButton> = ({ close, color }) => {
  return (
    <button
      onClick={close}
      type='button'
      className='hover:bg-lightGray p-2 rounded-xl transition-colors duration-300'
    >
      <Cross color={color} />
    </button>
  )
}
