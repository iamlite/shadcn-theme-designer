'use client'

import { AccountSwitcher } from '@/components/examples/mail/components/account-switcher'
import { MailDisplay } from '@/components/examples/mail/components/mail-display'
import { MailList } from '@/components/examples/mail/components/mail-list'
import { Nav } from '@/components/examples/mail/components/nav'
import { type Mail } from '@/components/examples/mail/data'
import { useMail } from '@/components/examples/mail/use-mail'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2
} from 'lucide-react'
import * as React from 'react'

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout?: string
  defaultCollapsed?: string
  navCollapsedSize: number
}

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

export function Mail({ accounts, mails }: MailProps) {
  const [mail] = useMail()
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <div className='flex max-h-[800px] rounded-xl border border-border overflow-hidden'>
        <div className={cn('w-[20%]', isCollapsed && 'w-[50px] transition-all duration-300 ease-in-out')}>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'>
            <motion.div
              variants={itemVariants}
              className={cn('flex h-[52px] items-center justify-center', isCollapsed ? 'h-[52px]' : 'px-2')}>
              <AccountSwitcher
                isCollapsed={isCollapsed}
                accounts={accounts}
              />
            </motion.div>
            <Separator />
            <motion.div variants={itemVariants}>
              <Nav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: 'Inbox',
                    label: '128',
                    icon: Inbox,
                    variant: 'default'
                  },
                  {
                    title: 'Drafts',
                    label: '9',
                    icon: File,
                    variant: 'ghost'
                  },
                  {
                    title: 'Sent',
                    label: '',
                    icon: Send,
                    variant: 'ghost'
                  },
                  {
                    title: 'Junk',
                    label: '23',
                    icon: ArchiveX,
                    variant: 'ghost'
                  },
                  {
                    title: 'Trash',
                    label: '',
                    icon: Trash2,
                    variant: 'ghost'
                  },
                  {
                    title: 'Archive',
                    label: '',
                    icon: Archive,
                    variant: 'ghost'
                  }
                ]}
              />
            </motion.div>
            <Separator />
            <motion.div variants={itemVariants}>
              <Nav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: 'Social',
                    label: '972',
                    icon: Users2,
                    variant: 'ghost'
                  },
                  {
                    title: 'Updates',
                    label: '342',
                    icon: AlertCircle,
                    variant: 'ghost'
                  },
                  {
                    title: 'Forums',
                    label: '128',
                    icon: MessagesSquare,
                    variant: 'ghost'
                  },
                  {
                    title: 'Shopping',
                    label: '8',
                    icon: ShoppingCart,
                    variant: 'ghost'
                  },
                  {
                    title: 'Promotions',
                    label: '21',
                    icon: Archive,
                    variant: 'ghost'
                  }
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className='w-[32%]'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'>
            <Tabs defaultValue='all'>
              <motion.div
                variants={itemVariants}
                className='flex items-center px-4 py-2'>
                <h1 className='text-xl font-bold'>Inbox</h1>
                <TabsList className='ml-auto'>
                  <TabsTrigger
                    value='all'
                    className='text-zinc-600 dark:text-zinc-200'>
                    All mail
                  </TabsTrigger>
                  <TabsTrigger
                    value='unread'
                    className='text-zinc-600 dark:text-zinc-200'>
                    Unread
                  </TabsTrigger>
                </TabsList>
              </motion.div>
              <Separator />
              <motion.div
                variants={itemVariants}
                className='bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                <form>
                  <div className='relative'>
                    <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                    <Input
                      placeholder='Search'
                      className='pl-8'
                    />
                  </div>
                </form>
              </motion.div>
              <motion.div variants={itemVariants}>
                <TabsContent
                  value='all'
                  className='m-0'>
                  <MailList items={mails} />
                </TabsContent>
                <TabsContent
                  value='unread'
                  className='m-0'>
                  <MailList items={mails.filter((item) => !item.read)} />
                </TabsContent>
              </motion.div>
            </Tabs>
          </motion.div>
        </div>
        <div className='w-[48%]'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'>
            <motion.div variants={itemVariants}>
              <MailDisplay mail={mails.find((item) => item.id === mail.selected) || null} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </TooltipProvider>
  )
}
