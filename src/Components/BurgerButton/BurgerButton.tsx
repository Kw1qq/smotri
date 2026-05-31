import type { ComponentProps } from 'react'
import styles from './BurgerButton.module.css'
import clsx from 'clsx'

interface BurgerButtonProps extends ComponentProps<'button'> {
  className?: string
}

const BurgerButton = (props: BurgerButtonProps) => {
  const { className } = props

  return (
    <button {...props} className={clsx(styles.burgerButton, className)}>
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  )
}

export default BurgerButton