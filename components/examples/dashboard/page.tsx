'use client'

import { CalendarDateRangePicker } from '@/components/examples/dashboard/components/date-range-picker'
import { Overview } from '@/components/examples/dashboard/components/overview'
import { RecentSales } from '@/components/examples/dashboard/components/recent-sales'
import { Search } from '@/components/examples/dashboard/components/search'
import TeamSwitcher from '@/components/examples/dashboard/components/team-switcher'
import { UserNav } from '@/components/examples/dashboard/components/user-nav'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function DashboardPage() {
  return (
    <motion.div
      className='flex flex-col h-full overflow-hidden'
      initial='hidden'
      animate='visible'
      variants={containerVariants}>
      <motion.div
        className='border-b'
        variants={itemVariants}>
        <div className='flex h-16 items-center px-4'>
          <TeamSwitcher />
          <div className='ml-auto flex items-center space-x-4'>
            <Search />
            <UserNav />
          </div>
        </div>
      </motion.div>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <motion.div
          className='flex items-center justify-between space-y-2'
          variants={itemVariants}>
          <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
          <div className='flex items-center space-x-2'>
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </motion.div>
        <Tabs
          defaultValue='overview'
          className='space-y-4'>
          <motion.div variants={itemVariants}>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger
                value='analytics'
                disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value='reports'
                disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger
                value='notifications'
                disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
          </motion.div>
          <TabsContent
            value='overview'
            className='space-y-4'>
            <motion.div
              className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'
              variants={containerVariants}>
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-4 w-4 text-muted-foreground'>
                        <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>$45,231.89</div>
                      <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'
              variants={containerVariants}>
              <motion.div
                className='col-span-4'
                variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className='pl-2'>
                    <Overview />
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                className='col-span-3'
                variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>You made 265 sales this month.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  )
}
