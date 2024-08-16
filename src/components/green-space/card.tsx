import { GreenSpace } from "@rtgi-api/typescript-client"
import { FC } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui"
import { useNavigate } from "react-router-dom"

type GreenSpaceCardProps = {
  gs: GreenSpace
}

export const GreenSpaceCard: FC<GreenSpaceCardProps> = ({ gs }) => {
  const navigate = useNavigate()
  return (
    <Card className="max-w-xs h-[200px]">
      <CardHeader
        className="cursor-pointer"
        onClick={() => navigate(`/green-space/${gs.id}/read`)}
      >
        <CardTitle className="text-sm quicksand-bold">
          {gs.profile?.location?.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm quicksand-regular">
        {gs.profile?.description}
      </CardContent>
      <CardFooter className="flex items-center justify-end quicksand-regular">
        <button
          className="text-sm"
          onClick={() => navigate(`/green-space/${gs.id}/edit`)}
        >
          Edit
        </button>
      </CardFooter>
    </Card>
  )
}
