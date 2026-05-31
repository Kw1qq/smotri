import styles from './MainNav.module.css'

import Link from '../Link'
import clsx from 'clsx'

interface MainNavProps {
  className?: string,
  direction?: 'row' | 'col',
  underline?: boolean
}

const MainNav = (props: MainNavProps) => {
  const { className, direction = 'row', underline = false } = props

  return (
    <nav className={clsx(styles.nav, className)}>
      <ul className={clsx(styles.list, styles[direction])}>
        <li className={styles.listItem}>
          <Link to="/" variant={underline ? "withLine" : 'bold'}>Афиша</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/cinemas" variant={underline ? "withLine" : 'bold'}>Кинотеатры</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/promotions" variant={underline ? "withLine" : 'bold'}>Акции</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/about" variant={underline ? "withLine" : 'bold'}>О нас</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav