import { HeaderAdd, TextField } from "@/components"
import { useInput } from "@/hooks"
import { generate_uuid_v4, getCached } from "@/lib"
import { greenSpaceProvider } from "@/providers"
import { Button } from "@nextui-org/react"
import { GreenSpace } from "@rtgi-api/typescript-client"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const GreenSpaceAdd = () => {
  const navigate = useNavigate()
  const [greenSpace, setGreenSpace] = useState<GreenSpace>({
    id: generate_uuid_v4(),
    user_id: getCached("id"),
  })
  const { handleChange } = useInput(setGreenSpace)

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    await greenSpaceProvider.add(greenSpace)
    navigate("/green-space")
  }

  return (
    <section className="min-h-screen w-full p-2 flex flex-col space-y-5">
      <HeaderAdd title="New Green Space" />
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-5">
        <TextField
          inputCls="max-w-xs"
          label="Name"
          value={greenSpace.profile?.location?.name}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Area"
          value={greenSpace.profile?.area}
          onChange={handleChange}
        />
        <TextField
          inputCls="max-w-xs"
          label="Description"
          value={greenSpace.profile?.description}
          onChange={handleChange}
        />
        <TextField
          inputCls="max-w-xs"
          label="Address"
          value={greenSpace.profile?.location?.address}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Longitude"
          value={greenSpace.profile?.location?.longitude}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Latitude"
          value={greenSpace.profile?.location?.latitude}
          onChange={handleChange}
        />
        <TextField
          type="number"
          inputCls="max-w-xs"
          label="Ticket Price"
          value={greenSpace.profile?.ticket_price}
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
