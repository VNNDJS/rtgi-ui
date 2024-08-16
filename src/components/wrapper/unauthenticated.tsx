import { USER_ROLE } from "@/constant"
import { getCached } from "@/lib"
import { Navigate, Outlet } from "react-router-dom"

export const Unauthenticated = () => {
  const id = getCached("id")
  const role = getCached("role")

  if (id && role === USER_ROLE.GREEN_REPRESENTATIVE) {
    return <Navigate to="/profile" replace={true} />
  }

  if (id && role === USER_ROLE.COMMON) {
    return <Navigate to="/green-spaces" replace={true} />
  }

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <Outlet />
    </main>
  )
}
