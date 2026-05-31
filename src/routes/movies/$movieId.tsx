import { movieQueryOptions } from '@/api/movieQueryOptions'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import ArrowSvg from '@/Components/ArrowSvg'
import Container from '@/Components/Container'
import Link from '@/Components/Link'
import MoviePage from '@/Components/MoviePage'
import Nav from '@/Components/Nav'
import NotFoundPage from '@/Components/NotFoundPage'

export const Route = createFileRoute('/movies/$movieId')({
  component: RouteComponent,
  loader: ({ params, context }) => {
    context.queryClient.ensureQueryData(movieQueryOptions(params.movieId))

    return { movieId: params.movieId }
  },
  errorComponent: () => <Container><NotFoundPage /></Container>
})

function RouteComponent() {
  const { movieId } = Route.useLoaderData()

  const { data: movie } = useSuspenseQuery(movieQueryOptions(movieId))

  return <>
    <Nav>
      <Link to='/' variant='stroke'>
        Афиша
      </Link>
      <ArrowSvg />
      <Link to='/movies/$movieId' params={{ movieId: movie.id }} variant='stroke'>
        {movie.title}
      </Link>
    </Nav>
    <Container>
      <MoviePage movie={movie} />
    </Container>
  </>
}