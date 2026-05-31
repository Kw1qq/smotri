import { queryOptions } from "@tanstack/react-query";
import { movieApi } from "./movieApi";

export const moviesQueryOptions = (index: number) => queryOptions({
  queryKey: ['movies', index],
  queryFn: () => movieApi.getMovies(index),
  staleTime: 1000 * 60 * 5
})