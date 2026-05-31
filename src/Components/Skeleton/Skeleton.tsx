import styles from './Skeleton.module.css'

const Skeleton = () => {
  const items = Array(10).fill(1)

  return (
    <ul className={styles.list}>
      {items.map((_, i) => (
        <li
          className={styles.listItem}
          key={i}
        >
          <div className={styles.card}></div>
        </li>
      ))}
    </ul>
  )
}

export default Skeleton