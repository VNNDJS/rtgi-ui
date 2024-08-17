import { HeaderAdd, SelectField, TextField } from "@/components"
import { useInput } from "@/hooks"
import { generate_uuid_v4 } from "@/lib"
import { eventProvider } from "@/providers"
import { Button } from "@nextui-org/react"
import { CrupdateEvent, EventType } from "@rtgi-api/typescript-client"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

const types = [EventType.INDOOR, EventType.OUTDOOR]

export const EventAdd = () => {
  const navigate = useNavigate()
  const [type, setType] = useState<string>(EventType.OUTDOOR)
  const [event, setEvent] = useState<CrupdateEvent>({
    id: generate_uuid_v4(),
  })
  const { handleChange } = useInput(setEvent)
  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    await eventProvider.add({
      event_type: type === "OUTDOOR" ? EventType.OUTDOOR : EventType.INDOOR,
      ...event,
    })
    navigate("/event")
  }

  return (
    <section className="min-h-screen w-full p-2 flex flex-col space-y-5">
      <HeaderAdd title="New Event" />
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-5">
        <TextField
          inputCls="max-w-xs"
          label="Name"
          value={event.name}
          onChange={handleChange}
        />
        <TextField
          inputCls="max-w-xs"
          label="Begin Datetime"
          type="datetime-local"
          value={event.begin_datetime}
          onChange={handleChange}
        />
        <TextField
          inputCls="max-w-xs"
          label="End Datetime"
          type="datetime-local"
          value={event.end_datetime}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Meeting Fee"
          value={event.meeting_fee}
          onChange={handleChange}
        />
        <TextField
          inputCls="max-w-xs"
          label="Description"
          value={event.description}
          onChange={handleChange}
        />

        <TextField
          inputCls="max-w-xs"
          label="Address"
          value={event.location?.address}
          onChange={handleChange}
        />

        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Longitude"
          value={event.location?.longitude}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Latitude"
          value={event.location?.latitude}
          onChange={handleChange}
        />

        <SelectField
          placeholder="Select a type"
          selectValues={types}
          setValue={setType}
        />

        <Button
          type="submit"
          className="w-full bg-green-950 text-white shadow-sm p-2.5 rounded-xl merriweather-regular text-sm"
        >
          Submit
        </Button>
      </form>
    </section>
  )
}
