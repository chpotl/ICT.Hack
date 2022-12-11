import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { Avatar } from "../../components/Avatar/Avatar"
import { Button } from "../../components/Buttons/Button"
import { LinkButton } from "../../components/Buttons/LinkButton"
import { Wrapper } from "../../components/Forms/Wrapper"
import { Slider } from "../../components/Slider/Slider"
import { ProjectService } from "../../services/project"
import { NavLink } from "react-router-dom"

export const Project = () => {
  const images = [
    "https://images.unsplash.com/photo-1664574654521-7faf33eb9086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1670685067634-33e331493206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1670680342823-4fe90ffb0d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  ]

  const team = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "lalalla",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "lalalla",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "lalalla",
    },
  ]

  const { id } = useParams()

  const { data, isError, isLoading } = useQuery(
    ["project"],
    () => ProjectService.getById(id),
    {
      select: (data) => data.project,
    }
  )

  return (
    <Wrapper>
      <Slider images={data?.screenShotsUrl} />
      <div className='grid grid-cols-[1fr__0.6fr] gap-5 mt-5'>
        <section>
          <div className='flex flex-col gap-y-3'>
            <h1 className='font-bold text-5xl'>{data?.name}</h1>

            <p className='font-normal text-xl'>{data?.shortDescription}</p>
          </div>
          <div className='flex gap-x-5 items-center mt-[10px]'>
            {/* {/* <LinkButton
              title={"Презентация"}
              className={"p-[20px] py-[10px] text-white"}
              url=
            /> */}
            {/* <LinkButton
              title={"Demo"}
              className={"p-[20px] py-[10px] text-black bg-white"}
              url={data?.demoUrl || ""}
            /> */}

            <a target={"_blank"} href={data?.presentationUrl}>
              <div
                className={`p-[20px] py-[10px] font-bold text-2xl border rounded-[10px] border-lightGray`}
              >
                <span className='text-white'>Презентация</span>
              </div>
            </a>

            <a target={"_blank"} href={data?.demoUrl}>
              <div
                className={`p-[20px] py-[10px] font-bold text-2xl border rounded-[10px] border-lightGray bg-white`}
              >
                <span className='text-black'>Demo</span>
              </div>
            </a>
          </div>

          <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Описание</h2>
            <p>{data?.longDescription}</p>
          </div>
        </section>

        <section>
          <Wrapper>
            <div className='flex flex-col'>
              <span className='font-bold text-[32px]'>
                ~ {data?.investments} р.
              </span>
              <span>полученные инвестиции</span>
            </div>
            <div className='mt-5'>
              <span className='text-2xl font-normal'>Команда</span>
              <div className='flex flex-wrap gap-5 mt-[10px]'>
                {/* {data?.teamMembers.map((person) => (
                  <Avatar person={person} />
                ))} */}
              </div>
            </div>
          </Wrapper>
          <div className='flex gap-x-5 mt-5'>
            <Button
              title={"Инвестировать"}
              className={"bg-darkGreen rounded-[10px] w-full"}
              onClick={() => {}}
            />
            <Button
              title={"Иная поддержка"}
              className={"bg-mainGreen rounded-[10px] py-[10px] w-full"}
              onClick={() => {}}
            />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
