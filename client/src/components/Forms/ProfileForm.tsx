import React from "react"
import { Button } from "../Buttons/Button"
import { SelectButton } from "../Buttons/SelectButton"
import { SkillButton } from "../Buttons/SkillButton"
import { Dropdown } from "../Dropdowns/Dropdown"
import { Search } from "../Icons/Search"
import { LabelInput } from "../Inputs/LabelInput"
import { TextArea } from "../Inputs/TextArea"
import { TextInput } from "../Inputs/TextInput"
import { BackgroundImage } from "../Profile/BackgroundImage"
import { Wrapper } from "../Profile/Wrapper"
import { SearchInput } from "../Search/SearchInput"

export const ProfileForm = () => {
  const roles = ["Разработчик", "Ученый", "Дизайнер"]
  const skills = ["Next.js", "React.js", "TypeScript"]

  return (
    <form className='flex flex-col gap-y-5'>
      <BackgroundImage />

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
          <Dropdown title={"страна"} data={["1", "2", "3"]} />
          <SearchInput placeholder={"город"} />
        </div>
      </Wrapper>

      <Wrapper title='Обо мне'>
        <TextArea
          maxLength={140}
          label={"Описание"}
          value={""}
          setValue={() => {}}
          placeholder={"коротко обо мне"}
        />

        <span className='font-bold text-xl'>Роли</span>

        <div className='flex flex-wrap gap-2 w-full'>
          {roles.map((role, i) => (
            <SelectButton title={role} key={i} />
          ))}
        </div>
        <div>
          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"мои навыки"}
            type={"text"}
            label='Навыки'
          />

          <span className='text-gray'>нажмите Enter после ввода навыка</span>
        </div>

        <div className='flex flex-wrap gap-2 w-full'>
          {skills.map((skill, i) => (
            <SkillButton title={skill} key={i} />
          ))}
        </div>
      </Wrapper>

      <Wrapper title='Контакты'>
        <div className='flex justify-between items-center gap-x-5'>
          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"@"}
            type={"text"}
            label='Twitter'
          />
          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"@"}
            type={"text"}
            label='Telegram'
          />
          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"@"}
            type={"text"}
            label='GitHub'
          />
          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"@"}
            type={"text"}
            label='LinkedIn'
          />
        </div>
      </Wrapper>

      <div className='flex justify-between'>
        <Button
          type='submit'
          title={"Сохранить"}
          className={"py-[16px] text-black bg-darkGreen rounded-[20px] px-14"}
          onClick={() => {}}
        />
        <Button
          type='button'
          title={"Очистить все"}
          className={"py-[16px] text-black bg-white rounded-[20px] px-14"}
          onClick={() => {}}
        />
      </div>
    </form>
  )
}
