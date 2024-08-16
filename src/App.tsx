import { SnackbarProvider } from "notistack"
import { AppRoutes } from "./routes"

function App() {
  return (
    <>
      <AppRoutes />
      <SnackbarProvider />
    </>
  )
}

export default App
