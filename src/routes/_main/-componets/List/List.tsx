import type { ReactNode } from 'react'
import styles from './List.module.css'

interface ListProps<T> {
  items: T[]
  renderProp: (item: T) => ReactNode
}

const List = <T,>(props: ListProps<T>) => {
  const { items, renderProp } = props

  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li className={styles.listItem} key={i}>
          {renderProp(item)}
        </li>
      ))}
    </ul>
  )
}

export default List