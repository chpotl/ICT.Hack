import React from "react"
import { Button } from "../Buttons/Button"

export const SignUpLogin = () => {
  return (
    <form>
      <div className='flex justify-center items-center'>
        <Button title='Создать' className='border' onClick={() => {}} />
        <span>/</span>
        <Button title='Войти в профиль' className='border' onClick={() => {}} />
      </div>
      {/* <h1 className='font-bold text-4xl'>Создать/Войти в профиль</h1> */}
      <h2 className='font-normal text-lightGray'>
        Доступ к бесконечным возможностям
      </h2>
      <div className='border'>
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
