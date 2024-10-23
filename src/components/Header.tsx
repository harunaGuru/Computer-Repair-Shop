import React from 'react'
import { UserRound, File, Home } from 'lucide-react'
import NavButton from '@/components/NavButton'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggler'

export default function Header() {
  return (
    <div className=' animate-slide sticky z-20 h-12 border-b top-0 bg-background  p-2'>
        <div className='flex h-8 justify-between items-center w-full'>
            {/* left */}
            <div className='flex items-center gap-2'>
                <NavButton href='/home' icon={Home} label='Home'/>
                <Link href='/home' className='flex justify-center items-center gap-2 mt-0' title='Home'><h2 className='m-0 mt-1 hidden sm:block text-xl font-bold'>Computer Repair Shop</h2></Link>
            </div>
            <div className='flex items-center'>
                <NavButton href='/customers' icon={UserRound} label='Customers' />
                <NavButton href='/tickets' icon={File} label='Tickets' />
                <ModeToggle />
            </div>
        </div>
    </div>
  )
}
