import Link from '../Link'
import styles from './NotFoundPage.module.css'

import img1 from '@/assets/images/shutter-island.png'
import img2 from '@/assets/images/shutter-island-2.png'

import { motion } from 'motion/react'

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>
        <h2>Фильм не найден</h2>
        <Link to='/' variant='button' className={styles.link}>На главную</Link>
      </div>
      <motion.img
        src={img1}
        width={600}
        className={styles.img1}
        initial={{
          opacity: 0,
          scale: 0.9,
          x: -100,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <motion.img
        src={img2}
        width={400}
        className={styles.img2}
        initial={{
          opacity: 0,
          scale: 0.9,
          x: 100,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  )
}

export default NotFoundPage