import Header from '@/components/Header'
import React from 'react'


export default function RSLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='max-w-7xl w-full mx-auto'>
        <Header />
        <div className='py-2 px-4'>
        {children}
        </div>
    </div>
  )
}
