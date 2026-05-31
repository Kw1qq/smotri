import type { MovieType } from "@/types/movieType"

import styles from './MovieCard.module.css'

import { Link as DefaultLink } from '@tanstack/react-router'
import Link from "../Link"
import Tags from "../Tags"
import Sessions from "../Sessions"

interface MovieCardProps {
  movie: MovieType
}

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props

  return (
    <article className={styles.card} >
      <DefaultLink to="/movies/$movieId" params={{ movieId: movie.id }}>
        <img
          src={movie.img}
          alt={movie.title}
          className={styles.img}
          width={316}
          height={458}
        />
      </DefaultLink>
      <Link to="/movies/$movieId" params={{ movieId: movie.id }} className={styles.title} variant="semiBold">
        {movie.title}
      </Link>
      <Tags tags={movie.tags} />
      <Sessions sessions={movie.sessions} className={styles.sessions} />
    </article>
  )
}

export default MovieCard