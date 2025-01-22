'use client'

import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const style = {
  dark: {
    input: 'text-white border-grey',
    button: 'bg-white text-black',
    option: {
      'Design Team': 'bg-blue-500 text-white',
      'Tech Team': 'bg-green-500 text-white',
      Other: 'bg-red-500 text-white',
    },
    fileText: 'text-white-500',
  },
  light: {
    input: 'text-black border-black',
    button: 'bg-green-600/50 text-black',
    option: {
      'Design Team': 'bg-blue-500 text-black',
      'Tech Team': 'bg-green-500 text-black',
      Other: 'bg-red-500 text-black',
    },
    fileText: 'text-black',
  },
}

type JoinProcedureProps = {
  type?: keyof typeof style
}

const options = ['Design Team', 'Tech Team', 'Other']

const JoinProcedure = ({ type = 'light' }: JoinProcedureProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
  }

  return (
    <>
      <p className="max-w-[56.25rem] mb-7 font-light opacity-80 tracking-tight">
        From brainstorm sessions to happy hours, there&apos;s never a dull
        moment in the exciting and flexible work environment we&apos;ve created.
        Send us your resume to know opportunities for going Pro and stay in
        touch, you never know when we might need your Pro-power.
      </p>
      <div>
        <form className="max-w-[46.25rem]">
          <div className="mb-7">
            {options.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => handleOptionChange(option)}
                className={twMerge(
                  'px-4 py-2 rounded-full transition-all duration-200 text-sm',
                  selectedOption === option &&
                    style[type].option[
                      option as keyof typeof style.light.option
                    ]
                )}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mb-7">
            <div className="max-w-[31.25rem] relative">
              <span className="relative">
                <input
                  size={40}
                  className={twMerge(
                    'file-upload-input cursor-pointer border py-2.5 px-5 rounded-full w-full text-sm',
                    'file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0',
                    'file:text-sm file:bg-transparent',
                    style[type].fileText.replace('text-', 'file:text-'),
                    'hover:file:bg-gray-300 file:cursor-pointer',
                    style[type].input
                  )}
                  type="file"
                  name="file"
                />
              </span>
              <Image
                className="absolute right-5 top-3 pointer-events-none z-[2]"
                width={16}
                height={16}
                src="/assets/upload-icon-1.svg"
                alt="join-row-icon"
              />
            </div>
          </div>
          <button
            className={twMerge(
              'text-sm rounded-full shadow-md px-6 py-2.5 border-none animation-easein primary-button--green flex items-center gap-2',
              style[type].button
            )}
          >
            Submit
            <ArrowRightIcon className="nav-link-icon" />
          </button>
        </form>
      </div>
    </>
  )
}

export default JoinProcedure
