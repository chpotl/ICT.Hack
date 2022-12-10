import React from "react"
import { Button } from "../Buttons/Button"
import { TextInput } from "../Inputs/TextInput"

export const SignUpLogin = () => {
  return (
    <form className='px-10'>
      {/* <div className='flex justify-center items-center'>
        <Button title='Создать' className='border' onClick={() => {}} />
        <span>/</span>
        <Button title='Войти в профиль' className='border' onClick={() => {}} />
      </div> */}
      <div className='flex flex-col items-center mb-5'>
        <h1 className='font-bold text-4xl mb-[10px]'>
          Создать/Войти в профиль
        </h1>
        <h2 className='font-normal text-lightGray'>
          Доступ к бесконечным возможностям
        </h2>
      </div>

      <div className='flex flex-col gap-y-[10px]'>
        <TextInput
          value=''
          setValue={() => {}}
          placeholder='Email'
          type={"email"}
        />
        <TextInput
          value=''
          setValue={() => {}}
          placeholder='Password'
          type={"password"}
        />

        <Button
          onClick={() => {}}
          title={"Создать"}
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
