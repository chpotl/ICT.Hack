import React, { FC } from "react"
import { Image } from "./Image"
import { Indicator } from "./Indicator"

interface Props {
  images: Blob[] | undefined
}

export const Slider: FC<Props> = ({ images }) => {
  return (
    // <>
    <div className='h-96 flex gap-x-5 overflow-x-auto'>
      {images?.map((image) => (
        <Image url={`http://127.0.0.1:3030/${image}`} />
      ))}
    </div>
    // {/* <div className='flex justify-center gap-x-2 mt-5'>
    //   {images?.map((image) => (
    //     <Indicator />
    //   ))} */}
    // {/* </div> */}
    // </>
  )
}
