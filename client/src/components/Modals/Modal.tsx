import React, { FC } from "react"
import { CloseButton } from "../Buttons/CloseButton"
import { Cross } from "../Icons/Cross"
import { ModalOverlay } from "./ModalOverlay"

type TModal = {
  children: React.ReactNode
  isOpen: boolean
  closeModal: () => void
}

export const Modal: FC<TModal> = ({ children, isOpen, closeModal }) => {
  return isOpen ? (
    <>
      <ModalOverlay />

      <div className='z-50 rounded-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-lightBlack flex flex-col items-center w-1/2'>
        <div className='w-full flex justify-end'>
          <CloseButton close={closeModal} color='white' />
        </div>
        {children}
      </div>
    </>
  ) : null
}
