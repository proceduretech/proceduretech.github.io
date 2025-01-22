'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { usePathname } from 'next/navigation'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'
import { capabilitiesData } from '@/constants/constant'

type itemsType = {
  title: string
  href: string
}

type DropdownItem = {
  title?: string
  items: itemsType[]
}

const navLinks = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
  },
  {
    id: 'capabilities',
    title: 'Capabilities',
    dropdown: capabilitiesData,
  },
  {
    id: 'industries',
    title: 'Industries',
    dropdown: [
      {
        items: [
          { title: 'Banking', href: '/industries/banking' },
          { title: 'EdTech', href: '/industries/edtech' },
          { title: 'FinTech', href: '/industries/fintech' },
          { title: 'FoodTech', href: '/industries/foodtech' },
          { title: 'InsurTech', href: '/industries/insurtech' },
          { title: 'Case Studies', href: '/industries/case-studies' },
        ],
      },
    ],
  },
  {
    id: 'lifeprocedure',
    title: 'Life@Procedure',
    dropdown: [
      {
        items: [
          {
            title: 'Culture@Procedure',
            href: '/lifeprocedure/cultureprocedure',
          },
          { title: 'Team@Procedure', href: '/lifeprocedure/teamprocedure' },
        ],
      },
    ],
  },
  {
    id: 'about',
    title: 'About',
    dropdown: [
      {
        items: [
          { title: 'Ulhas Mandrawadkar', href: '/about/ulhas-mandrawadkar/' },
          { title: 'Braj Baheti', href: '/about/braj-baheti/' },
          { title: 'Renuka Rode', href: '/about/renuka-rode/' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    href: '/resources',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact',
  },
]

const Header = () => {
  const pathname = usePathname()
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (id: string) => {
    setActiveDropdown(id)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="w-full fixed left-0 top-0 z-40">
      <nav
        className={twMerge(
          'lg:bg-[#f0eff2]',
          isNavbarOpen ? 'bg-transparent' : 'bg-[#f0eff2]'
        )}
      >
        <div
          className={twMerge(
            'flex lg:items-center lg:justify-between relative lg:px-[7vw] lg:h-12',
            isNavbarOpen
              ? 'h-auto p-0 flex-col lg:flex-row'
              : 'h-12 px-[7vw] items-center'
          )}
        >
          <div
            className={twMerge(
              'flex justify-between w-full lg:w-auto',
              isNavbarOpen &&
                'h-12 lg:h-auto bg-[#f0eff2] px-[7vw] lg:px-0 items-center lg:items-center'
            )}
          >
            <Link
              href="/"
              className="mr-4 flex items-center no-underline whitespace-nowrap  cursor-pointer"
            >
              <Image
                width={100}
                height={100}
                className="align-middle w-full"
                src={'/assets/logo.svg'}
                alt={'Procedure Logo'}
              />
            </Link>
            {/* // Search is not Functional yet */}
            {/* <a className="group lg:hidden animation-easein absolute right-12 -top-1.5 py-4 px-5 z-20 cursor-pointer">
              <MagnifyingGlassIcon className="text-black/90 w-7 h-7 group-hover:text-black/65" />
            </a> */}
            <button
              onClick={() => setIsNavbarOpen(prev => !prev)}
              className="-mr-[5vw] h-full flex lg:hidden justify-center items-center mt-1"
            >
              <Bars3Icon className="text-black/90 w-8 h-8 stroke-[2] group-hover:text-black/65" />
            </button>
          </div>
          <div className="hidden lg:flex basis-auto flex-grow items-center">
            <div className="flex ml-auto pl-0">
              {navLinks.map(navLink => (
                <li
                  key={navLink.id}
                  className="relative group list-item list-none text-left"
                  onMouseEnter={() => handleMouseEnter(navLink.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className={twMerge(
                      'py-[0.9375rem] hover:text-white hover:bg-[rgba(46,46,46,0.6)] group-hover:bg-[rgba(46,46,46,0.6)] group-hover:text-white',
                      pathname.split('/').includes(navLink.id) ||
                        (pathname === '/' && navLink.id === 'home')
                        ? 'text-black'
                        : 'text-black/65'
                    )}
                    href={navLink.href || ''}
                  >
                    <span
                      className={twMerge(
                        'relative font-semibold text-[13px] leading-5 mx-5',
                        pathname.split('/').includes(navLink.id) ||
                          (pathname === '/' && navLink.id === 'home')
                          ? 'after:content-[""] after:absolute after:-bottom-[3px] after:left-0 after:h-[0.1875rem] after:w-full after:bg-[#4A65D6]'
                          : ''
                      )}
                    >
                      {navLink.title}
                    </span>
                  </Link>

                  {navLink.dropdown && activeDropdown === navLink.id && (
                    <div className="hidden group-hover:flex absolute left-2/4 -translate-x-2/4 min-h-full bg-[rgba(46,46,46,0.6)] backdrop-blur-xl rounded-b-[3.125rem] py-10 px-12 mt-3">
                      {navLink.dropdown.map((data: DropdownItem, index) => (
                        <ul key={`items-${index}`} className="block">
                          <li className="w-full">
                            <Link
                              className="text-white hover:text-gray-300 bg-none text-sm font-light py-1.5 px-5 capitalize"
                              href={`/${navLink.id}`}
                              onClick={handleMouseLeave}
                            >
                              {index === 0 ? 'Overview' : ''}
                            </Link>
                          </li>
                          {data?.title && (
                            <>
                              <li>
                                <hr className="border-t my-4 overflow-hidden" />
                              </li>
                              <li>
                                <Link
                                  className="text-gray-200/80 mb-1.5 bg-none text-xs font-light py-1.5 px-5 uppercase w-full"
                                  href="#"
                                >
                                  {data.title}
                                </Link>
                              </li>
                            </>
                          )}
                          <li>
                            <hr className="border-t my-4 overflow-hidden" />
                          </li>
                          {data.items.map(item => (
                            <li key={item.title}>
                              <Link
                                className="block text-white bg-none hover:text-gray-300 text-sm font-light py-1.5 px-5 animation-easein whitespace-nowrap"
                                href={item.href}
                                onClick={handleMouseLeave}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              {/* // Search is not Functional yet */}
              {/* <li className="ml-2 flex cursor-pointer group justify-center items-center">
                <a className="no-underline animation-easein">
                  <MagnifyingGlassIcon className="text-black/90 w-5 h-5 group-hover:text-black/65" />
                </a>
              </li> */}
            </div>
          </div>
          {isNavbarOpen && (
            <div className="block basis-auto flex-grow text-start w-full">
              <div className="flex flex-col w-full py-12 max-h-[95vh] overflow-y-scroll bg-[rgba(46,46,46,0.6)] backdrop-blur-xl">
                {navLinks.map(navLink => (
                  <li
                    key={navLink.id}
                    className="group list-item list-none text-left"
                    onMouseEnter={() => handleMouseEnter(navLink.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      className={
                        'border-y border-y-white/20 mx-[7vw] py-4 text-lg text-white font-semibold block'
                      }
                      href={navLink.href ?? '/'}
                    >
                      <span
                        className={`inline-block animation-easein m-0 leading-7`}
                      >
                        {navLink.title}
                      </span>
                    </Link>
                    {navLink.dropdown && (
                      <div className="hidden group-hover:block static left-2/4 min-h-full bg-transparent px-12 py-2.5">
                        {navLink.dropdown.map((data: DropdownItem, index) => (
                          <ul key={`items-${index}`} className="block">
                            <li className="w-full">
                              <Link
                                className="text-white hover:text-gray-300 bg-none text-sm font-light py-1.5 px-5 capitalize"
                                href={`/${navLink.id}`}
                                onClick={() => {
                                  handleMouseLeave()
                                  setIsNavbarOpen(false)
                                }}
                              >
                                {index === 0 ? 'Overview' : ''}
                              </Link>
                            </li>
                            {data?.title && (
                              <>
                                <li>
                                  <hr className="border-t border-t-gray-200/50 my-4 overflow-hidden" />
                                </li>
                                <li>
                                  <Link
                                    className="text-gray-200/80 mb-1.5 bg-none text-xs font-light py-1.5 uppercase w-full"
                                    href="#"
                                  >
                                    {data.title}
                                  </Link>
                                </li>
                              </>
                            )}
                            <li>
                              <hr className="border-t border-t-gray-200/50 my-4 overflow-hidden" />
                            </li>
                            {data.items.map(item => (
                              <li key={item.title}>
                                <Link
                                  className="block text-white bg-none text-sm font-light hover:text-gray-300 py-1.5 animation-easein whitespace-nowrap"
                                  href={item.href}
                                  onClick={() => {
                                    handleMouseLeave()
                                    setIsNavbarOpen(false)
                                  }}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
