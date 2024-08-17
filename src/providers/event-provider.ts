import { base, fetcher } from "@/api"
import { notify } from "@/lib"
import { ApiError } from "@/types"
import {
  ExceptionModel,
  EventModel,
  GetEvents200Response,
  CrupdateEvent,
} from "@rtgi-api/typescript-client"

export const eventProvider = {
  getOne: async (id: string) => {
    try {
      return await fetcher<EventModel>(
        `${base.RTGI_API_URL}/events`,
        "GET",
        {
          event_id: id,
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
  add: async (toAdd: CrupdateEvent) => {
    try {
      return await fetcher<EventModel>(
        `${base.RTGI_API_URL}/events/${toAdd.id}`,
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
  update: async (toUpdate: EventModel) => {
    try {
      return await fetcher<EventModel>(
        `${base.RTGI_API_URL}/events/${toUpdate.id}`,
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
  list: async (page: number, page_size: number, green_space_id?: string) => {
    try {
      return await fetcher<GetEvents200Response>(
        `${base.RTGI_API_URL}/events`,
        "GET",
        {
          page,
          page_size,
          green_space_id,
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
