import React, { FC, useState } from "react"
import { SkillButton } from "../Buttons/SkillButton"
import { Label } from "../Forms/Label"
import { LabelInput } from "./LabelInput"
import { ILabelInput } from "./LabelInput"

type TEnterInput = Omit<ILabelInput, "setValue">

interface Props {}

export const EnterInput: FC<TEnterInput> = ({
  label,
  required,
  type,
  name,
  placeholder,
  selectors,
  setSelectors,
}) => {
  const [textInput, setTextInput] = useState("")

  const handleSetSelectors = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSelectors([...selectors, e.target.value])
      e.preventDefault()
    }
  }

  return (
    <>
      <div>
        <Label label={label} required={required}>
          <input
            onKeyDown={(e) => handleSetSelectors(e)}
            onChange={(e) => setTextInput(e.target.value)}
            name={name}
            type={type}
            className='text-xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack px-[20px] py-[13px] w-full rounded-[20px] outline-none font-normal'
            value={textInput}
            placeholder={placeholder}
          />
        </Label>

        <span className='text-gray'>нажмите Enter после ввода навыка</span>
      </div>

      <div className='flex flex-wrap gap-2 w-full'>
        {selectors.map((select, i) => (
          <SkillButton title={select} key={i} />
        ))}
      </div>
    </>
  )
}
