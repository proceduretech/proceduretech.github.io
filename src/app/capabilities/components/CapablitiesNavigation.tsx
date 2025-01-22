import { capabilitiesData } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ArrowRightIcon } from '@heroicons/react/16/solid'

const CapabilitiesNavigation = () => {
  return (
    <div className="flex flex-wrap">
      {capabilitiesData.map(data => (
        <div
          key={data.title}
          className="w-full mr-0 lg:mr-[5%] lg:w-[30%] pt-20 first:pt-0 lg:pt-0 last:mr-0"
        >
          <h2
            className={twMerge(
              'text-5xl text-gray-500 font-bold mb-9 dot',
              `${
                data.title === 'think'
                  ? 'dot-red'
                  : data.title === 'build'
                  ? 'dot-blue'
                  : 'dot-green'
              }`
            )}
          >
            {data.title}
          </h2>
          <ul>
            {data.items.map(item => (
              <li className="group relative" key={item.title}>
                <Link
                  className="nav-link text-black w-full text-2xl font-light block py-2.5 pr-12 border-b border-b-black/10"
                  href={item.href}
                >
                  <div className="flex justify-between items-center w-full">
                    {item.title}
                    <div className="nav-link-button opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <ArrowRightIcon className="nav-link-icon" />
                      <div
                        className={`nav-link-slide translate-x-full group-hover:translate-x-0 transition-transform duration-500 ${
                          data.title === 'think'
                            ? 'nav-link-slide--red'
                            : data.title === 'build'
                            ? 'nav-link-slide--blue'
                            : 'nav-link-slide--green'
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default CapabilitiesNavigation
