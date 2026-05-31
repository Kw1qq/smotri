import styles from './Footer.module.css'

import MainNav from "../MainNav"
import Container from "../Container"
import Icon from "../Icon"
import SocialList from '../SocialList'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Container>
          <Icon />
        </Container>
      </div>
      <div className={styles.footerWrapper}>
        <Container className={styles.footerInner}>
          <div className={styles.leftSide}>
            <MainNav direction="col" />

            <div className={styles.social}>
              <h2>Социальные сети</h2>
              <SocialList />
            </div>
          </div>

          <div className={styles.rightSide}>
            <address className={styles.contacts}>
              <h2>Контакты</h2>
              <a href="tel:88000000000" className={styles.phone}>8 (800) 000-00-00</a>
            </address>
            <div>
              <h2>Время работы</h2>
              <time>С 10:00 до 00:00</time>
            </div>
          </div>
        </Container>
        <Container>
          <small className={styles.copyright}>
            © 2025. Все права защищены<br />Разработано в АГПК
          </small>
        </Container>
      </div>
    </footer>
  )
}

export default Footer