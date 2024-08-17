import { cn } from "@/lib"
import { Check } from "lucide-react"
import { FC } from "react"

type CheckButtonProps = {
  className?: string
  onClick: () => void
}

export const CheckButton: FC<CheckButtonProps> = ({ className, onClick }) => {
  return (
    <button
      className={cn(
        "bg-green-950 text-white p-1 rounded-lg shadow-sm",
        className,
      )}
      onClick={onClick}
    >
      <Check />
    </button>
  )
}
