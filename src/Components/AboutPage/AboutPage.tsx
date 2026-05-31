import SocialList from '../SocialList'
import styles from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <h1>Смотри! — больше чем кино. Это ваш идеальный кинопоказ</h1>
      <p className={styles.text}>Областная сеть „Смотри!“ создана для тех, кто ценит качество, комфорт и современные технологии. Мы превращаем каждый поход в кино в незабываемое событие — с кристальным изображением, мощным звуком и безупречным сервисом</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h2 className={styles.title}>🎬 Наша история</h2>
          <p>С 2018 года мы выросли из одного зала в сеть из 12 кинотеатров. Наша миссия — доступное кино для всех без компромиссов.</p>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.title}>💡 Технологии</h2>
          <p>«4K-проекторы, Dolby Atmos, интерактивные схемы залов и онлайн-бронирование за 60 секунд.</p>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.title}>❤️ Философия</h2>
          <p>Удобство для вас — наш главный приоритет. От уютных кресел до понятного мобильного приложения.</p>
        </li>
      </ul>
      <address className={styles.address}>
        <h2>Есть вопросы? <br /> Пишите</h2>
        <a href="mailto:support@smotri.ru" className={styles.email}>✉️ support@smotri.ru</a>
        <a href="tel:88000000000" className={styles.phone}>☎️ 8 (800) 000-00-00</a>
        <SocialList />
      </address>
    </div>
  )
}

export default AboutPage