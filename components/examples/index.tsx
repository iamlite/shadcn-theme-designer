import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AuthenticationPage from './authentication/page'
import CardsPage from './cards/page'
import DashboardPage from './dashboard/page'
import MailPage from './mail/page'
import MusicPage from './music/page'
import PlaygroundPage from './playground/page'

export default function Showcase() {
  return (
    <div className='relative flex flex-col h-full'>
      <Tabs
        defaultValue='cards'
        className='flex flex-col'>
        <TabsList className='max-w-6xl mx-auto w-full'>
          <TabsTrigger
            className='w-full'
            value='cards'>
            Cards
          </TabsTrigger>
          <TabsTrigger
            className='w-full'
            value='auth'>
            Authentication
          </TabsTrigger>
          <TabsTrigger
            className='w-full'
            value='dashboard'>
            Dashboard
          </TabsTrigger>
          <TabsTrigger
            className='w-full'
            value='mail'>
            Mail
          </TabsTrigger>
          <TabsTrigger
            className='w-full'
            value='music'>
            Music
          </TabsTrigger>
          <TabsTrigger
            className='w-full'
            value='playground'>
            Playground
          </TabsTrigger>
        </TabsList>

        <div className='flex-grow flex flex-col overflow-y-auto px-8 py-4 w-full'>
          <TabsContent
            value='cards'
            className='flex-grow'>
            <CardsPage />
          </TabsContent>
          <TabsContent
            value='auth'
            className='flex-grow'>
            <AuthenticationPage />
          </TabsContent>
          <TabsContent
            className='flex-grow'
            value='dashboard'>
            <DashboardPage />
          </TabsContent>
          <TabsContent value='mail'>
            <MailPage />
          </TabsContent>
          <TabsContent
            className='flex-grow'
            value='music'>
            <MusicPage />
          </TabsContent>
          <TabsContent
            className='flex-grow'
            value='playground'>
            <PlaygroundPage />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
