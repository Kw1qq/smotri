import Container from '../Container'
import styles from './CinemasPage.module.css'

import { motion } from 'motion/react'

const CinemasPage = () => {

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.top}>
          <motion.div
            initial={{
              y: 50,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.location}
          >
            <h1>СМОТРИ</h1>
            <address className={styles.address}>ул. Боевая, 25</address>
          </motion.div>
        </div>
      </Container>
      <div className={styles.bottom}>
        <Container className={styles.container}>
          <h2>О кинотеатре</h2>
          <p>В кинозалах «Смотри!» каждая деталь создана для вашего комфорта и ярких впечатлений:</p>
          <ul className={styles.list}>
            <motion.li
              className={styles.card}
              initial={{
                y: 50,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
            >
              Изображение: Лазерные проекторы 4K Ultra HD передают мельчайшие детали с идеальной цветопередачей.
            </motion.li>
            <motion.li
              className={styles.card}
              initial={{
                y: 50,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
            >
              Звук: Dolby Atmos® с 32 динамиками создает «купол звука» — вы ощущаете гром с неба и шепот за спиной.
            </motion.li>
            <motion.li
              className={styles.card}
              initial={{
                y: 50,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
            >
              Кресла: Модели Premium+ с ортопедической поддержкой, подогревом и 120° регулировкой. Расстояние между рядами — 1.3 м (можно проходить, не вставая!).
            </motion.li>
          </ul>
          <iframe
            className={styles.map}
            src="https://yandex.ru/map-widget/v1/?ll=48.029777%2C46.336608&mode=poi&poi%5Bpoint%5D=48.022981%2C46.338487&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1101071932&z=16.4"
            allowFullScreen={true}
            style={{ position: 'relative' }}
          />
        </Container>
      </div>
    </div>
  )
}

export default CinemasPage