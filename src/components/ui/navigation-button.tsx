import { ArrowLeft, ArrowRight } from "lucide-react"
import { FC } from "react"

type PreviousProps = {
  has_previous: boolean | undefined
  onClick: () => void
}

type NextProps = {
  onClick: () => void
}

export const PreviousButton: FC<PreviousProps> = ({
  has_previous,
  onClick,
}) => {
  if (has_previous) {
    return (
      <button
        className="bg-green-950 text-white p-2 rounded-lg shadow-sm"
        type="button"
        onClick={onClick}
      >
        <ArrowLeft size={20} />
      </button>
    )
  }
}

export const NextButton: FC<NextProps> = ({ onClick }) => {
  return (
    <button
      className="bg-green-950 text-white p-2 rounded-lg shadow-sm"
      type="button"
      onClick={onClick}
    >
      <ArrowRight size={20} />
    </button>
  )
}
