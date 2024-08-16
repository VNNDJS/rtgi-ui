import { authProvider } from "@/providers"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
  const navigate = useNavigate()
  authProvider.logout()
  navigate("/login")
}
