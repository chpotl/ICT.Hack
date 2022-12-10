import { FC } from "react"
import { Label } from "../Forms/Label"
import { ITextInput } from "./TextInput"

export interface ILabelInput extends ITextInput {
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
    <Label label={label}>
      <input
        type={type}
        className='text-xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack px-[20px] py-[13px] w-full rounded-[20px] outline-none font-normal'
        onChange={setValue}
        value={value}
        placeholder={placeholder}
      />
    </Label>
  )
}
