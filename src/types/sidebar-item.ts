import { USER_TYPE } from "@/constant"
import { ReactElement } from "react"

export type SidebarItem = {
  id?: string
  path: string
  label: string
  icon: ReactElement
  visibleBy: USER_TYPE[]
}
