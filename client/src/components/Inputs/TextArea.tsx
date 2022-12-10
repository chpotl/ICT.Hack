import { FC } from "react"
import { ILabelInput } from "./LabelInput"

type TTextArea = Omit<ILabelInput, "type">

interface ITextArea extends TTextArea {
  maxLength: number
}

export const TextArea: FC<ITextArea> = ({
  value,
  setValue,
  placeholder,
  label,
  maxLength,
}) => {
  return (
    <label className='w-full'>
      <div className='w-full flex justify-between'>
        <span className='font-bold text-xl'>
          {label} <span className='text-darkGreen'>*</span>
        </span>
        <span>Максимальное число символов: {maxLength}</span>
      </div>

      <textarea
        className='text-xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack px-[20px] py-[13px] w-full rounded-[20px] outline-none font-normal'
        onChange={setValue}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </label>
  )
}
