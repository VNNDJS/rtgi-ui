import { getCached } from "@/lib"
import { Navigate, Outlet } from "react-router-dom"
import { Sidebar } from "../layout"

export const Authenticated = () => {
  const id = getCached("id")
  const type = getCached("type")

  if (!id || !type) {
    return <Navigate to="/login" replace={true} />
  }

  return (
    <main className="min-h-screen w-full flex flex-row gap-5">
      <Sidebar />
      <Outlet />
    </main>
  )
}
