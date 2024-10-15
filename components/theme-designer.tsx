'use client'

import { default as ColorMenu } from '@/components/customizer/color-menu'
import Showcase from '@/components/examples'
import WelcomeCard from '@/components/welcome-card'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CssOutputDialog } from './customizer/output'
import { ThemeToggle } from './customizer/theme-toggle'
import { Button } from './ui/button'

export const ThemeDesigner = () => {
  const [isInterfaceVisible, setIsInterfaceVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setHasLoaded(true)
  }, [])

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  }

  return (
    <div className='relative text-xs pt-4 md:pr-8 w-full overflow-x-hidden'>
      <AnimatePresence>
        {!isInterfaceVisible && (
          <>
            <motion.div
              key='show-designer-button'
              {...fadeAnimation}
              className='fixed top-4 left-4 z-10'>
              <Button
                size='xs'
                variant='outline'
                onClick={() => setIsInterfaceVisible(true)}
                className='transition-transform ease-in-out duration-500 flex'>
                <ChevronRight />
                Show Designer
              </Button>
            </motion.div>
            <motion.div
              key='theme-toggle'
              {...fadeAnimation}
              className='fixed top-4 right-4 z-10'>
              <ThemeToggle />
            </motion.div>
            <motion.div
              key='css-output'
              {...fadeAnimation}
              className='fixed bottom-4 right-4 z-10'>
              <CssOutputDialog />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center w-full'>
        <AnimatePresence>
          {isInterfaceVisible && (
            <motion.div
              layout
              key='left-panel'
              initial={hasLoaded ? { x: '-100%', opacity: 0 } : false}
              animate={hasLoaded ? { x: 0, opacity: 1 } : {}}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='w-full lg:w-[30%] pr-4 overflow-hidden '>
              <WelcomeCard onHideDesigner={() => setIsInterfaceVisible(false)} />
              <ColorMenu isInterfaceVisible={isInterfaceVisible} />
            </motion.div>
          )}

          <motion.div
            key='right-panel'
            layout
            className={`flex-grow md:pl-4 pt-8 ${
              isInterfaceVisible ? 'w-[90%] lg:w-[70%]' : 'md:max-w-7xl md:mx-auto w-full'
            }`}
            transition={{ duration: 0.3, ease: 'easeInOut', type: 'spring', stiffness: 300, damping: 15 }}>
            <Showcase />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
