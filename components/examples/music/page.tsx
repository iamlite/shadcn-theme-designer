'use client'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { CirclePlus } from 'lucide-react'
import { AlbumArtwork } from './components/album-artwork'
import { Menu } from './components/menu'
import { PodcastEmptyPlaceholder } from './components/podcast-empty-placeholder'
import { Sidebar } from './components/sidebar'
import { listenNowAlbums, madeForYouAlbums } from './data/albums'
import { playlists } from './data/playlists'

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

export default function MusicPage() {
  return (
    <motion.div
      className='flex flex-col max-h-[1000px] overflow-hidden rounded-xl border border-border '
      variants={containerVariants}
      initial='hidden'
      animate='visible'>
      <motion.div variants={itemVariants}>
        <Menu />
      </motion.div>
      <div className='flex-1 flex flex-col'>
        <div className='flex-1 bg-background'>
          <div className='h-full grid lg:grid-cols-5'>
            <motion.div variants={itemVariants}>
              <Sidebar
                playlists={playlists}
                className='hidden lg:block'
              />
            </motion.div>
            <div className='col-span-3 lg:col-span-4 lg:border-l h-full overflow-auto'>
              <div className='h-full px-4 py-6 lg:px-8'>
                <Tabs
                  defaultValue='music'
                  className='h-full flex flex-col'>
                  <motion.div
                    className='space-between flex items-center'
                    variants={itemVariants}>
                    <TabsList>
                      <TabsTrigger
                        value='music'
                        className='relative'>
                        Music
                      </TabsTrigger>
                      <TabsTrigger value='podcasts'>Podcasts</TabsTrigger>
                      <TabsTrigger
                        value='live'
                        disabled>
                        Live
                      </TabsTrigger>
                    </TabsList>
                    <div className='ml-auto mr-4'>
                      <Button>
                        <CirclePlus className='mr-2 h-4 w-4' />
                        Add music
                      </Button>
                    </div>
                  </motion.div>
                  <TabsContent
                    value='music'
                    className='border-none p-0 outline-none flex-1 overflow-auto'>
                    <motion.div variants={itemVariants}>
                      <div className='flex items-center justify-between'>
                        <div className='space-y-1'>
                          <h2 className='text-2xl font-semibold tracking-tight'>Listen Now</h2>
                          <p className='text-sm text-muted-foreground'>Top picks for you. Updated daily.</p>
                        </div>
                      </div>
                      <Separator className='my-4' />
                    </motion.div>
                    <motion.div
                      className='relative'
                      variants={itemVariants}>
                      <ScrollArea>
                        <div className='flex space-x-4 pb-4'>
                          {listenNowAlbums.map((album) => (
                            <AlbumArtwork
                              key={album.name}
                              album={album}
                              className='w-[250px]'
                              aspectRatio='portrait'
                              width={250}
                              height={330}
                            />
                          ))}
                        </div>
                        <ScrollBar orientation='horizontal' />
                      </ScrollArea>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <div className='mt-6 space-y-1'>
                        <h2 className='text-2xl font-semibold tracking-tight'>Made for You</h2>
                        <p className='text-sm text-muted-foreground'>Your personal playlists. Updated daily.</p>
                      </div>
                      <Separator className='my-4' />
                    </motion.div>
                    <motion.div
                      className='relative'
                      variants={itemVariants}>
                      <ScrollArea>
                        <div className='flex space-x-4 pb-4'>
                          {madeForYouAlbums.map((album) => (
                            <AlbumArtwork
                              key={album.name}
                              album={album}
                              className='w-[150px]'
                              aspectRatio='square'
                              width={150}
                              height={150}
                            />
                          ))}
                        </div>
                        <ScrollBar orientation='horizontal' />
                      </ScrollArea>
                    </motion.div>
                  </TabsContent>
                  <TabsContent
                    value='podcasts'
                    className='h-full flex-col border-none p-0 data-[state=active]:flex'>
                    <motion.div variants={itemVariants}>
                      <div className='flex items-center justify-between'>
                        <div className='space-y-1'>
                          <h2 className='text-2xl font-semibold tracking-tight'>New Episodes</h2>
                          <p className='text-sm text-muted-foreground'>Your favorite podcasts. Updated daily.</p>
                        </div>
                      </div>
                      <Separator className='my-4' />
                      <PodcastEmptyPlaceholder />
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
