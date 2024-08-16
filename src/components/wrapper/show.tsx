import { FC, PropsWithChildren } from "react"

type ShowProps = PropsWithChildren & {
  isTrue: boolean
}

export const Show: FC<ShowProps> = ({ isTrue, children }) => {
  if (isTrue) return <>{children}</>
}
