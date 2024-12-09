'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const controlNavbar = () => {
    const currentScrollPos = window.scrollY
    const isScrollingUp = prevScrollPos > currentScrollPos

    setIsVisible(isScrollingUp || currentScrollPos < 10)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [prevScrollPos])

  return (
    <nav className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-[#272727] bg-opacity-90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-[#6C9A8B] text-2xl font-bold tracking-wider">CartoSYS</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#f1f1f1] hover:text-[#6C9A8B] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#6C9A8B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-[#f1f1f1] hover:text-[#6C9A8B] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#6C9A8B]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#f1f1f1] hover:bg-[#4A7856] hover:text-[#f1f1f1] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

