import type { ReactNode } from "react"
import Container from "../Container"

import styles from './Nav.module.css'

interface NavProps {
  children: ReactNode
}

const Nav = (props: NavProps) => {
  const { children } = props

  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        {children}
      </Container>
    </nav>
  )
}

export default Nav