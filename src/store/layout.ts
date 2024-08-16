import { create } from "zustand"

type Layout = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const useLayoutStore = create<Layout>()((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),
}))
