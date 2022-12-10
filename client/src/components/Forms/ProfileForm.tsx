import React from "react"
import { Dropdown } from "../Dropdowns/Dropdown"
import { Search } from "../Icons/Search"
import { LabelInput } from "../Inputs/LabelInput"
import { TextInput } from "../Inputs/TextInput"
import { BackgroundImage } from "../Profile/BackgroundImage"
import { Wrapper } from "../Profile/Wrapper"
import { SearchInput } from "../Search/SearchInput"

export const ProfileForm = () => {
  return (
    <form>
      <div className='mb-5'>
        <BackgroundImage />
      </div>

      <Wrapper title='Мои данные'>
        <LabelInput
          value={""}
          setValue={() => {}}
          placeholder={"имя пользователя"}
          type={"text"}
          label='Ник'
        />

        <div className='flex justify-between items-center w-full gap-x-5'>
          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"ваше имя"}
            type={"text"}
            label='Имя'
          />

          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"ваша фамилия"}
            type={"text"}
            label='Фамилия'
          />
        </div>

        <div className='grid grid-cols-[0.5fr__1fr] gap-x-5 w-full'>
          <Dropdown title={"страна"} data={[]} />
          <SearchInput placeholder={"город"} />
        </div>
      </Wrapper>
    </form>
  )
}
