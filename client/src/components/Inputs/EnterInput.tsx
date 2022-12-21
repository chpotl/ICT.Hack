import React, { FC, useState } from "react"
import { ITextInput } from "../../types/types"
import { SelectButton } from "../Buttons/SelectButton"

type TEnterInput = Omit<ITextInput, "setValue" | "value"> & {
  setSelectors: any
  selectors: any
}

interface Props extends TEnterInput {
  enterTitle: string
}

export const EnterInput: FC<Props> = ({
  enterTitle,
  type,
  name,
  placeholder,
  selectors,
  setSelectors,
}) => {
  const [textInput, setTextInput] = useState("")

  const handleSetSelectors = (e: any) => {
    if (e.key === "Enter") {
      setSelectors([...selectors, e.target.value])
      e.preventDefault()
      setTextInput("")
    }
  }

  const handleRemoveSelector = (title: string) => {
    setSelectors(selectors.filter((select: string) => select !== title))
  }

  return (
    <>
      <input
        onKeyDown={(e) => handleSetSelectors(e)}
        onChange={(e) => setTextInput(e.target.value)}
        name={name}
        type={type}
        className='text-xl placeholder:text-lightGray text-white border border-lightGray bg-lightBlack px-[20px] py-[13px] w-full rounded-[20px] outline-none font-normal'
        value={textInput}
        placeholder={placeholder}
      />

      <span className='text-gray'>{enterTitle}</span>

      <div className='flex flex-wrap gap-2 w-full'>
        {selectors.map((select: string, i: React.Key | null | undefined) => (
          <SelectButton
            handleRemoveSelector={handleRemoveSelector}
            title={select}
            key={i}
          />
        ))}
      </div>
    </>
  )
}
