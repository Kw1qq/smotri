import { useRouterState, Link as TanstackLink, type LinkProps as TanstackLinkProps } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'

import styles from './Link.module.css'
import clsx from 'clsx'

interface LinkProps extends TanstackLinkProps {
  variant?: 'withLine' | 'stroke' | 'button' | 'bold' | 'semiBold',
  className?: string
}

const Link = (props: LinkProps) => {
  const { to, variant = 'stroke', className } = props

  const currentPathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const isActive = currentPathname === to

  if (variant === 'withLine') {
    return (
      <div className={styles.wrapper}>
        <TanstackLink
          {...props}
          className={clsx(styles.link, styles[variant], className)}
          draggable="false"
          activeProps={{
            className: clsx(styles.link, styles[variant], styles.active, className)
          }}
        />
        <AnimatePresence>
          {variant === 'withLine' && isActive &&
            <motion.div
              className={styles.line}
              layout
              layoutId="line"
              transition={{
                layout: { duration: 0.2 },
                duration: 0.2
              }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
            />}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <TanstackLink
      {...props}
      className={clsx(styles.link, styles[variant], className)}
      draggable="false"
      activeProps={{
        className: clsx(styles.link, styles[variant], styles.active, className)
      }}
    />
  )
}

export default Link