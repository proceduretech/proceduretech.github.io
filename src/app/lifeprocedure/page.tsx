import PageNavbar from '@/components/PageNavbar'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import HoverImage from '../components/HoverImage'
import PhotoSlider from './components/PhotoSlider'
import Pointers from '@/components/Pointers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Life at Procedure',
  description: '',
}

const cardData = [
  {
    title: 'Saigita Guruju',
    description:
      'We are more than a team—we’re talented individuals with different backgrounds who come together to tackle challenges. You can feel the energy when we all get together!',
    href: '/lifeprocedure/cultureprocedure/',
    buttonName: 'Culture@Procedure',
    img1: '/assets/life-capsule1-v2.webp',
    img2: '/assets/life-capsule1-coloured-v2.webp',
    color: 'bg-blue',
  },
  {
    title: 'Sreeraj Rajan',
    description:
      'At Procedure, I always feel like I’m performing at the top of my game because we all take a proactive approach to solving challenges and delivering the best.',
    href: '/lifeprocedure/teamprocedure/',
    buttonName: 'Team@Procedure',
    img1: '/assets/life-capsule2-v2.webp',
    img2: '/assets/life-capsule2-coloured-v2.webp',
    color: 'bg-brickred',
  },
  {
    title: 'Shravani Khatri',
    description:
      'We believe that constant learning and the pursuit of excellence are at the core of our culture. We enjoy being challenged by new ideas and continually look for ways to improve.',
    href: '/contact#joinpros',
    buttonName: 'Join Us',
    img1: '/assets/life-capsule3-v2.webp',
    img2: '/assets/life-capsule3-coloured-v2.webp',
    color: 'bg-green',
  },
  {
    title: 'And the Coffee',
    description:
      'Working at Procedure is like being inside a constantly brewing coffee pot - both stimulating and invigorating! Its our secret sauce that fuels creativity and curiosity, and keeps us buzzing.',
    img1: '/assets/coffee-v2-v2.webp',
    img2: '/assets/coffee-v2-v2.webp',
    color: 'bg-grey',
  },
]

const pointerData = [
  {
    heading: 'Disruptive',
    description:
      'We take a untraditional approach to hiring new talent. Every year, we host a paid bootcamp where you can hone your skills and portfolio while having the opportunity to get hired full-time.',
    color: 'dot-wine',
  },
  {
    heading: 'Flexible',
    description:
      'Your abilities are more important than your location. Our Pros are located throughout India and have the option to work from anywhere with a good internet connection!',
    color: 'dot-ochre',
  },
  {
    heading: 'Balanced',
    description:
      'Work is only one part of your life and not your entire life. We treat it as such. Weekends are sacred and not to be messed around with. You won’t be asked to work on one.',
    color: 'dot-brown',
  },
  {
    heading: 'Upgraded',
    description:
      'We are constantly learning, upgrading and staying current with new tech innovations outside of our workplace. We do this with internal projects, P1 (The Half Yearly Tech Conference) and more.',
    color: 'dot-green',
  },
  {
    heading: 'Easygoing',
    description:
      'From professing our love for tea and coffee, book club debates, movie dissections, and playing laser tag after hours, we ensure that our team is at their creative best everyday.',
    color: 'dot-iceblue',
  },
]

const photoData = [
  '/assets/life1-v2-1.webp',
  '/assets/life2-v2-1.webp',
  '/assets/life3-v2-1-1.webp',
  '/assets/life4-v2-2.webp',
]

const LifeProcedure = () => {
  return (
    <>
      <section className="relative pb-12 lg:pb-0 mb-28">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar className="static mt-14 lg:w-full">
              <h1
                className={twMerge(
                  'text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot dot-red'
                )}
              >
                Proactive
              </h1>
              <h1
                className={twMerge(
                  'text-5xl lg:text-6xl xl:text-7xl mb-1.5 tracking-tighter dot dot-blue'
                )}
              >
                Progressive
              </h1>
              <h1
                className={twMerge(
                  'text-5xl lg:text-6xl xl:text-7xl mb-1.5 tracking-tighter dot dot-green'
                )}
              >
                Pro-fun
              </h1>
            </PageNavbar>
          </div>
        </div>
      </section>
      <section className="-mt-24 lg:mt-0 mb-28">
        {cardData.map(data => (
          <div
            key={data.title}
            className={twMerge(
              'flex items-center even:last:flex-row justify-between overflow-hidden h-auto pt-12 lg:pt-0 rounded-none m-0 lg:h-96 px-[7vw] lg:even:ml-[calc(7vw*_3)] lg:even:mr-0 lg:even:rounded-l-full even:flex-row-reverse lg:odd:rounded-r-full lg:odd:ml-0 lg:odd:mr-[calc(7vw*_3)]',
              data.color
            )}
          >
            <div className="mx-auto p-0 lg:m-0">
              <h4 className="text-3xl mb-5">{data.title}</h4>
              <p className="max-w-[22.5rem] font-light mb-8">
                {data.description}
              </p>
              {data.href && data.buttonName && (
                <Link
                  className="text-sm w-48 bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none animation-easein-slow shift-to-right"
                  href={data.href}
                >
                  {data.buttonName}
                </Link>
              )}
            </div>
            <HoverImage
              img1={data.img1}
              img2={data.img2}
              className="m-auto lg:m-0 lg:even:ml-[7vw] lg:odd:mr-[7vw] max-w-[25rem] max-h-full self-end"
            />
          </div>
        ))}
      </section>
      <Pointers
        title="The Pro State of Mind"
        pointers={pointerData}
        eachElementClassName="text-[0.625rem] w-full md:w-[28%] lg:w-[28%] mr-0 md:mr-[5.3%] mb-12 md:mb-[5%]"
      />
      <section className="mb-28">
        <div className="container-padding">
          <h2 className="mb-12">The Pro State of Mind</h2>
          <div className="flex flex-wrap -mb-[5%]">
            {pointerData.map((data, index) => (
              <div
                key={data.heading}
                className="w-full md:w-[28%] md:mr-[5.3%] mb-12 md:mb-[5%]"
              >
                <h3
                  className={twMerge(
                    'text-gray-400 dot text-7xl font-bold mb-2.5',
                    data.color
                  )}
                >
                  {index + 1}
                </h3>
                <h4 className="text-3xl mb-2.5 text-gray-600 font-bold">
                  {data.heading}
                </h4>
                <p className="text-[#212529] text-[0.625rem]">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-28">
        <PhotoSlider photoData={photoData} />
      </section>
    </>
  )
}

export default LifeProcedure
