import { queryOptions } from "@tanstack/react-query";
import { movieApi } from "./movieApi";

export const movieQueryOptions = (id: string) => queryOptions({
  queryKey: ['movies', id],
  queryFn: () => movieApi.getMovie(id),
  staleTime: 1000 * 60 * 5
})