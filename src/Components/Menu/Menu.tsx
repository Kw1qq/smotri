import { AnimatePresence, motion } from "motion/react"

import styles from './Menu.module.css'

import MainNav from "../MainNav"
import BurgerButton from "../BurgerButton"
import { useEffect, type Dispatch } from "react"
import { createPortal } from "react-dom"

interface MenuProps {
  open: boolean,
  setOpen: Dispatch<boolean>
}

const Menu = (props: MenuProps) => {
  const { open, setOpen } = props

  useEffect(() => {
    document.documentElement.style.overflowY = open ? 'hidden' : 'auto'
  }, [open])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if(e.target !== e.currentTarget) {
      setOpen(false)
    }
  }

  return createPortal((
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.menu}
          transition={{
            ease: "easeInOut",
            duration: 0.2
          }}
          initial={{
            backgroundColor: 'rgba(0,0,0,0)'
          }}
          animate={{
            backgroundColor: 'rgba(0, 0, 0, 0.71)'
          }}
          exit={{
            backgroundColor: 'rgba(0,0,0,0)'
          }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            transition={{
              ease: "easeInOut",
              duration: 0.2
            }}
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            className={styles.content}
            onClick={handleClick}
          >
            <div className={styles.wrapper}>
              <BurgerButton onClick={() => setOpen(false)} />
            </div>
            <MainNav direction="col" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  ),
    document.querySelector('#menu-layer')!
  )
}

export default Menu