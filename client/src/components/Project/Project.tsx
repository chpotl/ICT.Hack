import React, { FC } from "react"
import photo from "../../assets/project_logo.png"
import { IProject } from "../../types/types"
import { Button } from "../Buttons/Button"
import { LinkButton } from "../Buttons/LinkButton"
import { Tag } from "./Tag"

interface Props {
  project: IProject
}

export const Project: FC<Props> = ({ project }) => {
  return (
    <div className='border border-lightGray rounded-[20px] overflow-hidden '>
      {/* hover:scale-105 transition-transform duration-500 easy-in-out */}
      <img src={project.logoUrl} className='h-60 w-full object-cover' />

      <div className='flex flex-col p-5'>
        <div className='flex flex-wrap gap-2 mb-[10px]'>
          {project.tags.map((tag) => (
            <Tag title={tag} />
          ))}
        </div>
        <div className='flex flex-col mb-[10px]'>
          <span className='text-[32px] font-bold'>{project.name}</span>
          <span className='font-normal text-base'>
            от{" "}
            <span className='text-darkGreen'>@{project.creator.username}</span>
          </span>
        </div>
        <div className='break-words'>
          <p>{project.shortDescription?.slice(0, 100)}...</p>
        </div>

        <div className='flex flex-col mb-[13px]'>
          <span className='text-[32px] font-bold'>
            ~ {project.investments} р.
          </span>
          <span>полученные инвестиции</span>
        </div>

        <LinkButton
          title={"Подробнее"}
          className={
            "bg-darkGreen py-[10px] rounded-[10px] text-center text-black"
          }
          url={`project/${project._id}`}
        />
      </div>
    </div>
  )
}
