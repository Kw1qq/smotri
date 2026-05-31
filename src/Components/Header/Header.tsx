import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'

import styles from './Header.module.css'

import Container from '../Container'
import Icon from '../Icon'
import BurgerButton from '../BurgerButton'
import MainNav from '../MainNav'
import Menu from '../Menu'

const Header = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    if (current > previous && current > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header className={styles.header}
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Container className={styles.headerInner}>
        <Icon />
        <BurgerButton className={styles.button} onClick={() => setOpen(p => !p)} />
        <MainNav className={styles.nav} direction='row' underline />
        <Menu open={open} setOpen={setOpen}/>
      </Container>
    </motion.header>
  )
}

export default Header