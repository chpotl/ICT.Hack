import React, { FC, useState } from "react"
import { Button } from "../Buttons/Button"
import { TextInput } from "../Inputs/TextInput"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "react-query"
import { UserService } from "../../services/user"

interface ISignUpLogin {
  email: string
  password: string
}

interface Props {
  setUser: React.Dispatch<React.SetStateAction<any>>
  setToken: React.Dispatch<React.SetStateAction<string>>
  close: () => void
}

export const SignUpLogin: FC<Props> = ({ setUser, setToken, close }) => {
  const [loginOrSign, setLoginOrSign] = useState<"login" | "signup">("signup")

  const { mutate, isLoading } = useMutation(
    (user) => UserService.authUser(user, loginOrSign),
    {
      onSuccess: ({ data }) => {
        setUser(data.data.user)
        setToken(data.token)
        close()
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )

  const initialValues: ISignUpLogin = {
    email: "",
    password: "",
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),

    onSubmit: (values) => {
      console.log("form submitted")

      mutate({
        email: formik.values.email,
        password: formik.values.password,
      } as any)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className='px-10'>
      <div className='flex flex-col items-center mb-5'>
        <h1 className='font-bold text-4xl mb-[10px]'>
          <button
            type='button'
            className={`${
              loginOrSign === "signup" ? "text-darkGreen" : "text-lightGray"
            }`}
            onClick={() => setLoginOrSign("signup")}
          >
            Создать
          </button>
          /
          <button
            type='button'
            className={`${
              loginOrSign === "login" ? "text-darkGreen" : "text-lightGray"
            }`}
            onClick={() => setLoginOrSign("login")}
          >
            Войти
          </button>{" "}
          в профиль
        </h1>
        <h2 className='font-normal text-lightGray'>
          Доступ к бесконечным возможностям
        </h2>
      </div>

      <div className='flex flex-col gap-y-[10px]'>
        <TextInput
          name={"email"}
          value={formik.values.email}
          setValue={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
          placeholder='Email'
          type={"email"}
        />
        <TextInput
          name={"password"}
          value={formik.values.password}
          setValue={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
          placeholder='Password'
          type={"password"}
        />

        <Button
          type='submit'
          title={`${loginOrSign === "login" ? "Войти" : "Создать"}`}
          className='py-5 bg-darkGreen rounded-[20px]'
        />
      </div>

      <div className='mt-5 text-center'>
        <p>
          Авторизуясь, вы соглашаетесь с{" "}
          <span className='text-darkGreen'>
            Лицензионным соглашением и Политикой конфиденциальности
          </span>
        </p>
      </div>
    </form>
  )
}
