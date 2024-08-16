import { USER_TYPE } from "@/constant"

export type AuthResponse = {
  authenticated: boolean
  type?: USER_TYPE
}
