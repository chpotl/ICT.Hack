import React from "react"
import { Search } from "../Icons/Search"
import { SlashShortCut } from "./SlashShortCut"

export const TextInput = () => {
  return (
    <label>
      <div className='flex items-center bg-lightBlack p-2 rounded-[20px] border-2 border-lightGray space-x-2 px-5'>
        <div>
          <Search />
        </div>
        <input
          placeholder='Искать грант'
          className='bg-lightBlack border-none outline-none w-full text-2xl text-white placeholder:text-white'
        />
        <SlashShortCut />
      </div>
    </label>
  )
}
