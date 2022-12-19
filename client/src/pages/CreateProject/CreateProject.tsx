import React, { useState } from "react"
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
import { useCreateProject } from "../../hooks/useCreateProject"
import { useQuery } from "react-query"
import { ProjectService } from "../../services/project"

const CreateProject = () => {
  const [tags, setTags] = useState<string[]>([])
  const [team, setTeam] = useState<string[]>([])

  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery(["categories"], () => ProjectService.getCategories(), {
    select: (data) => data.category.map((category) => category.name),
  })

  const { values, handleChange, handleSubmit, resetForm, setFieldValue } =
    useCreateProject()

  return (
    <Form title={"Создать проект"} onSubmit={handleSubmit}>
      <Title title='Общие данные' />
      <Wrapper>
        <Label label={"Название проекта"} required>
          <TextInput
            name={"name"}
            value={values.name}
            setValue={handleChange}
            placeholder={"мой крутой проект"}
            type={"text"}
          />
        </Label>

        <Label label={"Категория"} required>
          <Dropdown
            placeholder='Категория'
            options={categories}
            onChange={(value) => setFieldValue("category", value)}
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

        <Label label='Инвестиции' required>
          <TextInput
            name={"investments"}
            value={values.investments?.toString()}
            setValue={handleChange}
            placeholder={"сколько собрано инвестиций"}
            type={"number"}
          />
        </Label>
      </Wrapper>

      <Title title='Описание проекта' />
      <Wrapper>
        <Label label='Короткое описание' required>
          <TextArea
            name={"shortDescription"}
            maxLength={280}
            value={values.shortDescription}
            setValue={handleChange}
            placeholder={"Платформа для привлечения инвестиций стартапами"}
          />
        </Label>

        <Label label='Полное описание' required>
          <TextArea
            name={"longDescription"}
            maxLength={600}
            value={values.longDescription}
            setValue={handleChange}
            placeholder={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per ..."
            }
          />
        </Label>
        <Label label='Сайт проекта'>
          <TextInput
            name={"webSite"}
            value={values.webSite}
            setValue={handleChange}
            placeholder={"https://hooli.com"}
            type={"text"}
          />
        </Label>

        <Label label='Команда'>
          <EnterInput
            enterTitle='нажмите Enter после ввода имени пользователя'
            selectors={team}
            setSelectors={setTeam}
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
        />
        <Button
          type='reset'
          title={"Очистить все"}
          className={"py-[16px] text-black bg-white rounded-[20px] px-14"}
          onClick={() => resetForm()}
        />
      </div>
    </Form>
  )
}

export default CreateProject
