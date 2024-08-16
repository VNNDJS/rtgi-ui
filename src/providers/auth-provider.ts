import { base, fetcher } from "@/api"
import { getUserType } from "@/constant"
import { cache, notify } from "@/lib"
import { ApiError, AuthResponse } from "@/types"
import {
  BearerToken,
  Credentials,
  ExceptionModel,
  SignUpUser,
  User,
  Whoami,
} from "@rtgi-api/typescript-client"

export const authProvider = {
  login: async (credentials: Credentials) => {
    try {
      const requestToken = await fetcher<BearerToken>(
        `${base.RTGI_API_URL}/token`,
        "POST",
        undefined,
        credentials,
      )
      cache("access_token", requestToken?.token)
      const requestWhoami = await fetcher<Whoami>(
        `${base.RTGI_API_URL}/whoami`,
        "GET",
        undefined,
        undefined,
        undefined,
        true,
      )
      cache("id", requestWhoami?.user?.id)
      cache("type", requestWhoami?.user?.profile?.type)
      // the user is authenticated
      return {
        authenticated: true,
        type: getUserType(requestWhoami?.user?.profile?.type),
      } satisfies AuthResponse
    } catch (error) {
      notify((error as ApiError<ExceptionModel>).response.data.message, "error")
      return {
        authenticated: false,
      } satisfies AuthResponse
    }
  },
  signup: async (user: SignUpUser) => {
    try {
      const requestSignUp = await fetcher<User>(
        `${base.RTGI_API_URL}/signup`,
        "PUT",
        undefined,
        user,
        undefined,
      )
      const credentials = { email: user.email, password: user.password }
      const requestToken = await fetcher<BearerToken>(
        `${base.RTGI_API_URL}/token`,
        "POST",
        undefined,
        credentials,
        undefined,
      )
      cache("id", requestSignUp?.id)
      cache("email", requestSignUp?.profile?.email)
      cache("name", requestSignUp?.profile?.name)
      cache("type", requestSignUp?.profile?.type)
      cache("access_token", requestToken?.token)
      return {
        authenticated: true,
        type: getUserType(requestSignUp?.profile?.type),
      } satisfies AuthResponse
    } catch (error) {
      notify((error as ApiError<ExceptionModel>).response.data.message, "error")
      return {
        authenticated: false,
      } satisfies AuthResponse
    }
  },
}
