import styles from './Tags.module.css'

interface TagsProps {
  tags: string[]
}

const Tags = (props: TagsProps) => {
  const { tags } = props

  return (
    <ul className={styles.list}>
      {tags.map((tag, i) => (
        <li className={styles.tag} key={i}>{tag}</li>
      ))}
    </ul>
  )
}

export default Tags