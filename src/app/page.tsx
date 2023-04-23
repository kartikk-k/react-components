import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex items-center justify-center w-screen h-screen dark:bg-gray-700'>
      {/* button component */}
      <Button className='hover:shadow-lg hover:shadow-gray-500' variant={'default'} size={'lg'}>Button</Button>

      {/* heading tag */}
      {/* <Heading level='1' size='lg'>Hello</Heading> */}

      {/* paragraph component */}
      {/* <Paragraph>Hello People</Paragraph> */}
    </main>
  )
}
