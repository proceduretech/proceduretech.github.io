import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const videos = [
  {
    src: '/assets/home-spiral-balls-v2.mp4',
    className:
      'hidden lg:inline max-w-full max-h-[51.875rem] relative -right-[15%] xl:right-auto',
  },
  {
    src: '/assets/mobile-home-spiral-balls-v3.mp4',
    className:
      'inline lg:hidden max-w-full max-h-[37.5rem] lg:max-h-[51.875rem] relative right-0 lg:right-[-15%] xl:right-auto',
  },
]

const links = [
  {
    title: 'Think',
    description:
      'Services to help you make the right decisions to achieve business goals',
    href: '/capabilities/#think',
    navLinkSlide: 'nav-link-slide--red',
  },
  {
    title: 'Build',
    description:
      'We build products faster and better to deliver right to your customers',
    href: '/capabilities/#build',
    navLinkSlide: 'nav-link-slide--blue',
  },
  {
    title: 'Measure',
    description:
      'We continually track how well our strategies and products are work',
    href: '/capabilities/#measure',
    navLinkSlide: 'nav-link-slide--green',
  },
]

const AgileDeliverySection = () => {
  return (
    <div className="relative overflow-hidden bg-white flex flex-col-reverse flex-wrap lg:block">
      <div className="visible animate-[fadeIn] text-center lg:text-right -mb-2.5">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video.src}
            className={video.className}
            autoPlay
            loop
            muted
            playsInline
          />
        ))}
      </div>
      {/* Content Section */}
      <div className="visible animate-[fadeIn] [animation-delay:1s] relative w-full pb-14 lg:absolute top-[50%] lg:w-[50%] z-10 lg:-translate-y-[50%]">
        <div className="container-padding">
          <div className="-mb-24 lg:mb-0 py-0 lg:py-20 relative z-10">
            <h2 className="-mr-[7vw] pt-10 lg:pt-0 mb-7 text-[#212549]">
              Continuous Excellence, Agile Delivery
            </h2>
            <div>
              {links.map((link, index) => (
                <Link
                  key={index}
                  className={twMerge(
                    'border-t flex items-end py-5 justify-between text-black border-b border-b-black/10 animation-easein-slow shift-to-right nav-link group',
                    index === 0 ? 'border-t-black/10' : ''
                  )}
                  href={link.href}
                >
                  <div>
                    <h4 className="font-bold mb-1">{link.title}</h4>
                    <h6 className="font-medium mb-1">{link.description}</h6>
                  </div>
                  <div className="ml-10 mb-5 mr-5 relative left-0">
                    <div className="nav-link-button">
                      <ArrowRightIcon className="nav-link-icon" />
                      <div className={`nav-link-slide ${link.navLinkSlide}`} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgileDeliverySection
