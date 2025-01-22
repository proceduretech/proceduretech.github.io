import PageNavbar from '@/components/PageNavbar'
import ClientsSection from '@/components/ClientsSection'
import { aboutPagePointerData } from '@/data'
import PageBackgroundImage from '@/components/PageBackgroundImage'
import Pointers from '@/components/Pointers'
import Consultation from '@/components/Consultation'
import TeamsData from './components/TeamsData'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: '',
}

const About = () => {
  return (
    <>
      <section className="relative">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-blue mb-1.5 tracking-tighter">
                Provoking Innovation
              </h1>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl dot dot-red mb-1.5 tracking-tighter">
                Building Possibilities
              </h1>
              <h4 className="max-w-md pt-5 text-xl leading-7 font-light lg:font-normal -mb-16 lg:mb-0">
                Meet The Power of Pro: prolific innovation, proficient
                execution, proactive mindsets, and amplified productivity. With
                a goal to build prominent presence and achieve progressive
                strides. We are The Procedure that aspires to fuel a digital
                revolution to create profound impact.
              </h4>
            </PageNavbar>
          </div>
        </div>
        <PageBackgroundImage
          desktopImage="/assets/about-banner.jpg"
          mobileImage="/assets/mob-about-banner.jpg"
          alt="About Banner"
        />
      </section>
      <ClientsSection className="mb-28" />
      <Pointers
        pointers={aboutPagePointerData}
        eachElementClassName="w-full md:w-[28%] lg:w-[28%] mr-0 md:mr-[5.3%] mb-12 md:mb-[5%]"
        title="Our Story"
      />
      <TeamsData />
      <section className="mt-12">
        <Consultation type="colored" backgroundColor="#c3201f" />
      </section>
    </>
  )
}

export default About
