import { AuthForm, TextField } from "@/components"
import { useState } from "react"
import { Credentials } from "@rtgi-api/typescript-client"
import { useInput } from "@/hooks"

export const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  })
  const { handleChange } = useInput<Credentials>(setCredentials)

  return (
    <AuthForm id="login">
      <div className="w-1/2 h-full"></div>
      <form className="w-1/2 h-full flex flex-col items-center justify-center space-y-10 px-5">
        <h1 className="text-2xl font-semibold merriweather-regular">
          Welcome back
        </h1>
        <span className="w-full space-y-5">
          <TextField
            onChange={handleChange}
            label="Email"
            value={credentials.email}
            id="email"
          />
          <TextField
            onChange={handleChange}
            label="Password"
            value={credentials.password}
            id="password"
          />
        </span>
        <button
          type="submit"
          className="bg-green-950 text-white shadow-sm p-2.5 rounded-xl merriweather-regular text-sm"
        >
          Submit
        </button>
      </form>
    </AuthForm>
  )
}
