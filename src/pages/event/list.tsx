import { EventCard, HeaderList, NextButton, PreviousButton } from "@/components"
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
      <HeaderList resource="event" title="Events" />
      <ul className="gap-4 grid grid-cols-3">
        {data?.data?.map((event, index) => (
          <EventCard event={event} key={`${index}-${event.id}`} />
        ))}
      </ul>
      <footer className="w-full flex flex-row justify-end items-center">
        <PreviousButton onClick={decrease} has_previous={data?.has_previous} />
        <NextButton onClick={increase} />
      </footer>
    </section>
  )
}
