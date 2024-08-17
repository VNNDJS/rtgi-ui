import { FC } from "react"

type HeaderAddProps = {
  title: string
}

export const HeaderAdd: FC<HeaderAddProps> = ({ title }) => {
  return (
    <header className="w-full flex flex-row items-center justify-between">
      <h2 className="py-2 text-xl quicksand-bold ">{title}</h2>
    </header>
  )
}
