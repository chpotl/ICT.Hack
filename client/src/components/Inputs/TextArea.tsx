import { FC } from "react"
import { ITextInput } from "../../types/types"

type TTextArea = Omit<ITextInput, "type">

interface ITextArea extends TTextArea {
  maxLength: number
}

export const TextArea: FC<ITextArea> = ({
  name,
  value,
  setValue,
  placeholder,
  maxLength,
}) => {
  return (
    <textarea
      spellCheck='false'
      className='text-xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack px-[20px] py-[13px] w-full rounded-[20px] outline-none font-normal'
      onChange={setValue}
      value={value}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  )
}
