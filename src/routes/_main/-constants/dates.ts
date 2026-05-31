const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const otherDates = Array(3).fill(0).map((_, i) => {
  const now = new Date()
  now.setDate(now.getDate() + i + 1)
  let title = `${now.getDate()} ${months[now.getMonth()]}`

  if (i === 0) {
    title = 'Завтра'
  }

  return {
    title,
    date: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
    index: i + 1
  }
})

interface Dates {
  title: string,
  to: string,
  date: string,
  index: number
}

export const DATES = [
  { title: 'Сегодня', to: '/', index: 0 },
  ...otherDates
] as Dates[]