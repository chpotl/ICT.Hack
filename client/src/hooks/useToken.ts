import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useCookies } from "react-cookie"

export const useToken = () => {
  const [token, setToken] = useState(Cookies.get("jwt") || "")

  return {
    token,
    setToken,
  }
}
