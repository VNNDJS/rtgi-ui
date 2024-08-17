import { EventModel } from "@rtgi-api/typescript-client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

type EventCardProps = {
  event: EventModel
}

export const EventCard: FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate()
  return (
    <Card>
      <CardHeader
        className="cursor-pointer"
        onClick={() => navigate(`/event/${event.id}/read`)}
      >
        <CardTitle className="text-sm quicksand-bold">{event.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm quicksand-regular">
        {event.description}
      </CardContent>
      <CardFooter className="flex items-center justify-end quicksand-regular">
        <button
          className="text-sm"
          onClick={() => navigate(`/event/${event.id}/edit`)}
        >
          Edit
        </button>
      </CardFooter>
    </Card>
  )
}
