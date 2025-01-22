import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SocialMediaSection from './SocialMediaSection'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <footer className="bg-[#4A65D6] text-white">
      <div className="visible animate-[fadeIn] pt-20 pb-36">
        <div className="container-padding">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full sm:w-6/12 mt-10 lg:w-3/12 lg:mt-0">
              <h3 className="text-xl mb-10 font-medium leading-[1.2]">
                <Link className="footer-link font-bold" href={'/'}>
                  Home
                </Link>
              </h3>
              <h3 className="text-xl mb-10 font-medium leading-[1.2]">
                <Link className="footer-link font-bold" href={'/about'}>
                  About
                </Link>
              </h3>
              <h3 className="text-xl mb-10 font-medium leading-[1.2]">
                <Link className="footer-link font-bold" href={'/lifeprocedure'}>
                  Life@Procedure
                </Link>
              </h3>
              <ul className="text-sm -mt-8 flex flex-col space-y-2 list-none">
                <li>
                  <Link
                    className="footer-link"
                    href="/lifeprocedure/cultureprocedure/"
                  >
                    Culture@Procedure
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/lifeprocedure/cultureprocedure/"
                  >
                    Team@Procedure
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-6/12 mt-10 lg:w-3/12 lg:mt-0">
              <h3 className="text-xl mb-10 font-medium leading-[1.2]">
                <Link className="footer-link font-bold" href={'/capabilities'}>
                  Capabilities
                </Link>
              </h3>
              <ul className="text-sm -mt-8 flex flex-col space-y-2 list-none">
                <li className="text-xl leading-7 text-[#AFAFAF] font-bold pt-5">
                  Think
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/digital-ventures/"
                  >
                    Digital Ventures
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/innovation/"
                  >
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" href="/capabilities/ux-ui/">
                    UX & UI
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/dx-modernization/"
                  >
                    DX & Modernization
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/process-consulting/"
                  >
                    Process Consulting
                  </Link>
                </li>
              </ul>
              <ul className="text-sm flex flex-col space-y-2 list-none">
                <li className="text-xl leading-7 text-[#AFAFAF] font-bold pt-5">
                  Build
                </li>
                <li>
                  <Link className="footer-link" href="/capabilities/agile/">
                    Agile
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/app-development/"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" href="/capabilities/cloud/">
                    Cloud
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" href="/capabilities/devops/">
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/product-engineering/"
                  >
                    Product Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/managed-services/"
                  >
                    Managed Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/mobile-solutions/"
                  >
                    Mobile Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/swat-interventions/"
                  >
                    SWAT Interventions
                  </Link>
                </li>
              </ul>
              <ul className="text-sm flex flex-col space-y-2 list-none">
                <li className="text-xl leading-7 text-[#AFAFAF] font-bold pt-5">
                  Measure
                </li>
                <li>
                  <Link className="footer-link" href="/capabilities/security/">
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/performance-governance/"
                  >
                    Performance Governance
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/capabilities/quality-testing/"
                  >
                    Quality & Testing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-6/12 mt-10 lg:w-3/12 lg:mt-0 space-y-12">
              <h3 className="text-xl font-bold leading-[1.2] mb-10">
                <Link className="footer-link" href="/industries/">
                  Industries
                </Link>
              </h3>
              <ul className="!text-sm -mt-8 flex flex-col space-y-2 list-none">
                <li>
                  <Link className="footer-link" href="/industries/banking/">
                    Banking
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" href="/industries/edtech/">
                    EdTech
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" href="/industries/fintech/">
                    FinTech
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" href="/industries/foodtech/">
                    FoodTech
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" href="/industries/insurtech/">
                    InsurTech
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/industries/case-studies/"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
              <h3 className="text-xl font-bold leading-[1.2]">
                <Link className="footer-link" href="/resources/">
                  Resources
                </Link>
              </h3>
              <h3 className="text-xl font-bold leading-[1.2]">
                <Link className="footer-link" href="/contact/">
                  Contact Us
                </Link>
              </h3>
              <h3 className="text-xl font-bold leading-[1.2]">
                <Link className="footer-link font-bold" href="/privacy-policy/">
                  Privacy Policy
                </Link>
              </h3>
            </div>
            <div className="w-full sm:w-6/12 mt-10 lg:w-3/12 lg:mt-0">
              <SocialMediaSection />
              <Newsletter />
              <h3 className="text-xl mb-10 font-bold leading-[1.2]">
                Visit Us
              </h3>
              <p className="-mt-8 leading-5 font-light text-sm">
                406, Shrishti Square, Above Bata Showroom, LBS Marg, Sonapur,
                Bhandup West, Mumbai, <br /> Maharashtra 400078 <br /> INDIA
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-2.5"></p>
      <section className="visible animate-[fadeIn] py-16 lg:py-24 bg-[#3850B4]">
        <div className="container-padding">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex justify-center w-full lg:justify-start mb-5 lg:mb-0 lg:w-6/12">
              <Image
                width={100}
                height={100}
                className="w-48 lg:w-[18.75rem] align-middle max-w-full"
                src="/assets/procedure-footer-logo.svg"
                alt="Footer logo"
              />
            </div>
            <div className="flex justify-center w-full lg:w-6/12 lg:justify-end">
              <Image
                width={100}
                height={100}
                className="w-[18.75rem] lg:w-[25rem] align-middle max-w-full"
                src="/assets/procedure-footer-tagline.svg"
                alt="Tagline image"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
