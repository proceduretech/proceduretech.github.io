import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Link from 'next/link'
import { tabs } from '@/constants/constant'

type TabsSectionsProps = {
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

const TabsSection = ({
  selectedIndex,
  setSelectedIndex,
}: TabsSectionsProps) => {
  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      className="flex flex-col-reverse lg:flex-col visible animate-[fadeIn] w-full lg:w-[60%] mr-0 ml-auto"
    >
      <TabList className="flex flex-wrap justify-center lg:justify-start mt-10 -mb-10 lg:mt-0 lg:mb-0 lg:border-b lg:border-b-white/20">
        {tabs.map(({ name }) => (
          <Tab
            key={name}
            className="m-2.5 h-2 w-2 lg:m-0 lg:h-auto lg:w-auto lg:py-2.5 bg-white rounded-full lg:bg-inherit lg:rounded-none opacity-50 lg:mr-10 text-xs font-semibold text-white lg:opacity-60 focus:outline-none data-[selected]:opacity-100 lg:data-[selected]:border-b-2 lg:data-[selected]:border-b-white data-[hover]:opacity-100 lg:data-[hover]:border-b-2 lg:data-[hover]:border-b-white data-[focus]:outline-1 data-[focus]:outline-white"
          >
            <span className="hidden lg:block">{name}</span>
          </Tab>
        ))}
      </TabList>
      <TabPanels className="text-white pt-5 lg:pt-[6vw]">
        {tabs.map(tab => (
          <TabPanel
            key={tab.name}
            className="block transition-opacity duration-150 ease-linear"
          >
            <h5 className="font-extralight mb-5 pb-5 lg:p-0 block lg:hidden">
              {tab.name}
            </h5>
            <h3 className="text-4xl/10 tracking-[-0.01875rem] leading-[3.4375rem] mb-7 p-0 max-w-[37.5rem]">
              {tab.description}
            </h3>
            <Link
              className="primary-button primary-button--blue bg-white"
              href={tab.href}
            >
              Read
            </Link>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

export default TabsSection
