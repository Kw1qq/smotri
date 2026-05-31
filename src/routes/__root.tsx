import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import Header from '@/Components/Header'
import Main from '@/Components/Main'
import Footer from '@/Components/Footer'
import type { QueryClient } from '@tanstack/react-query'

export const Route = createRootRouteWithContext<{queryClient: QueryClient}>()({
  component: RootComponent,
  notFoundComponent: () => <div>Film not found</div>,
})

function RootComponent() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      {/* <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
    </>
  )
}
