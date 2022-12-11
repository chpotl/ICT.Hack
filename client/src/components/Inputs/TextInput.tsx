import React, { FC, HTMLInputTypeAttribute } from "react"

export interface ITextInput {
  value: string
  setValue: () => void
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
  name?: string
  error?: any
}

export const TextInput: FC<ITextInput> = ({
  name,
  value,
  setValue,
  placeholder,
  type,
  error,
}) => {
  return (
    <input
      type={type}
      name={name}
      className={`font-bold text-2xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack p-[22px] w-full rounded-[20px] outline-none ${
        error ? "border-red-600" : ""
      }`}
      onChange={setValue}
      value={value}
      placeholder={placeholder}
    />
  )
}
