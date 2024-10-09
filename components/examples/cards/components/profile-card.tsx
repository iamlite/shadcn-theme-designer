'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { BellRing, Send } from 'lucide-react'
import { useState } from 'react'

export default function UserProfileCard() {
  const [notifications, setNotifications] = useState(true)

  return (
    <Card className='w-[300px] h-full'>
      <CardHeader className='flex flex-row items-center gap-4 pb-4'>
        <div className='h-12 w-12 bg-gradient-to-br from-primary via-secondary to-primary rounded-full flex items-center justify-center'>
          <Avatar className='h-10 w-10'>
            <AvatarImage src='/avatars/03.png' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-md font-semibold'>Jane Doe</h2>
          <p className='text-xs text-muted-foreground'>Product Designer</p>
        </div>
      </CardHeader>
      <CardContent className='pb-2'>
        <div className='flex items-center gap-2 mb-4'>
          <Badge variant='secondary'>UX</Badge>
          <Badge variant='outline'>UI</Badge>
          <Badge variant='default'>Research</Badge>
        </div>
        <p className='text-xs text-muted-foreground mb-4'>
          Passionate about creating intuitive and beautiful user experiences.
        </p>
        <div className='flex items-center space-x-2 mb-2'>
          <Switch
            id='notifications'
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <Label
            htmlFor='notifications'
            className='text-xs'>
            Receive notifications
          </Label>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className='flex justify-between pt-4'>
        <Button
          variant='outline'
          size='sm'>
          <Send className='h-4 w-4 mr-2' />
          Message
        </Button>
        <Button size='sm'>
          <BellRing className='h-4 w-4 mr-2' />
          Follow
        </Button>
      </CardFooter>
    </Card>
  )
}
