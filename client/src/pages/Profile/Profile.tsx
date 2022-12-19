import React, { Suspense } from "react"
import { Link } from "react-router-dom"
import { useQuery } from "wagmi"
import { Wrapper } from "../../components/Forms/Wrapper"
import { UserService } from "../../services/user"

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
      <section>
        <div className='relative'>
          <img
            src={data?.coverUrl}
            alt=''
            className='h-60 rounded-[20px] w-full object-cover'
          />
          <img
            src={data?.avatarUrl}
            alt=''
            className={
              "h-[190px] w-[190px] rounded-full left-20 absolute top-5"
            }
          />
        </div>
      </section>

      <section className='flex justify-between gap-x-2 items-center mt-5'>
        <div className='space-x-2'>
          <span className='text-2xl font-bold'>
            {data?.firstName} {data?.secondName}
          </span>
          <span className='text-2xl font-normal '>
            {data?.location?.country.name}
          </span>
        </div>

        <div className='flex items-center gap-x-5 socials text-2xl font-normal text-darkGreen'>
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

        <Link to={"/profile-update"}>
          <span className='underline'>Редактировать профиль</span>
        </Link>
      </section>

      <p>{data?.bio}</p>

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
