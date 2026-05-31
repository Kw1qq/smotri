import type { ReactNode } from "react"

import styles from './Main.module.css'

interface MainProps {
  children: ReactNode
}

const Main = (props: MainProps) => {
  const { children } = props

  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Main