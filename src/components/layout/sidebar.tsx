import { useLayoutStore } from "@/store"
import {
  Calendar,
  CircleUserRound,
  Menu,
  MessageSquare,
  SquareKanban,
  Trees,
} from "lucide-react"
import { motion } from "framer-motion"
import { SidebarItem as TSidebarItem } from "@/types"
import { USER_TYPE } from "@/constant"
import { SidebarItem } from "./sidebar-item"
import { LogoutButton } from "../auth"

const sidebarItems: TSidebarItem[] = [
  {
    id: "dashboard",
    path: "/dashboard",
    icon: <SquareKanban size={20} />,
    label: "Dashboard",
    visibleBy: [USER_TYPE.GREEN_REPRESENTATIVE],
  },
  {
    id: "green-space",
    path: "/green-space",
    icon: <Trees size={20} />,
    label: "Green Space",
    visibleBy: [USER_TYPE.GREEN_REPRESENTATIVE],
  },
  {
    id: "event",
    path: "/event",
    icon: <Calendar size={20} />,
    label: "Event",
    visibleBy: [USER_TYPE.GREEN_REPRESENTATIVE],
  },
  {
    id: "chat",
    path: "/chat",
    icon: <MessageSquare size={20} />,
    label: "Chat",
    visibleBy: [USER_TYPE.GREEN_REPRESENTATIVE],
  },
  {
    id: "profile",
    path: "/profile",
    icon: <CircleUserRound size={20} />,
    label: "Profile",
    visibleBy: [USER_TYPE.GREEN_REPRESENTATIVE],
  },
]

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useLayoutStore()

  return (
    <motion.aside
      initial={{ width: 250 }}
      animate={{ width: isSidebarOpen ? 250 : 70 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen shadow-md shadow-slate-400 rounded-md px-4 flex flex-col justify-between`}
    >
      <div className="flex flex-col gap-3">
        <span
          className={`w-full flex flex-row ${
            isSidebarOpen ? "justify-between" : "justify-center"
          } items-center py-5`}
        >
          {isSidebarOpen && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="quicksand-regular text-md"
            >
              RTGI
            </motion.h2>
          )}
          <Menu size={20} onClick={toggleSidebar} />
        </span>
        <ul className="flex flex-col gap-5">
          {sidebarItems?.map((sidebarItem, index) => (
            <SidebarItem
              label={sidebarItem.label}
              key={`${sidebarItem.id}-${index}`}
              isSidebarOpen={isSidebarOpen}
              path={sidebarItem.path}
              icon={sidebarItem.icon}
              visibleBy={sidebarItem.visibleBy}
            />
          ))}
        </ul>
      </div>
      <LogoutButton isSidebarOpen={isSidebarOpen} />
    </motion.aside>
  )
}
