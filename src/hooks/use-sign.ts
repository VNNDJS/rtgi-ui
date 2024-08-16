import { authProvider } from "@/providers"
import { Credentials, SignUpUser } from "@rtgi-api/typescript-client"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

type SignType = "login" | "signup"

type Status = "idle" | "loading"

type Payload = SignUpUser | Credentials

export const useSign = (type: SignType, payload: Payload) => {
  const [status, setStatus] = useState<Status>("idle")
  const navigate = useNavigate()
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("loading")
    const auth =
      type === "login"
        ? await authProvider.login(payload)
        : await authProvider.signup(payload)
    if (!auth) {
      setStatus("idle")
    } else {
      setStatus("idle")
      navigate(auth.type === "COMMON" ? "/green-space" : "/profile")
    }
  }
  return { onSubmit, status }
}
