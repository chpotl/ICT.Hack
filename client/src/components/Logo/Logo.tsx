import logo from "../../assets/logo.svg"

export const Logo = () => {
  return (
    <div className='px-[50px] py-[16px] rounded-[20px] bg-lightBlack border-2 border-lightGray'>
      <img src={logo} alt='logo' />
    </div>
  )
}
