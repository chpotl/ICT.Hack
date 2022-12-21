import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useCookies } from "react-cookie"

export const useToken = () => {
  // const [cookies, setCookies] = useCookies()

  // useEffect(() => {
  //   setCookies("value", "3476545783454735")
  // }, [])

  // console.log(cookies)

  const [token, setToken] = useState(Cookies.get("jwt") || "")

  return {
    token,
    setToken,
  }
}
