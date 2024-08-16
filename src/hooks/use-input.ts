import { Dispatch, SetStateAction, ChangeEvent } from "react"

// The setter function is passed as the hook parameter
export function useInput<T>(setState: Dispatch<SetStateAction<T>>) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setState((prev) => ({ ...prev, [id]: value }))
  }

  return { handleChange }
}
