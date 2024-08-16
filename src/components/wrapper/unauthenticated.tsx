import { USER_TYPE } from "@/constant"
import { getCached } from "@/lib"
import { Navigate, Outlet } from "react-router-dom"

export const Unauthenticated = () => {
  const id = getCached("id")
  const type = getCached("type")

  if (id && type === USER_TYPE.GREEN_REPRESENTATIVE) {
    return <Navigate to="/profile" replace={true} />
  }

  if (id && type === USER_TYPE.COMMON) {
    return <Navigate to="/green-spaces" replace={true} />
  }

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <Outlet />
    </main>
  )
}
