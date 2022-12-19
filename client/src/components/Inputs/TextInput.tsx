import React, { FC } from "react"
import { ITextInput } from "../../types/types"

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
      spellCheck='false'
      type={type}
      name={name}
      className={`font-normal text-xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack px-[20px] py-[13px] w-full rounded-[20px] outline-none ${
        error ? "border-red-600" : ""
      }`}
      onChange={setValue}
      value={value}
      placeholder={placeholder}
    />
  )
}
