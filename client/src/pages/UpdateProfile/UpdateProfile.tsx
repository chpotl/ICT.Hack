import React, { useState } from "react"
import { BackgroundImage } from "../../components/Profile/BackgroundImage"
import { Form } from "../../components/Forms/Form"
import { Button } from "../../components/Buttons/Button"
import { Dropdown } from "../../components/Dropdowns/Dropdown"
import { Label } from "../../components/Inputs/Label"
import { EnterInput } from "../../components/Inputs/EnterInput"
import { TextArea } from "../../components/Inputs/TextArea"
import { Title } from "../../components/Forms/Title"
import { SearchInput } from "../../components/Search/SearchInput"
import { Wrapper } from "../../components/Forms/Wrapper"
import { TextInput } from "../../components/Inputs/TextInput"

const UpdateProfile = () => {
  const [skills, setSkills] = useState<string[]>([])
  const [roles, setRoles] = useState<string[]>([])

  const onSubmit = () => {}

  return (
    <Form title='Редактирование профиля' onSubmit={onSubmit}>
      <BackgroundImage />

      <Title title='Мои данные' />
      <Wrapper>
        <Label label='Ник' required>
          <TextInput
            value={""}
            setValue={() => {}}
            placeholder={"имя пользователя"}
            type={"text"}
          />
        </Label>

        <div className='flex justify-between items-center w-full gap-x-5'>
          <Label label='Имя' required>
            <TextInput
              value={""}
              setValue={() => {}}
              placeholder={"ваше имя"}
              type={"text"}
            />
          </Label>

          <Label label='Фамилия' required>
            <TextInput
              value={""}
              setValue={() => {}}
              placeholder={"ваша фамилия"}
              type={"text"}
            />
          </Label>
        </div>

        <div className='grid grid-cols-[0.5fr__1fr] gap-x-5 w-full'>
          <Label label='Страна' required>
            <Dropdown
              activeOption={""}
              placeholder={""}
              options={[]}
              onChange={() => {}}
            />
          </Label>
          <Label label='Город' required>
            <SearchInput placeholder={"город"} />
          </Label>
        </div>
      </Wrapper>

      <Title title='Обо мне' />
      <Wrapper>
        <Label label='Обо мне'>
          <TextArea
            maxLength={140}
            value={""}
            setValue={() => {}}
            placeholder={"коротко обо мне"}
          />
        </Label>

        {/* <span className='font-bold text-xl'>Роли</span>

        <div className='flex flex-wrap gap-2 w-full'>
          {roles.map((role, i) => (
            <SelectButton title={role} key={i} />
          ))}
        </div> */}
        <Label label='Роли'>
          <EnterInput
            enterTitle='нажмите Enter после ввода роли'
            selectors={roles}
            setSelectors={setRoles}
            placeholder={"мои роли"}
            type={"text"}
          />
        </Label>

        <Label label='Навыки' required>
          <EnterInput
            enterTitle='нажмите Enter после ввода навыка'
            selectors={skills}
            setSelectors={setSkills}
            placeholder={"мои навыки"}
            type={"text"}
          />
        </Label>
      </Wrapper>

      <Title title='Контакты' />
      <Wrapper>
        <div className='flex justify-between items-center gap-x-5'>
          <Label label={"Twitter"}>
            <TextInput
              value={""}
              setValue={() => {}}
              placeholder={"@"}
              type={"text"}
            />
          </Label>
          <Label label={"Telegram"}>
            <TextInput
              value={""}
              setValue={() => {}}
              placeholder={"@"}
              type={"text"}
            />
          </Label>
          <Label label='Github'>
            <TextInput
              value={""}
              setValue={() => {}}
              placeholder={"@"}
              type={"text"}
            />
          </Label>
          <Label label='Linkedin'>
            <TextInput
              value={""}
              setValue={() => {}}
              placeholder={"@"}
              type={"text"}
            />
          </Label>
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
    </Form>
  )
}

export default UpdateProfile
