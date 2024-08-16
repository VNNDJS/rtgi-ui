export const cache = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getCached = (key: string) => {
  const item = sessionStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

export const clearCache = () => {
  sessionStorage.clear()
}
