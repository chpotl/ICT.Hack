import React, { FC } from "react"
import { Image } from "./Image"
import { Indicator } from "./Indicator"

interface Props {
  images: Blob[] | undefined
}

export const Slider: FC<Props> = ({ images }) => {
  return (
    <div className='h-96 flex gap-x-5 overflow-x-auto'>
      {images?.map((image) => (
        <Image url={`${import.meta.env.VITE_API_URL}/${image}`} />
      ))}
    </div>
  )
}
