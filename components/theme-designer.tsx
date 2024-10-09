'use client'

import { default as ColorMenu } from '@/components/customizer/color-menu'
import Showcase from '@/components/examples'
import WelcomeCard from '@/components/welcome-card'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

export const ThemeDesigner = () => {
  const [isInterfaceVisible, setIsInterfaceVisible] = useState(true)

  return (
    <div className='relative h-full text-xs pt-4 pr-8 overflow-x-hidden'>
      {!isInterfaceVisible && (
        <Button
          variant='outline'
          onClick={() => setIsInterfaceVisible(true)}
          className={`fixed top-4 left-4 z-10 transition-transform ease-in-out duration-500 ${
            isInterfaceVisible ? 'hidden' : 'flex'
          }`}>
          <ChevronRight />
          Show Theme Designer
        </Button>
      )}

      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center'>
        <AnimatePresence>
          {isInterfaceVisible && (
            <motion.div
              layout
              key='left-panel'
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
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
            className={`flex-grow pl-4 pt-8 ${isInterfaceVisible ? '' : 'max-w-7xl mx-auto'}`}
            animate={{ width: isInterfaceVisible ? '70%' : '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut', type: 'spring', stiffness: 300, damping: 15 }}>
            <Showcase />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
