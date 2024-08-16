import { SidebarItem as TSidebarItem } from "@/types"
import { FC } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { Show } from "../wrapper"

type SidebarItemProps = TSidebarItem & {
  isSidebarOpen: boolean
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) =>
        `w-full rounded-md p-2 duration-500 transition-colors gap-3 flex items-center ${
          isActive && "bg-green-950 text-white"
        }  ${!props.isSidebarOpen && "justify-center"}`
      }
    >
      {props.icon}
      <Show isTrue={props.isSidebarOpen}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="quicksand-regular text-sm"
        >
          {props.label}
        </motion.p>
      </Show>
    </NavLink>
  )
}
