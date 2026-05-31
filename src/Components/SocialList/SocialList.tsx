import styles from './SocialList.module.css'

import tgImg from '@/assets/icons/tg.svg'
import instagramImg from '@/assets/icons/instagram.svg'
import vkImg from '@/assets/icons/vk.svg'
import youtubeImg from '@/assets/icons/youtube.svg'

const SocialList = () => {
  return (
    <nav>
      <ul className={styles.socialList}>
        <li className={styles.listItem}>
          <a href="" target="_blank" className={styles.link}>
            <img src={tgImg} alt="telegram" width={38} height={38} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="" target="_blank" className={styles.link}>
            <img src={instagramImg} alt="instagramm" width={38} height={38} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="" target="_blank" className={styles.link}>
            <img src={vkImg} alt="vk" width={38} height={38} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="" target="_blank" className={styles.link}>
            <img src={youtubeImg} alt="youtube" width={38} height={38} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SocialList