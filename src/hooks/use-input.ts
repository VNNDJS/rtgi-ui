import { Dispatch, SetStateAction, ChangeEvent } from "react"

export function useInput<T extends Record<string, any>>(
  setState: Dispatch<SetStateAction<T>>,
) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.target
    const keys = id.split(".")

    setState((prev) => {
      const updateNestedState = (
        obj: any,
        keys: string[],
        value: string | number,
        index: number = 0,
      ): any => {
        if (index === keys.length - 1) {
          const finalValue = type === "number" ? Number(value) : value
          return { ...obj, [keys[index]]: finalValue }
        }
        return {
          ...obj,
          [keys[index]]: updateNestedState(
            obj[keys[index]] || {},
            keys,
            value,
            index + 1,
          ),
        }
      }

      const finalValue = type === "number" ? Number(value) : value
      return updateNestedState(prev, keys, finalValue)
    })
  }

  return { handleChange }
}
