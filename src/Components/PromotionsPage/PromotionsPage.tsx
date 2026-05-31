import styles from './PromotionsPage.module.css'

import { motion } from 'motion/react'

import promotions1Img from '@/assets/images/promotions-1.png'
import promotions2Img from '@/assets/images/promotions-2.png'

const PromotionsPage = () => {
  return (
    <ul className={styles.list}>
      <motion.li
        className={styles.card}
        initial={{
          x: -100,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <img src={promotions1Img} alt="Билет на скидку" className={styles.img} />
        <div className={styles.content}>
          <h2>Билет на скидку</h2>
          <p>Обменяй использованный билет на скидку 1 рубль</p>
          <a className={styles.link} target='_blank' href=''>подробнее</a>
        </div>
      </motion.li>
      <motion.li
        className={styles.card}
        initial={{
          x: -100,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
      >
        <img src={promotions2Img} alt="Всем классом" className={styles.img} />
        <div className={styles.content}>
          <h2>Всем классом</h2>
          <p>При группом посещении от 15 человек, билет 70 рублей!</p>
          <a className={styles.link} target='_blank' href=''>подробнее</a>
        </div>
      </motion.li>
    </ul>
  )
}

export default PromotionsPage