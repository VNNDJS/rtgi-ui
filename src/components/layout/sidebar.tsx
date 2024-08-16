import { useLayoutStore } from "@/store"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

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
              className="font-rubik text-md"
            >
              RTGI
            </motion.h2>
          )}
          <Menu size={20} onClick={toggleSidebar} />
        </span>
      </div>
    </motion.aside>
  )
}
