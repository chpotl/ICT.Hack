import { FC } from "react"
import { IProject } from "../../types/types"
import { Button } from "../Buttons/Button"
import { Tag } from "./Tag"
import { Link } from "react-router-dom"
import { useQuery } from "wagmi"
import axios from "axios"
import { freeCashFlowConverter } from "../../utils/freeCashFlowConverter"

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
      <div className='border border-lightGray rounded-[20px] overflow-hidden'>
        <img
          src={`${import.meta.env.VITE_API_URL}/${project.coverUrl}`}
          className='h-60 w-full object-cover'
        />

        <div className='flex flex-col p-5'>
          <div className='flex flex-wrap gap-2 mb-5'>
            {project.tags.map((tag) => {
              return <Tag title={tag} />
            })}
          </div>
          <div className='flex justify-between'>
            <div>
              <h2 className='text-[32px] font-bold'>{project.name}</h2>
            </div>
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
          </div>

          <div className='text-base'>
            от{" "}
            <span className=' text-darkGreen '>
              @{project.creator.username}
            </span>
          </div>

          <h3>{project.shortDescription?.slice(0, 100)}...</h3>

          <div className='flex flex-col'>
            <span className='text-[32px] font-bold'>
              ~ {project.investments} р.
            </span>
            <span>инвестиции</span>
          </div>

          <div className='text-xl'>
            FCF:{" "}
            <span className=' text-darkGreen'>
              {freeCashFlowConverter(project.freeCashFlow)}
            </span>
          </div>

          <div className='mb-[37px] text-xl'>
            Срок реализации{" "}
            <span className=' text-darkGreen'>{project.realisation}</span>
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
