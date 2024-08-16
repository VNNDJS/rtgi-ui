import { FC, HTMLAttributes, InputHTMLAttributes } from "react"
import { cn } from "@/lib"
import { Input } from "../ui"

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  labelCls?: HTMLAttributes<HTMLLabelElement>["className"]
  inputCls?: HTMLAttributes<HTMLInputElement>["className"]
  label?: string
}

export const TextField: FC<TextFieldProps> = ({
  inputCls,
  labelCls,
  id,
  placeholder,
  type,
  label,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label className={cn("merriweather-regular text-sm", labelCls)}>
        {label}
      </label>
      <Input
        required={required}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={cn(
          "ring-0 focus-within:outline-none focus:outline-none",
          inputCls,
        )}
      />
    </div>
  )
}
