import {
  AddButton,
  GreenSpaceCard,
  HeaderList,
  NextButton,
  PreviousButton,
} from "@/components"
import { usePagination } from "@/hooks"
import { greenSpaceProvider } from "@/providers"
import { useQuery } from "@tanstack/react-query"

export const GreenSpaceList = () => {
  const { page, pageSize, decrease, increase } = usePagination()
  const { data, isFetching } = useQuery({
    queryKey: ["green-space-list"],
    queryFn: async () => {
      return await greenSpaceProvider.list(page, pageSize)
    },
  })
  if (isFetching) return <p>isFetching</p>
  return (
    <section className="min-h-screen w-full p-2 flex flex-col space-y-5">
      <HeaderList resource="green-space" title="Green Spaces" />
      <ul className="gap-4 grid grid-cols-3">
        {data?.data?.map((gs, index) => (
          <GreenSpaceCard gs={gs} key={`${index}-${gs.id}`} />
        ))}
      </ul>
      <footer className="w-full flex flex-row justify-end items-center">
        <PreviousButton onClick={decrease} has_previous={data?.has_previous} />
        <NextButton onClick={increase} />
      </footer>
    </section>
  )
}
