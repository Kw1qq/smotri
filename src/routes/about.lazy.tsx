import AboutPage from '@/Components/AboutPage'
import Container from '@/Components/Container'
import Link from '@/Components/Link'
import Nav from '@/Components/Nav'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <Nav>
      <Link to='/about' variant='stroke'>
        О нас
      </Link>
    </Nav>
    <Container>
      <AboutPage />
    </Container>
  </>
}