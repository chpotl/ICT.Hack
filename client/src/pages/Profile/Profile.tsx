import React from "react"
import { ProfileAvatar } from "../../components/Avatar/ProfileAvatar"
import { ProfileForm } from "../../components/Forms/ProfileForm"
import { Wrapper } from "../../components/Forms/Wrapper"

export const Profile = () => {
  return (
    <Wrapper>
      <div className='relative'>
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
          className={
            "h-[190px] w-[190px] rounded-full absolute -bottom-20 left-20"
          }
        />
      </div>
    </Wrapper>
  )
}
