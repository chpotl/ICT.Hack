import React from "react"
import { Button } from "../Buttons/Button"
import { SkillButton } from "../Buttons/SkillButton"
import { Dropdown } from "../Dropdowns/Dropdown"
import { DownloadInput } from "../Inputs/DownloadInput"
import { LabelInput } from "../Inputs/LabelInput"
import { TextArea } from "../Inputs/TextArea"
import { Wrapper } from "../Profile/Wrapper"
import { Form } from "./Form"
import { Label } from "./Label"

export const CreateProjectForm = () => {
  const onSubmit = () => {}

  const tags = ["web3", "скам"]
  const team = ["@chpotl", "@ke1axaw"]

  return (
    <Form title={"Создать проект"} onSubmit={onSubmit}>
      <Wrapper title='Общие данные'>
        <LabelInput
          value={""}
          setValue={() => {}}
          placeholder={"мой крутой проект"}
          type={"text"}
          label='Название проекта'
        />

        <Label label={"Категория"}>
          <Dropdown title='Категория' data={["1", "2", "3"]} />
        </Label>

        <div>
          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"Теги проекта"}
            type={"text"}
            label='Теги'
          />

          <span className='text-gray'>нажмите Enter после ввода навыка</span>
        </div>

        <div className='flex flex-wrap gap-2 w-full'>
          {tags.map((tag, i) => (
            <SkillButton title={tag} key={i} />
          ))}
        </div>
      </Wrapper>

      <Wrapper title='Описание проекта'>
        <TextArea
          maxLength={280}
          label={"Короткое описание"}
          value={""}
          setValue={() => {}}
          placeholder={"Платформа для привлечения инвестиций стартапами"}
        />
        <TextArea
          maxLength={600}
          label={"Полное описание"}
          value={""}
          setValue={() => {}}
          placeholder={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per ..."
          }
        />
        <LabelInput
          value={""}
          setValue={() => {}}
          placeholder={"https://hooli.com"}
          type={"text"}
          label='Сайт проекта'
        />

        <div>
          <LabelInput
            value={""}
            setValue={() => {}}
            placeholder={"Теги проекта"}
            type={"text"}
            label='Теги'
          />

          <span className='text-gray'>нажмите Enter после ввода навыка</span>
        </div>

        <div className='flex flex-wrap gap-2 w-full'>
          {team.map((person, i) => (
            <SkillButton title={person} key={i} />
          ))}
        </div>
      </Wrapper>

      <Wrapper title='Презентация'>
        <div className='flex space-x-2'>
          <Label label='Логотип'>
            <DownloadInput />
          </Label>
          <Label label='Обложка'>
            <DownloadInput />
          </Label>
        </div>
        <Label label='Презентация'>
          <DownloadInput />
        </Label>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5'>
          <Label label='Скриншоты'>
            <DownloadInput />
          </Label>
          <Label label=''>
            <DownloadInput />
          </Label>
          <Label label=''>
            <DownloadInput />
          </Label>
          <Label label=''>
            <DownloadInput />
          </Label>
          <Label label=''>
            <DownloadInput />
          </Label>
          <Label label=''>
            <DownloadInput />
          </Label>
        </div>
      </Wrapper>

      <div className='flex justify-between'>
        <Button
          type='submit'
          title={"Отправить на модерацию"}
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
