import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function ColorMenuSkeleton() {
  return (
    <Card className='pr-4 pl-8 pb-4 rounded-l-none border-l-0'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='py-2'>
              <Skeleton className='h-4 w-20' />
            </TableHead>
            <TableHead className='py-2'>
              <Skeleton className='h-4 w-20' />
            </TableHead>
            <TableHead className='py-2'>
              <Skeleton className='h-4 w-20' />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(24)].map((_, index) => (
            <TableRow key={index}>
              <TableCell className='py-0.5'>
                <Skeleton className='h-4 w-24' />
              </TableCell>
              <TableCell className='py-0.5'>
                <div className='flex items-center space-x-1'>
                  <Skeleton className='h-5 w-12 rounded-md' />
                </div>
              </TableCell>
              <TableCell className='py-0.5'>
                <div className='flex items-center space-x-1'>
                  <Skeleton className='h-5 w-12 rounded-md' />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Border Radius Section */}
      <div className='mt-4 border-t pt-4'>
        <Skeleton className='h-4 w-24 mb-2' />
        <div className='flex flex-wrap gap-2 justify-between'>
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className='flex items-center space-x-2'>
              <Skeleton className='h-12 w-12' />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons Section */}
      <div className='flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2 border-t mt-4 pt-4'>
        <div className='flex space-x-2'>
          <Skeleton className='h-8 w-24 rounded-md' />
          <Skeleton className='h-8 w-24 rounded-md' />
        </div>
        <div className='flex space-x-2'>
          <Skeleton className='h-8 w-20 rounded-md' />
          <Skeleton className='h-8 w-20 rounded-md' />
        </div>
      </div>
    </Card>
  )
}
