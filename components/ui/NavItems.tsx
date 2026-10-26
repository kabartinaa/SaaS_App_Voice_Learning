
"use client";
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import { cn } from "cn"
const navItems=[
    {label:'Home',
        href:'/'
    },
    {label:'Companions',
        href:'/companions'
    },
    {label:'My Journey',
        href:'/my-journey'
    },

]
const NavItems = () => {

    // to figure out which page we are currently on 
    const pathname=usePathname()
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({label,href}) =>
            <Link href={href} key={label} className={cn(pathname===href && "text-primary font-semibold")}>
                {label}
            </Link>
        )}

    </nav>
  )
}

export default NavItems