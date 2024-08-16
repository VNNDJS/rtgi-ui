import { FC } from "react"
import { Show } from "../wrapper"
import { motion } from "framer-motion"
import { useLogout } from "@/hooks"
import { LogOut } from "lucide-react"

type LogoutButtonProps = {
  isSidebarOpen: boolean
}

export const LogoutButton: FC<LogoutButtonProps> = (props) => {
  return (
    <button
      onClick={() => {
        useLogout()
      }}
      className="w-full rounded-md p-2 duration-500 transition-colors gap-3 flex items-center"
    >
      <LogOut size={20} />
      <Show isTrue={props.isSidebarOpen}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="quicksand-regular text-sm"
        >
          Logout
        </motion.p>
      </Show>
    </button>
  )
}
