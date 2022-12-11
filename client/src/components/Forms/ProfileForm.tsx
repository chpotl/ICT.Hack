import React, { useState } from "react"
import { Button } from "../Buttons/Button"
import { SelectButton } from "../Buttons/SelectButton"
import { SkillButton } from "../Buttons/SkillButton"
import { Dropdown } from "../Dropdowns/Dropdown"
import { Search } from "../Icons/Search"
import { EnterInput } from "../Inputs/EnterInput"
import { LabelInput } from "../Inputs/LabelInput"
import { TextArea } from "../Inputs/TextArea"
import { TextInput } from "../Inputs/TextInput"
import { BackgroundImage } from "../Profile/BackgroundImage"
import { WrapperTitle } from "../Profile/WrapperTitle"
import { SearchInput } from "../Search/SearchInput"
import { Form } from "./Form"
import { Label } from "./Label"

export const ProfileForm = () => {
  const [skills, setSkills] = useState<string[]>([])
  const [roles, setRoles] = useState<string[]>([])

  const onSubmit = () => {}

  return (
    <Form title='Редактирование профиля' onSubmit={onSubmit}>
      <BackgroundImage />

      <WrapperTitle title='Мои данные'>
        <LabelInput
          required={true}
          value={""}
          setValue={() => {}}
          placeholder={"имя пользователя"}
          type={"text"}
          label='Ник'
        />

        <div className='flex justify-between items-center w-full gap-x-5'>
          <LabelInput
            required={true}
            value={""}
            setValue={() => {}}
            placeholder={"ваше имя"}
            type={"text"}
            label='Имя'
          />

          <LabelInput
            required={true}
            value={""}
            setValue={() => {}}
            placeholder={"ваша фамилия"}
            type={"text"}
            label='Фамилия'
          />
        </div>

        <div className='grid grid-cols-[0.5fr__1fr] gap-x-5 w-full'>
          <Label required={true} label='Страна'>
            <Dropdown title={"страна"} data={["1", "2", "3"]} />
          </Label>
          <Label required={true} label='Город'>
            <SearchInput placeholder={"город"} />
          </Label>
        </div>
      </WrapperTitle>

      <WrapperTitle title='Обо мне'>
        <TextArea
          maxLength={140}
          label={"Описание"}
          value={""}
          setValue={() => {}}
          placeholder={"коротко обо мне"}
        />

        {/* <span className='font-bold text-xl'>Роли</span>

        <div className='flex flex-wrap gap-2 w-full'>
          {roles.map((role, i) => (
            <SelectButton title={role} key={i} />
          ))}
        </div> */}
        <EnterInput
          selectors={roles}
          setSelectors={setRoles}
          label={"Роли"}
          placeholder={"мои роли"}
        />
        <EnterInput
          selectors={skills}
          setSelectors={setSkills}
          label={"Навыки"}
          placeholder={"мои навыки"}
        />
      </WrapperTitle>

      <WrapperTitle title='Контакты'>
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
      </WrapperTitle>

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
    </Form>
  )
}
