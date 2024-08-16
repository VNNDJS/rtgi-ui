import { cn } from "@/lib"
import { Plus } from "lucide-react"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

type AddButtonProps = {
  resource: string
  className?: string
}

export const AddButton: FC<AddButtonProps> = ({ resource, className }) => {
  const navigate = useNavigate()
  return (
    <button
      className={cn(
        "bg-green-950 text-white p-1 rounded-lg shadow-sm",
        className,
      )}
      onClick={() => navigate(`/${resource}/add`)}
    >
      <Plus />
    </button>
  )
}
