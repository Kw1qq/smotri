import type { movieFullType } from "@/types/movieFullType"
import type { MovieType } from "@/types/movieType"

const URL = "https://smotri.vercel.app"

export const movieApi = {
  getMovies: async (index: number): Promise<MovieType[]> => {
    const res = await fetch(`${URL}/movies/${index}.json`)

    if(!res.ok) {
      throw new Error('Movie error')
    }

    const data = await res.json()

    return data.movies
  },
  getMovie: async (id: string): Promise<movieFullType> => {
    const res = await fetch(`${URL}/moviesById/${id}.json`)

    if(!res.ok) {
      throw new Error('Movie error')
    }

    const data = await res.json()

    return data
  },
}