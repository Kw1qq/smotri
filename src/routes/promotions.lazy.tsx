import Container from '@/Components/Container'
import Link from '@/Components/Link'
import Nav from '@/Components/Nav'
import PromotionsPage from '@/Components/PromotionsPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/promotions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <Nav>
      <Link to='/promotions' variant='stroke'>
        Акции
      </Link>
    </Nav>
    <Container>
      <PromotionsPage />
    </Container>
  </>
}
