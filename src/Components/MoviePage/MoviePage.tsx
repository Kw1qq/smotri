import styles from './MoviePage.module.css'
import Tags from '../Tags'
import Sessions from '../Sessions'

import { motion } from 'motion/react'
import type { movieFullType } from '@/types/movieFullType'
import StarSvg from '../StarSvg'
import clsx from 'clsx'

interface MoviePage {
  movie: movieFullType
}

const MoviePage = (props: MoviePage) => {
  const { movie } = props

  return (
    <div className={styles.moviePage}>
      <div className={styles.top}>
        <motion.img
          src={movie.img}
          alt={movie.title}
          className={styles.img}
          width={316}
          height={458}
          initial={{
            x: -75,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.4 }}
        />
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{
              y: 20,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{ ease: 'circInOut', duration: 0.3, delay: 0.2  }}
          >
            {movie.title}
          </motion.h1>
          <p className={styles.ageRating}>{movie.ageRating}+</p>
          <Tags tags={movie.tags} />
          <Sessions sessions={movie.sessions} className={styles.sessions} />
        </div>
        <motion.p
          initial={{
            y: 50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className={styles.description}
        >
          {movie.description}
        </motion.p>
      </div>
      <motion.div
        initial={{
          y: 20,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{ ease: 'circInOut', duration: 0.3, delay: 0.4 }}
        className={styles.bottom}
      >
        <div className={styles.trailer}>
          <h2>Трейлер</h2>
          <iframe className={styles.iframe} src={`https://rutube.ru/play/embed/${movie.trailer}/?skinColor=e53935`} style={{ border: 'none' }} allow="clipboard-write; autoplay" allowFullScreen></iframe>
        </div>
        <div className={styles.rating}>
          <h2>Рейтинг фильма</h2>
          <div className={styles.scoreWrapper}>
            <h2 className={styles.score}>{movie.rating}</h2>
            {Array(5).fill(1).map((_, i) => {
              const isPainted = i + 1 <= Math.round(movie.rating) / 2
              return (
                <StarSvg key={i} width={32} height={32} className={clsx(styles.star, isPainted && styles.yellow)} />
              )
            })}

          </div>
          <ul className={styles.reviews}>
            {movie.reviews.map((review, i) => (
              <li key={i} className={styles.review}>{review}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default MoviePage