import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export const Logo = () => {
  return (
    <Link to={"/"}>
      <div className='px-[50px] py-[16px] rounded-[20px] bg-lightBlack h-full'>
        <img src={logo} alt='logo' className='w-full h-full object-contain' />
      </div>
    </Link>
  )
}
