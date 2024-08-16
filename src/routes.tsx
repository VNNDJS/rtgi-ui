import { Route, Routes } from "react-router-dom"
import { Authenticated, Unauthenticated } from "./components"
import { Dashboard, GreenSpaceList, Login, Profile, SignUp } from "./pages"

export const AppRoutes = () => {
  return (
    <Routes>
      {/**
       * Route for authenticated user
       */}
      <Route path="/" element={<Authenticated />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/green-spaces">
          <Route index Component={GreenSpaceList} />
        </Route>
        <Route path="/profile" Component={Profile} />
      </Route>

      {/**
       * Route for unauthenticated user
       */}
      <Route element={<Unauthenticated />}>
        <Route path="/login" Component={Login} />
        <Route path="/sign-up" Component={SignUp} />
      </Route>
    </Routes>
  )
}
