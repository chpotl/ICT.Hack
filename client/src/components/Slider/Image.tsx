import { FC } from "react"

type TImage = {
  url: string
}

export const Image: FC<TImage> = ({ url }) => {
  return <img src={url} alt={url} className='rounded-[20px]' />
}
