import { Dispatch, FC, SetStateAction } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui"

type SelectFieldProps = {
  placeholder: string
  selectValues: any[]
  setValue: Dispatch<SetStateAction<any>>
}

export const SelectField: FC<SelectFieldProps> = ({
  placeholder,
  selectValues,
  setValue,
}) => {
  return (
    <Select onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectValues?.map((value) => (
            <SelectItem value={value} id={value}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
