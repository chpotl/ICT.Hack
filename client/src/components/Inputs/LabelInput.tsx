import { FC } from "react"
import { ITextInput } from "./TextInput"

interface ILabelInput extends ITextInput {
  label: string
}

export const LabelInput: FC<ILabelInput> = ({
  value,
  setValue,
  placeholder,
  type,
  label,
}) => {
  return (
    <label className='w-full'>
      <span className='font-bold text-xl'>
        {label} <span className='text-darkGreen'>*</span>
      </span>

      <input
        type={type}
        className='text-xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack px-[20px] py-[13px] w-full rounded-[20px] outline-none font-normal'
        onChange={setValue}
        value={value}
        placeholder={placeholder}
      />
    </label>
  )
}
