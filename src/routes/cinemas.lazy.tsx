import CinemasPage from '@/Components/CinemasPage'
import Link from '@/Components/Link'
import Nav from '@/Components/Nav'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cinemas')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <Nav>
      <Link to='/cinemas' variant='stroke'>
        Кинотеатры
      </Link>
    </Nav>
    <CinemasPage />
  </>
}
