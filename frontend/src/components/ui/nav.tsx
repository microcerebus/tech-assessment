import React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { ABSINTHE_LOGO_URL, NAV_LINKS } from '@/constants'

import { Button } from './button'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-28">
      <div className="flex items-center gap-6">
        <div>
          <Image
            src={ABSINTHE_LOGO_URL}
            height={32}
            width={122}
            alt="Brand Logo"
          />
        </div>
        <div className="py-2 sm:py-4">
          {NAV_LINKS.map(link => (
            <Button
              className={cn('text-text-button no-underline', {
                'text-primary-hover hover:no-underline': link === 'Badges',
              })}
              variant="link"
              key={link}
            >
              {link}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
