import { FC } from "react"
import { IProject } from "../../types/types"
import { Button } from "../Buttons/Button"
import { Tag } from "./Tag"
import { Link } from "react-router-dom"
import { divByMillion } from "../../utils/divByMillion"

interface Props {
  project: IProject
}

export const Project: FC<Props> = ({ project }) => {
  const trendColorSwitch = (trendIndex: number) => {
    if (trendIndex >= 50) {
      return "text-[#F0B909]"
    }
    if (trendIndex > 60) {
      return "text-lightGreen"
    }
    return "text-[#FF2E2E]"
  }

  return (
    <Link to={`project/${project._id}`}>
      <article className='flex h-full flex-col justify-between border border-lightGray rounded-[20px] overflow-hidden'>
        <img
          src={`${import.meta.env.VITE_API_URL}/${project.coverUrl}`}
          className='h-60 w-full object-cover'
        />

        <div className='flex flex-col p-5 gap-y-5 h-full'>
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => {
              return <Tag title={tag} />
            })}
          </div>

          <h2 className='text-[32px] font-bold break-words'>{project.name}</h2>

          <div className='flex items-center gap-x-[10px]'>
            <span
              className={`font-bold text-[32px] ${trendColorSwitch(
                project.trendIndex
              )}`}
            >
              {project.trendIndex}
            </span>
            <p>
              индекс <br /> тренда
            </p>
          </div>

          <h3>
            от{" "}
            <span className='text-darkGreen'>@{project.creator.username}</span>
          </h3>

          <p className='break-words'>
            {project.shortDescription?.slice(0, 100)}
          </p>

          <div className='flex flex-col'>
            <span className='text-[32px] font-bold head '>
              ~ {divByMillion(project.investments)} р.
            </span>
            <span>инвестиции</span>
          </div>

          <div className='flex flex-col text-xl'>
            <div>
              FCF:{" "}
              <span className=' text-darkGreen font-bold'>
                {divByMillion(project.freeCashFlow)} р.
              </span>
            </div>
            <div>
              Срок реализации:{" "}
              <span className=' text-darkGreen font-bold'>
                {project.realisation}
              </span>
            </div>
          </div>
        </div>
        <div className='p-5'>
          <Button
            title={"Подробнее"}
            className={"bg-darkGreen rounded-[10px] w-full text-black p-2"}
          />
        </div>
      </article>
    </Link>
  )
}
