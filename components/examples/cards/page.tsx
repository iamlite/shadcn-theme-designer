'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useColorContext } from '@/contexts/color-context'
import { cn } from '@/lib/utils'
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DemoCookieSettings } from './components/cookie-settings'
import { DemoCreateAccount } from './components/create-account'
import { DemoDatePicker } from './components/date-picker'

import { DemoNotifications } from './components/notifications'
import { DemoPaymentMethod } from './components/payment-method'
import UserProfileCard from './components/profile-card'
import { DemoReportAnIssue } from './components/report-an-issue'
import { DemoShareDocument } from './components/share-document'
import { DemoTeamMembers } from './components/team-members'

const MotionDiv = motion.div

function DemoContainer({ className, ...props }: HTMLMotionProps<'div'>) {
  return (
    <MotionDiv
      className={cn('flex items-center justify-center [&>div]:w-full', className)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      {...props}
    />
  )
}

function SkeletonDemo() {
  return (
    <div className='space-y-4'>
      <Skeleton className='h-60 w-full' />
      <Skeleton className='h-60 w-full' />
      <Skeleton className='h-60 w-full' />
    </div>
  )
}

export default function CardsPage() {
  const { isLoaded } = useColorContext()
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      setShouldAnimate(true)
    }
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <div className='h-full w-full'>
        <div className='items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3'>
          <div className='col-span-2 grid items-start gap-6 lg:col-span-1'>
            <SkeletonDemo />
          </div>
          <div className='col-span-2 grid items-start gap-6 lg:col-span-1'>
            <SkeletonDemo />
          </div>
          <div className='col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1'>
            <SkeletonDemo />
          </div>
        </div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {shouldAnimate && (
          <motion.div
            className='items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3'
            variants={containerVariants}
            initial='hidden'
            animate='visible'>
            <div className='col-span-2 grid items-start gap-6 lg:col-span-1'>
              <DemoContainer>
                <DemoCreateAccount />
              </DemoContainer>
              <DemoContainer>
                <DemoDatePicker />
              </DemoContainer>
              <DemoContainer>
                <DemoPaymentMethod />
              </DemoContainer>
            </div>
            <div className='col-span-2 grid items-start gap-6 lg:col-span-1'>
              <DemoContainer>
                <DemoTeamMembers />
              </DemoContainer>
              <DemoContainer>
                <DemoShareDocument />
              </DemoContainer>

              <DemoContainer>
                <DemoCookieSettings />
              </DemoContainer>
            </div>
            <div className='col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1'>
              <DemoContainer>
                <DemoReportAnIssue />
              </DemoContainer>
              <DemoContainer>
                <UserProfileCard />
              </DemoContainer>
              <DemoContainer>
                <DemoNotifications />
              </DemoContainer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
