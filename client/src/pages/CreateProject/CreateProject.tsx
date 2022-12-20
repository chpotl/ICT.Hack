import { Form } from "../../components/Forms/Form"
import { EnterInput } from "../../components/Inputs/EnterInput"
import { Label } from "../../components/Inputs/Label"
import { Title } from "../../components/Forms/Title"
import { TextArea } from "../../components/Inputs/TextArea"
import { Dropdown } from "../../components/Dropdowns/Dropdown"
import { UploadInput } from "../../components/Inputs/UploadInput"
import { Button } from "../../components/Buttons/Button"
import { TextInput } from "../../components/Inputs/TextInput"
import { Wrapper } from "../../components/Forms/Wrapper"
import { useCreateProject } from "../../hooks/useCreateProject"
import { useQuery } from "react-query"
import { ProjectService } from "../../services/project"

const CreateProject = () => {
  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery(["categories"], () => ProjectService.getCategories(), {
    select: (data) => data.category,
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
            activeOption={values.category}
            border
            placeholder='Категория'
            selection={"_id"}
            optionSelection={"name"}
            options={categories}
            onChange={(value) => setFieldValue("category", value)}
          />
        </Label>

        <Label label={"Теги"} required>
          <EnterInput
            enterTitle='нажмите Enter после ввода тега'
            selectors={values.tags}
            setSelectors={(tags: string) => setFieldValue("tags", tags)}
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

        <Label label='freeCashFlow'>
          <TextInput
            name={"freeCashFlow"}
            value={values.freeCashFlow?.toString()}
            setValue={handleChange}
            placeholder={"freeCashFlow"}
            type={"number"}
          />
        </Label>

        <Label label='Сроки реализации'>
          <TextInput
            name={"realisation"}
            value={values.realisation}
            setValue={handleChange}
            placeholder={"когда проект будет реализован"}
            type={"string"}
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

        <Label label={"Адрес крипто кошелька"}>
          <TextInput
            name={"walletAddress"}
            value={values.walletAddress}
            setValue={handleChange}
            placeholder={"0x3c21AdC545aF820f9734eb67e504a845b897c4FF"}
            type={"text"}
          />
        </Label>

        <Label label='Команда'>
          <EnterInput
            enterTitle='нажмите Enter после ввода имени пользователя'
            selectors={values.teamMembers}
            setSelectors={(teamMembers: string) =>
              setFieldValue("teamMembers", teamMembers)
            }
            placeholder={"имя пользователя"}
          />
        </Label>
      </Wrapper>

      <Title title='Презентация' />
      <Wrapper>
        <div className='grid grid-cols-2 grid-rows-1 gap-x-2'>
          <Label label='Обложка'>
            <UploadInput
              file={values.coverUrl}
              setFile={(file: File) => setFieldValue("coverUrl", file)}
            />
          </Label>

          {/* <Label label='Обложка'>
            <UploadInput />
          </Label>
        </div>

        <Label label='Презентация'>
          <UploadInput />
        </Label>

        <Label label='Скриншоты'>
          <div className='grid grid-cols-6 gap-5'>
            <UploadInput />
            <UploadInput />
            <UploadInput />
            <UploadInput />
            <UploadInput />
            <UploadInput />
          </div> */}
          {/* </Label> */}
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
