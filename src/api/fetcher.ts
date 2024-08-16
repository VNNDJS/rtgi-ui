import { getCached, notify } from "@/lib"
import { ApiError } from "@/types"
import axios, { Method, AxiosRequestConfig } from "axios"

type ParamsValue = string | number | boolean | undefined

export const fetcher = async <T>(
  url: string,
  method: Method,
  params?: Record<string, ParamsValue>,
  body?: unknown,
  abortDelay?: number,
  needAuth: boolean = false,
): Promise<T | undefined> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      params,
      url,
      data: body,
    }

    // Check if authentication is required and set Authorization header accordingly
    if (needAuth) {
      const accessToken = await getCached("access_token")
      if (!accessToken) throw new Error("No access token provided")
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }

    // Handle abort signal if abortDelay is provided
    if (abortDelay) {
      const controller = new AbortController()
      config.signal = controller.signal
      setTimeout(() => controller.abort(), abortDelay)
    }

    // Execute the Axios request with the configured settings
    return (await axios<T>(config)).data
  } catch (error) {
    notify((error as ApiError<string>).response?.data, "error")
    return
  }
}
