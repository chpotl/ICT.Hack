import React, { FC } from "react"
import { Search } from "../Icons/Search"
import { SlashShortCut } from "./SlashShortCut"

interface Props {
  placeholder: string
}

export const SearchInput: FC<Props> = ({ placeholder }) => {
  return (
    <label>
      <div className='flex items-center bg-lightBlack p-2 rounded-[20px] space-x-2 px-5'>
        <div>
          <Search />
        </div>
        <input
          placeholder={placeholder}
          className='bg-lightBlack border-none outline-none w-full text-2xl text-white placeholder:text-white'
        />
        <SlashShortCut />
      </div>
    </label>
  )
}
