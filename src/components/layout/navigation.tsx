'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navigationItems = [
  {
    label: 'About',
    href: '/about',
    items: [
      { label: 'Mission & Vision', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Democratic Clubs', href: '/about/clubs' },
      { label: 'Elected Officials', href: '/about/officials' },
      { label: 'Party Platform', href: '/about/platform' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    items: [
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      { label: 'Donate', href: '/get-involved/donate' },
      { label: 'Become a Member', href: '/get-involved/membership' },
      { label: 'Run for Office', href: '/get-involved/run-for-office' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    items: [
      { label: 'Calendar', href: '/events' },
      { label: 'Unity Dinner', href: '/events/unity-dinner' },
      { label: 'Fundraisers', href: '/events/fundraisers' },
    ],
  },
  {
    label: 'Voter Resources',
    href: '/voter-resources',
    items: [
      { label: 'Register to Vote', href: '/voter-resources/register' },
      { label: 'Polling Locations', href: '/voter-resources/polling' },
      { label: 'Election Dates', href: '/voter-resources/elections' },
      { label: 'Ride to Polls', href: '/voter-resources/ride-to-polls' },
    ],
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Shop',
    href: '/shop',
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div>
              <div className="text-xl font-bold text-blue-600 tracking-tight">BALTIMORE COUNTY</div>
              <div className="text-sm font-normal text-gray-600 tracking-wide">Democratic Central Committee</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.items ? (
                  <>
                    <button
                      className={cn(
                        'flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                        pathname.startsWith(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      )}
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        'absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all',
                        openDropdown === item.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      )}
                    >
                      <div className="py-1" role="menu">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      pathname.startsWith(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg" asChild>
              <Link href="/get-involved/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="px-4 py-6 space-y-3">
          {navigationItems.map((item) => (
            <div key={item.label}>
              {item.items ? (
                <div>
                  <button
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors',
                      pathname.startsWith(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    )}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        openDropdown === item.label ? 'rotate-180' : ''
                      )}
                    />
                  </button>
                  
                  {openDropdown === item.label && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          onClick={() => {
                            setIsOpen(false)
                            setOpenDropdown(null)
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                    pathname.startsWith(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium" asChild>
              <Link href="/get-involved/donate" onClick={() => setIsOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}