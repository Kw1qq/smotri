import type { MovieType } from "./movieType";

export interface movieFullType extends MovieType {
  ageRating: number,
  description: string,
  rating: number,
  trailer: string,
  reviews: string[]
}