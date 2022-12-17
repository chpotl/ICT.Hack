import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export const Logo = () => {
  return (
    <Link to={"/"}>
      <div className='px-[50px] py-[16px] rounded-[20px] bg-lightBlack'>
        <img src={logo} alt='logo' />
      </div>
    </Link>
  )
}
