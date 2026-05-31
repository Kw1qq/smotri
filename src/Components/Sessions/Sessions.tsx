import clsx from 'clsx'
import styles from './Sessions.module.css'

interface SessionsProps {
  sessions: {
    cost: number,
    time: string
  }[],
  className?: string,
}

const Sessions = (props: SessionsProps) => {
  const {sessions, className} = props

  return (
    <ul className={clsx(styles.list, className)}>
      {sessions.map((session, i) => (
        <li className={styles.session} key={i}>
          <div className={styles.time}>{session.time}</div>
          <div className={styles.cost}>{session.cost} р</div>
        </li>
      ))}
    </ul>
  )
}

export default Sessions