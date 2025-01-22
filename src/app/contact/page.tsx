import Image from 'next/image'
import PageNavbar from '@/components/PageNavbar'
import Link from 'next/link'
import PageBackgroundImage from '@/components/PageBackgroundImage'
import { Metadata } from 'next'
import Consultation from '@/components/Consultation'

export const metadata: Metadata = {
  title: 'Contact',
  description: '',
}

const Contact = () => {
  return (
    <>
      <section className="relative">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-green mb-1.5 tracking-tighter">
                Team up
                <br />
                With the Pros
              </h1>
              <h4 className="max-w-md pt-5 text-xl leading-7 font-light lg:font-normal -mb-16 lg:mb-0">
                Channelling Productivity to create a notable Prominence, we
                champion Progress with a Profound impact. At The Procedure, we
                are facilitating an environment where human connection and
                ambitious tech meet. Together, we grow, we thrive, and we
                inspire.
              </h4>
            </PageNavbar>
          </div>
        </div>
        <PageBackgroundImage
          desktopImage="/assets/contact-banner.jpg"
          mobileImage="/assets/mob-contact-banner-v2.jpg"
          alt="Contact Banner"
        />
      </section>
      <section>
        <Consultation type="colored" backgroundColor="#c3201f" />
      </section>
      <section className="mb-28 relative">
        <div className="pl-[7vw]">
          <Image
            className="hidden rounded-r-full -scale-x-100 lg:block"
            height={579}
            width={1920}
            src="/assets/about-join-us.jpg"
            alt=""
          />
          <Image
            className="block rounded-r-full -scale-x-100 lg:hidden"
            height={1000}
            width={800}
            src="/assets/mob-contact-v3.jpg"
            alt=""
          />
          <div className="">
            <div className="absolute w-3/5 sm:w-full max-w-md top-1/2 right-[7vw] -translate-y-1/2">
              <h4 className="text-white font-normal text-lg ml-5 lg:ml-0 sm:text-2xl mb-7 max-w-sm">
                Meet our prodigies & get an
                <br />
                inside look at how we create wins
              </h4>
              <div className="flex flex-col sm:flex-row">
                <Link
                  className="team-button animation-easein primary-button primary-button--blue"
                  href="/contact/#consult"
                >
                  Culture@Procedure
                </Link>
                <Link
                  className="team-button animation-easein primary-button primary-button--green"
                  href="/contact/#consult"
                >
                  Team@Procedure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
