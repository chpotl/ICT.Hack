import React from "react"
import photo from "../../assets/project_logo.png"

export const Project = () => {
  return (
    <div className='border-2 border-lightGray rounded-[20px]'>
      <img src={photo} />
      <div>
        <div className='tags'></div>

        <div className='description'>
          <span>Trade Court</span>
          <span>от @chpotl</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            cumque.
          </p>
        </div>

        <div className='investments'>
          <span>~ 60 000 р.</span>
          <span>полученные инвестиции</span>
        </div>

        <button>Подробнее</button>
      </div>
    </div>
  )
}
