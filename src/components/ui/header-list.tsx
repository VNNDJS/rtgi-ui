import { FC } from "react"
import { AddButton } from "./add-button"

type HeaderListProps = {
  title: string
  resource: string
}

export const HeaderList: FC<HeaderListProps> = ({ resource, title }) => {
  return (
    <header className="w-full flex flex-row items-center justify-between">
      <h2 className="py-2 text-xl quicksand-bold ">{title}</h2>
      <AddButton resource={resource} />
    </header>
  )
}
