import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react';

type Props ={
    href?: string;
    label: string;
    icon: LucideIcon
}

const NavButton = ({href, label, icon: Icon}:Props) => {
  return (
    <Button variant='ghost' size='icon' title={label} aria-label={label} className='rounded-full' asChild>
        {href ? (
            <Link href={href}><Icon /></Link>
        ): (
            <Icon />
        )}
    </Button>
    
  )
}

export default NavButton