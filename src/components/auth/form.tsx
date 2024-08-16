import { FC, PropsWithChildren } from "react"
import { BorderBeam } from "../magicui"

type AuthFormProps = PropsWithChildren & { id: string }

export const AuthForm: FC<AuthFormProps> = ({ children, id }) => {
  return (
    <section
      key={id}
      className="relative divide-x rounded-lg shadow-sm shadow-slate-400 md:w-[700px] md:h-[400px] w-350px h-[275px] flex flex-row"
    >
      {children}
      <BorderBeam size={100} duration={12} delay={9} />
    </section>
  )
}
