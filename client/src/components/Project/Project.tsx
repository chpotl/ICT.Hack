import React from "react"
import photo from "../../assets/project_logo.png"
import { Button } from "../Button/Button"
import { Tag } from "./Tag"

export const Project = () => {
  const tags = [
    "скам",
    "web3",
    "скам",
    "web3",
    "скам",
    "web3",
    "скам",
    "web3",
    "скам",
    "web3",
  ]

  return (
    <div className='border border-lightGray rounded-[20px] overflow-hidden'>
      <img src={photo} className='h-60 w-full object-cover' />

      <div className='flex flex-col p-5'>
        <div className='flex flex-wrap gap-2 mb-[10px]'>
          {tags.map((tag) => (
            <Tag title={tag} />
          ))}
        </div>
        <div className='flex flex-col mb-[10px]'>
          <span className='text-[32px] font-bold'>Trade Court</span>
          <span className='font-normal text-base'>
            от <span className='text-darkGreen'>@chpotl</span>
          </span>
        </div>
        <div className='break-words'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            cumque.
          </p>
        </div>

        <div className='flex flex-col mb-[13px]'>
          <span className='text-[32px] font-bold'>~ 60 000 р.</span>
          <span>полученные инвестиции</span>
        </div>

        <Button
          title={"Подробнее"}
          className={"bg-darkGreen py-[10px] rounded-[10px]"}
        />
      </div>
    </div>
  )
}
