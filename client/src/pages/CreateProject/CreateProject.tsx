import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { IProject } from "../../types/types"
import { Form } from "../../components/Forms/Form"
import { EnterInput } from "../../components/Inputs/EnterInput"
import { Label } from "../../components/Inputs/Label"
import { Title } from "../../components/Forms/Title"
import { TextArea } from "../../components/Inputs/TextArea"
import { Dropdown } from "../../components/Dropdowns/Dropdown"
import { DownloadInput } from "../../components/Inputs/DownloadInput"
import { Button } from "../../components/Buttons/Button"
import { TextInput } from "../../components/Inputs/TextInput"
import { Wrapper } from "../../components/Forms/Wrapper"

const CreateProject = () => {
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
      <Title title='Общие данные' />
      <Wrapper>
        <Label label={"Название проекта"} required>
          <TextInput
            name={"name"}
            value={formik.values.name}
            setValue={() => formik.handleChange}
            placeholder={"мой крутой проект"}
            type={"text"}
          />
        </Label>

        <Label required={true} label={"Категория"}>
          <Dropdown
            title='Категория'
            data={["1", "2", "3"]}
            selectOption={""}
            select={""}
            onSelect={() => {}}
          />
        </Label>

        <Label label={"Теги"} required>
          <EnterInput
            enterTitle='нажмите Enter после ввода тега'
            selectors={tags}
            setSelectors={setTags}
            placeholder={"теги проекта"}
          />
        </Label>
      </Wrapper>

      <Title title='Описание проекта' />
      <Wrapper>
        <Label label='Короткое описание' required>
          <TextArea
            maxLength={280}
            value={""}
            setValue={() => {}}
            placeholder={"Платформа для привлечения инвестиций стартапами"}
          />
        </Label>

        <Label label='Полное описание' required>
          <TextArea
            maxLength={600}
            value={""}
            setValue={() => {}}
            placeholder={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per ..."
            }
          />
        </Label>

        <Label label='Сайт проекта'>
          <TextInput
            value={""}
            setValue={() => {}}
            placeholder={"https://hooli.com"}
            type={"text"}
          />
        </Label>

        <Label label='Команда'>
          <EnterInput
            enterTitle='нажмите Enter после ввода имени пользователя'
            selectors={team}
            setSelectors={setTeam}
            label={"Команда"}
            placeholder={"имя пользователя"}
          />
        </Label>
      </Wrapper>

      <Title title='Презентация' />
      <Wrapper>
        <div className='flex space-x-2'>
          <DownloadInput />
          <DownloadInput />
        </div>
        <DownloadInput />

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5'>
          <DownloadInput />

          <DownloadInput />

          <DownloadInput />

          <DownloadInput />

          <DownloadInput />

          <DownloadInput />
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
          type='reset'
          title={"Очистить все"}
          className={"py-[16px] text-black bg-white rounded-[20px] px-14"}
          onClick={() => formik.resetForm()}
        />
      </div>
    </Form>
  )
}

export default CreateProject
