import { AuthForm, SelectField, TextField } from "@/components"
import { Button } from "@nextui-org/react"
import { useState } from "react"
import { SignUpUser } from "@rtgi-api/typescript-client"
import { useInput, useSign } from "@/hooks"
import { Link } from "react-router-dom"
import { generate_uuid_v4 } from "@/lib"
import { getUserType, USER_TYPE } from "@/constant"

const types = [USER_TYPE.COMMON, USER_TYPE.GREEN_REPRESENTATIVE]

export const SignUp = () => {
  const [signPayload, setSignPayload] = useState<SignUpUser>({
    email: "",
    password: "",
    id: generate_uuid_v4(),
  })
  const [type, setType] = useState<string>(USER_TYPE.COMMON)
  const { handleChange } = useInput<SignUpUser>(setSignPayload)
  const { onSubmit, status } = useSign("signup", {
    ...signPayload,
    type: getUserType(type),
  })

  return (
    <AuthForm id="signup">
      <div className="w-1/2 h-full"></div>
      <form
        onSubmit={onSubmit}
        className="w-1/2 h-full flex flex-col items-center space-y-8 p-5"
      >
        <h1 className="text-2xl font-semibold merriweather-regular">Join Us</h1>
        <span className="w-full space-y-4">
          <TextField
            onChange={handleChange}
            label="Email"
            value={signPayload.email}
            id="email"
            placeholder="email@example.com"
          />
          <TextField
            onChange={handleChange}
            label="Password"
            value={signPayload.password}
            id="password"
            placeholder="password"
          />
          <SelectField
            placeholder="Select a type"
            selectValues={types}
            setValue={setType}
          />
          <Button
            isLoading={status === "idle" ? false : true}
            type="submit"
            className="w-full bg-green-950 text-white shadow-sm p-2.5 rounded-xl merriweather-regular text-sm"
          >
            Submit
          </Button>
        </span>
        <Link to={"/login"} className="text-xs merriweather-regular">
          Already have an account
        </Link>
      </form>
    </AuthForm>
  )
}
