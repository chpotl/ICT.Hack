import React, { useState } from "react"
import { useMutation } from "react-query"
import { UserService } from "../services/user"
import Cookies from "js-cookie"

export const useToken = () => {
  let jwt = Cookies.get("jwt")

  const [token, setToken] = useState(jwt || "")

  console.log(jwt)

  return {
    token,
    setToken,
  }
}
