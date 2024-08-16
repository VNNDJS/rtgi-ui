import { useState } from "react"

export const usePagination = () => {
  const [page, setPage] = useState(1)
  const pageSize = 10

  const increase = () => {
    setPage((prev) => prev + 1)
  }

  const decrease = () => {
    setPage((prev) => prev - 1)
  }

  return { page, increase, decrease, pageSize, setPage }
}
