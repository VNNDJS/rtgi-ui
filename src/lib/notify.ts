import { enqueueSnackbar } from "notistack"

type Variant = "default" | "error" | "success" | "warning" | "info"

export const notify = (
  message?: string,
  variant?: Variant,
  duration = 5000,
) => {
  enqueueSnackbar(message, {
    autoHideDuration: duration,
    variant: variant,
  })
}
