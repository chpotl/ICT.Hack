import React, { useState } from "react"
import { Button } from "../Buttons/Button"
import { SkillButton } from "../Buttons/SkillButton"
import { Dropdown } from "../Dropdowns/Dropdown"
import { DownloadInput } from "../Inputs/DownloadInput"
import { LabelInput } from "../Inputs/LabelInput"
import { TextArea } from "../Inputs/TextArea"
import { WrapperTitle } from "../Profile/WrapperTitle"
import { Form } from "./Form"
import { Label } from "./Label"
import { useFormik } from "formik"
import * as Yup from "yup"
import { IProject } from "../../types/types"
import { EnterInput } from "../Inputs/EnterInput"

export const CreateProjectForm = () => {
  const [tags, setTags] = useState<string[]>([])
  const [team, setTeam] = useState<string[]>([])

  type InitialValues = Omit<IProject, "creator">

  const initialValues: InitialValues = {
    _id: "",
    name: "",
    category: {
      name: "",
      _id: "",
    },
    tags: [],
    shortDescription: "",
    longDescription: "",
    investments: 0,
    webSite: "",
    logoUrl: "",
    coverUrl: "",
    presentationUrl: "",
    screenShotsUrl: [],
    teamMembers: [],
    moderated: false,
    demoUrl: "",
    region: "",
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({}),
    onSubmit: () => {
      console.log(formik.errors)
      console.log(formik.values)
    },
  })

  return (
    <Form title={"Создать проект"} onSubmit={formik.handleSubmit}>
      <WrapperTitle title='Общие данные'>
        <LabelInput
          required={true}
          name={"name"}
          value={formik.values.name}
          setValue={formik.handleChange}
          placeholder={"мой крутой проект"}
          type={"text"}
          label='Название проекта'
        />

        <Label required={true} label={"Категория"}>
          <Dropdown title='Категория' data={["1", "2", "3"]} />
        </Label>

        <EnterInput
          selectors={tags}
          setSelectors={setTags}
          label={"Теги"}
          placeholder={"теги проекта"}
        />
      </WrapperTitle>

      <WrapperTitle title='Описание проекта'>
        <TextArea
          required={true}
          maxLength={280}
          label={"Короткое описание"}
          value={""}
          setValue={() => {}}
          placeholder={"Платформа для привлечения инвестиций стартапами"}
        />
        <TextArea
          required={true}
          maxLength={600}
          label={"Полное описание"}
          value={""}
          setValue={() => {}}
          placeholder={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per ..."
          }
        />
        <LabelInput
          required={false}
          value={""}
          setValue={() => {}}
          placeholder={"https://hooli.com"}
          type={"text"}
          label='Сайт проекта'
        />

        <EnterInput
          selectors={team}
          setSelectors={setTeam}
          label={"Команда"}
          placeholder={"имя пользователя"}
        />
      </WrapperTitle>

      <WrapperTitle title='Презентация'>
        <div className='flex space-x-2'>
          <Label required={true} label='Логотип'>
            <DownloadInput />
          </Label>
          <Label required={true} label='Обложка'>
            <DownloadInput />
          </Label>
        </div>
        <Label required={true} label='Презентация'>
          <DownloadInput />
        </Label>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5'>
          <Label required={true} label='Скриншоты'>
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
      </WrapperTitle>

      <div className='flex justify-between'>
        <Button
          type='submit'
          title={"Отправить на модерацию"}
          className={"py-[16px] text-black bg-darkGreen rounded-[20px] px-14"}
          onClick={() => {}}
        />
        <Button
          type='reset'
          title={"Очистить все"}
          className={"py-[16px] text-black bg-white rounded-[20px] px-14"}
          onClick={() => formik.resetForm()}
        />
      </div>
    </Form>
  )
}
