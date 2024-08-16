import { base, fetcher } from "@/api"
import { notify } from "@/lib"
import { ApiError } from "@/types"
import {
  ExceptionModel,
  GreenSpace,
  GreenSpacesGet200Response,
} from "@rtgi-api/typescript-client"

export const greenSpaceProvider = {
  getOne: async (id: string) => {
    try {
      return await fetcher<GreenSpace>(
        `${base.RTGI_API_URL}/green-spaces`,
        "GET",
        {
          user_id: id,
        },
        undefined,
        undefined,
        true,
      )
    } catch (error) {
      notify((error as ApiError<ExceptionModel>).response.data.message, "error")
      return
    }
  },
  add: async (toAdd: GreenSpace) => {
    try {
      return await fetcher<GreenSpace>(
        `${base.RTGI_API_URL}/green-spaces/${toAdd.id}`,
        "PUT",
        undefined,
        toAdd,
        undefined,
        true,
      )
    } catch (error) {
      notify((error as ApiError<ExceptionModel>).response.data.message, "error")
      return
    }
  },
  update: async (toUpdate: GreenSpace) => {
    try {
      return await fetcher<GreenSpace>(
        `${base.RTGI_API_URL}/green-spaces/${toUpdate.id}`,
        "PUT",
        undefined,
        toUpdate,
        undefined,
        true,
      )
    } catch (error) {
      notify((error as ApiError<ExceptionModel>).response.data.message, "error")
      return
    }
  },
  list: async (page: number, page_size: number, user_id?: string) => {
    try {
      return await fetcher<GreenSpacesGet200Response>(
        `${base.RTGI_API_URL}/green-spaces`,
        "GET",
        {
          page,
          page_size,
          user_id,
        },
        undefined,
        undefined,
        true,
      )
    } catch (error) {
      notify((error as ApiError<ExceptionModel>).response.data.message, "error")
      return
    }
  },
}
