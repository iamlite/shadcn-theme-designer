'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export function DemoReportAnIssue() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>Report an issue</CardTitle>
        <CardDescription className='text-md'>What area are you having problems with?</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='area'>Area</Label>
            <Select defaultValue='billing'>
              <SelectTrigger id='area'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='team'>Team</SelectItem>
                <SelectItem value='billing'>Billing</SelectItem>
                <SelectItem value='account'>Account</SelectItem>
                <SelectItem value='deployments'>Deployments</SelectItem>
                <SelectItem value='support'>Support</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='subject'>Subject</Label>
            <Input
              id='subject'
              placeholder='I need help with...'
            />
          </div>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='description'>Description</Label>
          <Textarea
            id='description'
            placeholder='Please include all information relevant to your issue.'
          />
        </div>
      </CardContent>
      <CardFooter className='justify-between space-x-2 mt-0'>
        <Button
          variant='outline'
          size='sm'>
          Cancel
        </Button>
        <Button size='sm'>Submit</Button>
      </CardFooter>
    </Card>
  )
}
