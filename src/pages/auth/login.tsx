import { AuthForm, TextField } from "@/components"
import { Button } from "@nextui-org/react"
import { useState } from "react"
import { Credentials } from "@rtgi-api/typescript-client"
import { useInput, useSign } from "@/hooks"
import { Link } from "react-router-dom"

export const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  })
  const { handleChange } = useInput<Credentials>(setCredentials)
  const { onSubmit, status } = useSign("login", credentials)

  return (
    <AuthForm id="login">
      <div className="w-1/2 h-full"></div>
      <form
        onSubmit={onSubmit}
        className="w-1/2 h-full flex flex-col items-center space-y-12 p-5"
      >
        <h1 className="w-full text-center text-2xl font-semibold merriweather-regular">
          Welcome back
        </h1>
        <span className="w-full space-y-5">
          <TextField
            onChange={handleChange}
            label="Email"
            value={credentials.email}
            id="email"
            placeholder="email@example.com"
          />
          <TextField
            onChange={handleChange}
            label="Password"
            value={credentials.password}
            id="password"
            placeholder="password"
          />

          <Button
            isLoading={status === "idle" ? false : true}
            type="submit"
            className="bg-green-950 text-white w-full p-2.5 shadow-sm rounded-xl merriweather-regular text-sm"
          >
            Submit
          </Button>
        </span>
        <Link to={"/sign-up"} className="text-xs merriweather-regular">
          Don't have an account ?
        </Link>
      </form>
    </AuthForm>
  )
}
