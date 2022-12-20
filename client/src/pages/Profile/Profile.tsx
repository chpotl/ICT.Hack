import React, { Suspense } from "react"
import { Link } from "react-router-dom"
import { useQuery } from "wagmi"
import { Wrapper } from "../../components/Forms/Wrapper"
import { UserService } from "../../services/user"
import defaultAvatar from "../../assets/default_avatar.jpg"

const Profile = () => {
  const { data, isError, isLoading } = useQuery(
    ["user"],
    () => UserService.getMe(),
    {
      select: (data) => data.user,
    }
  )

  return (
    <Wrapper>
      <section className='overflow-hidden rounded-[20px]'>
        <div
          className={`h-60 rounded-[20px] relative z-0 ${
            !data?.coverUrl && "border border-lightGray"
          }`}
        >
          {data?.coverUrl && (
            <img
              src={data?.coverUrl}
              alt='cover'
              className='w-full object-cover'
            />
          )}

          <div
            className={
              "h-[190px] w-[190px] left-20 absolute top-1/2 -translate-y-1/2 border border-lightGray rounded-full flex justify-center items-center overflow-hidden"
            }
          >
            <img
              src={data?.avatarUrl || defaultAvatar}
              //src='https://i.ytimg.com/an_webp/74ThcF5JqzU/mqdefault_6s.webp?du=3000&sqp=CI7Ghp0G&rs=AOn4CLBdsyKGErtnfqeC25IdrF7bJHreAw'
              alt='profile'
              className='object-cover h-full w-full'
            />
          </div>
        </div>
      </section>

      <Wrapper>
        <section className='grid grid-cols-3'>
          <div className='space-x-2 flex flex-col'>
            <div className='flex gap-x-2'>
              <h2 className='text-2xl font-bold'>
                {data?.firstName} {data?.secondName}
              </h2>
              <span className='text-2xl font-normal '>
                {data?.location?.country.name}
              </span>
            </div>
            <div className='flex flex-col'>
              <span>{data?.username}</span>
            </div>
          </div>

          <div className='flex items-center justify-center gap-x-5 socials text-2xl font-normal text-darkGreen'>
            <a target={"_blank"} href={data?.socials?.twitter}>
              Twitter
            </a>
            <a target={"_blank"} href={data?.socials?.telegram}>
              Telegram
            </a>
            <a target={"_blank"} href={data?.socials?.github}>
              GitHub
            </a>
          </div>

          <div className='flex justify-end items-center'>
            <Link to={"/profile-update"}>
              <span className='underline'>Редактировать профиль</span>
            </Link>
          </div>
        </section>
      </Wrapper>

      <Wrapper>
        <h2 className='text-2xl font-bold'>Bio</h2>
        <p>{data?.bio}</p>
      </Wrapper>

      <div className='skills mt-5 border border-lightGray p-5 rounded-[20px]'>
        <span className=' text-2xl font-bold'>Роли</span>
        <div className='flex flex-wrap gap-5'>
          {data?.roles.map((role) => (
            <div className='bg-white p-2 text-black rounded-2xl font-bold text-xxl'>
              {role.name}
            </div>
          ))}
        </div>
      </div>

      <div className='skills mt-5 border border-lightGray p-5 rounded-[20px]'>
        <span className=' text-2xl font-bold'>Навыки</span>
        <div className='flex flex-wrap gap-5'>
          {data?.skills.map((skill) => (
            <div className='bg-white p-2 text-black rounded-2xl font-bold text-xxl'>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Profile
