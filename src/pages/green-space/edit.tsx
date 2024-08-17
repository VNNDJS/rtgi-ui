import { HeaderAdd, TextField } from "@/components"
import { useInput } from "@/hooks"
import { greenSpaceProvider } from "@/providers"
import { Button } from "@nextui-org/react"
import { GreenSpace } from "@rtgi-api/typescript-client"
import { useQuery } from "@tanstack/react-query"
import { ChangeEvent, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const GreenSpaceEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data } = useQuery({
    queryKey: ["green-space", id],
    queryFn: async () => {
      return await greenSpaceProvider.getOne(id ?? "")
    },
  })

  const [greenSpace, setGreenSpace] = useState<GreenSpace>({
    id,
  })
  const { handleChange } = useInput(setGreenSpace)

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    await greenSpaceProvider.update(greenSpace)
    navigate(`/green-space/${id}/read`)
  }

  return (
    <section className="min-h-screen w-full p-2 flex flex-col space-y-5">
      <HeaderAdd title={`Green Space: ${data?.profile?.location?.name}`} />
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-5">
        <TextField
          inputCls="max-w-xs"
          label="Name"
          value={data?.profile?.location?.name}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Area"
          value={data?.profile?.area}
          onChange={handleChange}
        />
        <TextField
          inputCls="max-w-xs"
          label="Description"
          value={data?.profile?.description}
          onChange={handleChange}
        />
        <TextField
          inputCls="max-w-xs"
          label="Address"
          value={data?.profile?.location?.address}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Longitude"
          value={data?.profile?.location?.longitude}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Latitude"
          value={data?.profile?.location?.latitude}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Ticket Price"
          value={data?.profile?.ticket_price}
          onChange={handleChange}
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
