import React, { FC } from "react"
import { Image } from "./Image"
import { Indicator } from "./Indicator"

interface Props {
  images: any[]
}

export const Slider: FC<Props> = ({ images }) => {
  return (
    <>
      <div className='flex gap-x-5 overflow-y-auto'>
        {images.map((image) => (
          <Image url={image} />
        ))}
      </div>
      <div className='flex justify-center gap-x-2 mt-5'>
        {images.map((image) => (
          <Indicator />
        ))}
      </div>
    </>
  )
}
