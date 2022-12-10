import React, { FC, HTMLInputTypeAttribute } from "react"

export interface ITextInput {
  value: string
  setValue: () => void
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
}

export const TextInput: FC<ITextInput> = ({
  value,
  setValue,
  placeholder,
  type,
}) => {
  return (
    <input
      type={type}
      className='font-bold text-2xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack p-[22px] w-full rounded-[20px] outline-none'
      onChange={setValue}
      value={value}
      placeholder={placeholder}
    />
  )
}
