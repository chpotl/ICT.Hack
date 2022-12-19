import { FC } from "react"

interface Props {
  title: string
}

export const Title: FC<Props> = ({ title }) => {
  return <span className='text-2xl text-lightGray'>{title}</span>
}
