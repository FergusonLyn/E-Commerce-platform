'use client';
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"


const links = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/Men' },
    { name: 'Woman', href: '/Woman' },
    { name: 'Teens', href: '/Teens' },
];


const Navbar = () => {
    const pathname = usePathname()
  return (
    <header className="mb-10 border-b">
    <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-3xl">
      <Link href='/'>
        <h1 className="text-3xl font-bold">
          FeX 
          <span className="text-primary">Commerce</span>
        </h1>
      </Link>

      <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
        {links.map((link, idx) => (
                <div key={idx}>
                    {pathname === link.href ? (
                      <Link className='text-lg font-semibold text-primary' href={link.href}>
                            {link.name}
                      </Link>

                    ) : (
                      <Link className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary' href={link.href}>
                            {link.name}
                      </Link>

                    )

                    }
                </div>
            ))}
      </nav>

      <div className="flex divide-x border-r sm:border-l">
        <Button variant="outline">Button</Button>
      </div>

    </div>

  </header>
  )
}

export default Navbar
