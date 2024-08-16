import { SnackbarProvider } from "notistack"
import { AppRoutes } from "./routes"

const SNACKBAR_DENSE = true
const MAX_SNACK = 3

function App() {
  return (
    <>
      <AppRoutes />
      <SnackbarProvider
        dense={SNACKBAR_DENSE}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        maxSnack={MAX_SNACK}
      />
    </>
  )
}

export default App
