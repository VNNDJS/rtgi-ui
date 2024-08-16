import { Route, Routes } from "react-router-dom"
import { Authenticated, Unauthenticated } from "./components"
import {
  Dashboard,
  GreenSpaceAdd,
  GreenSpaceEdit,
  GreenSpaceList,
  GreenSpaceRead,
  Login,
  Profile,
  SignUp,
  EventAdd,
  EventEdit,
  EventList,
  EventRead,
} from "./pages"

export const AppRoutes = () => {
  return (
    <Routes>
      {/**
       * Route for authenticated user
       */}
      <Route path="/" element={<Authenticated />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/green-space">
          <Route index Component={GreenSpaceList} />
          <Route path="/green-space/:id/read" Component={GreenSpaceRead} />
          <Route path="/green-space/add" Component={GreenSpaceAdd} />
          <Route path="/green-space/:id/edit" Component={GreenSpaceEdit} />
        </Route>
        <Route path="/event">
          <Route index Component={EventList} />
          <Route path="/event/:id/read" Component={EventRead} />
          <Route path="/event/add" Component={EventAdd} />
          <Route path="/event/:id/edit" Component={EventEdit} />
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
