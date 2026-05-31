import { moviesQueryOptions } from '@/api/moviesQueryOptions'
import Container from '@/Components/Container'
import MovieList from '@/Components/MovieList'
import Skeleton from '@/Components/Skeleton'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/')({
  component: Home,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(moviesQueryOptions(0))
  },
  pendingComponent: () => <Container><Skeleton /></Container> 
})

function Home() {
  const { data: movies } = useSuspenseQuery(moviesQueryOptions(0))

  return (
    <Container>
      <MovieList movies={movies}/>
    </Container>
  )
}
