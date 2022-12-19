import { useState } from "react"
import Cookies from "js-cookie"

export const useToken = () => {
  const [token, setToken] = useState(Cookies.get("jwt") || "")

  console.log(token)

  return {
    token,
    setToken,
  }
}
