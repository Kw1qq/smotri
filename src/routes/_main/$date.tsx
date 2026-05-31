import { createFileRoute, redirect } from '@tanstack/react-router'
import { DATES } from './-constants/dates'
import { moviesQueryOptions } from '@/api/moviesQueryOptions'
import { useSuspenseQuery } from '@tanstack/react-query'
import Container from '@/Components/Container'
import MovieList from '@/Components/MovieList'
import Skeleton from '@/Components/Skeleton'

export const Route = createFileRoute('/_main/$date')({
  component: RouteComponent,
  loader: ({ params, context }) => {
    const index = DATES.find((date) => date.date === params.date)?.index
    if (!index) {
      throw redirect({ to: '/' })
    }

    context.queryClient.ensureQueryData(moviesQueryOptions(index))
    return { index }
  },
  pendingComponent: () => <Container><Skeleton /></Container> 
})

function RouteComponent() {
  const { index } = Route.useLoaderData()

  const { data: movies } = useSuspenseQuery(moviesQueryOptions(index))

  return (
    <Container>
      <MovieList movies={movies} />
    </Container>
  )
}
