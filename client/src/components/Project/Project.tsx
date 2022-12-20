import { FC } from "react"
import { IProject } from "../../types/types"
import { Button } from "../Buttons/Button"
import { Tag } from "./Tag"
import { Link } from "react-router-dom"

interface Props {
  project: IProject
}

export const Project: FC<Props> = ({ project }) => {
  const trendColorSwitch = (trendIndex: number) => {
    if (trendIndex >= 50) {
      return "text-[#F0B909]"
    }
    if (trendIndex > 80) {
      return "text-lightGreen"
    }
    return "text-[#FF2E2E]"
  }

  return (
    <Link to={`project/${project._id}`}>
      <div className='border border-lightGray rounded-[20px] overflow-hidden'>
        {/* hover:scale-105 transition-transform duration-500 easy-in-out */}
        <img src={project.logoUrl} className='h-60 w-full object-cover' />

        <div className='flex flex-col p-5'>
          <div className='flex flex-wrap gap-2 mb-[10px]'>
            {project.tags.map((tag) => {
              return <Tag title={tag} />
            })}
          </div>
          <div className='flex flex-col mb-[10px]'>
            <span className='text-[32px] font-bold'>{project.name}</span>
            <span className='font-normal text-base'>
              от{" "}
              <span className='text-darkGreen'>
                @{project.creator.username}
              </span>
            </span>
          </div>
          <div className='flex gap-x-2 items-center'>
            <span
              className={`font-bold text-[32px] ${trendColorSwitch(
                project.trendIndex
              )}`}
            >
              {project.trendIndex}
            </span>
            индекс тренда
          </div>
          <div className='break-words'>
            {project.shortDescription?.slice(0, 100)}...
          </div>
          <div className='flex flex-col mb-[13px]'>
            <span className='text-[32px] font-bold'>
              ~ {project.investments} р.
            </span>
            <span>полученные инвестиции</span>
          </div>
          <Button
            title={"Подробнее"}
            className={
              "bg-darkGreen py-[10px] rounded-[10px] text-center text-black"
            }
          />
        </div>
      </div>
    </Link>
  )
}
