export interface MovieType {
  id: string,
  img: string,
  title: string,
  tags: string[],
  sessions: { time: string, cost: number }[]
}