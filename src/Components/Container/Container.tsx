import type { ReactNode } from "react"

import styles from './Container.module.css'
import clsx from "clsx"

interface ContainerProps {
  children: ReactNode,
  className?: string
}

const Container = (props: ContainerProps) => {
  const {children, className} = props

  return (
    <div className={clsx(styles.container, className)}>
      {children}
    </div>
  )
}

export default Container