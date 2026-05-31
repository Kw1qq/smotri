import type { MovieType } from '@/types/movieType'
import styles from './MovieList.module.css'
import MovieCard from '../MovieCard'

import { AnimatePresence, motion } from 'motion/react'

interface MovieListProps {
  movies: MovieType[]
}

const MovieList = (props: MovieListProps) => {
  const { movies } = props

  return (
    <motion.ul layoutScroll className={styles.list}>
      <AnimatePresence>
        {movies.map(movie => (
          <motion.li
            className={styles.listItem}
            layout={!window.matchMedia("(max-width: 992px)").matches}
            key={movie.id}
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              ease: 'anticipate',
              duration: 0.3
            }}
          >
            <MovieCard movie={movie} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}

export default MovieList