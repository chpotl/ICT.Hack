import React from "react"
import { Link } from "react-router-dom"
import { Wrapper } from "../../components/Forms/Wrapper"

export const Profile = () => {
  return (
    <Wrapper>
      <section className=''>
        <img
          src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
          alt=''
          className='h-60 rounded-[20px] w-full object-cover'
        />

        <img
          src={
            "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          }
          alt=''
          className={"h-[190px] w-[190px] rounded-full -bottom-20 left-20"}
        />
      </section>

      <section className='flex justify-between gap-x-2 items-center'>
        <div className='space-x-2'>
          <span className='text-2xl font-bold'>Леонид Зотов</span>
          <span className='text-2xl font-normal '>Россия</span>
        </div>

        <div className='flex items-center gap-x-5 socials text-2xl font-normal text-darkGreen'>
          <a href=''>Twitter</a>
          <a href=''>Telegram</a>
          <a href=''>GitHub</a>
        </div>

        <Link to={"/profile-update"}>
          <span className='underline'>Редактировать профиль</span>
        </Link>
      </section>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </Wrapper>
  )
}
