import { AddButton, NextButton, PreviousButton } from "@/components"
import { usePagination } from "@/hooks"
import { eventProvider } from "@/providers"
import { useQuery } from "@tanstack/react-query"

export const EventList = () => {
  const { page, pageSize, decrease, increase } = usePagination()
  const { data, isFetching } = useQuery({
    queryKey: ["event-list"],
    queryFn: async () => {
      return await eventProvider.list(page, pageSize)
    },
  })
  if (isFetching) return <p>isFetching</p>
  return (
    <section className="min-h-screen w-full p-2 flex flex-col space-y-5">
      <header className="w-full flex flex-row items-center justify-between">
        <h2 className="py-2 text-xl quicksand-bold ">Events</h2>
        <AddButton resource="green-space" />
      </header>
      <ul className="gap-4 grid grid-cols-3"></ul>
      <footer className="w-full flex flex-row justify-end items-center">
        <PreviousButton onClick={decrease} has_previous={data?.has_previous} />
        <NextButton onClick={increase} />
      </footer>
    </section>
  )
}
