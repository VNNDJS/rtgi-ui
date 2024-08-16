import { getCached } from "@/lib"
import { Navigate, Outlet } from "react-router-dom"

export const Authenticated = () => {
  const id = getCached("id")
  const type = getCached("type")

  if (!id || !type) {
    return <Navigate to="/login" replace={true} />
  }

  return (
    <main className="min-h-screen w-full">
      <Outlet />
    </main>
  )
}
