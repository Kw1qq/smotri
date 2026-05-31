import Link from '@/Components/Link'
import Nav from '@/Components/Nav'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import List from './-componets/List'
import { DATES } from './-constants/dates'

export const Route = createFileRoute('/_main')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Nav>
      <List
        items={DATES}
        renderProp={(item) => (
          <Link variant='button' to={item.to ? item.to as '/' : "/$date"} params={{ date: item.date }} activeOptions={{exact: true}}>
            {item.title}
          </Link>
        )}
      />
    </Nav>
    <Outlet />
  </div>
}
