import BlogSection from '@/components/BlogSection'
import HomepageTabs from './components/HomepageTabs'
import TeamSection from '@/app/components/TeamSection'
import Link from 'next/link'
import JoinProcedure from '@/components/JoinProcedure'
import AgileDeliverySection from './components/AgileDeliverySection'

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="relative overflow-hidden bg-[#f0eff2]">
        <div className="visible animate-[fadeIn] text-center lg:text-start">
          <video
            src="/assets/red-ball-swirl-v3.mp4"
            className="w-[228%] max-w-none relative right-[113%] lg:max-w-full lg:right-0"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="visible animate-[fadeIn] [animation-delay:1s] relative w-full pb-14 lg:absolute top-[50%] lg:w-[50%] z-10 lg:-translate-y-[50%]">
          <div className="container-padding tracking-[-0.3px] text-[#212529] text-center lg:text-left">
            <h1 className="mb-5">Your Goal is Our Aim</h1>
            <p className="text-xl mb-9">
              Maximize the value of your business with our precise, insightful
              and agile digital engineering solutions
            </p>
            <Link
              className="primary-button primary-button--red bg-white"
              href="/contact/#consult"
            >
              <span>Get a Free Consultation</span>
            </Link>
          </div>
        </div>
      </div>
      <HomepageTabs />
      {/* video section */}
      <AgileDeliverySection />
      {/* blog section */}
      <BlogSection />
      {/* team */}
      <TeamSection />
      {/* contact us  */}
      <div className="visible animate-[fadeIn] py-16 lg:pt-0 lg:pb-28 team-home">
        <div className="container-padding">
          <div className="mr-0 ml-auto max-w-[43.75rem]">
            <h2 className="max-w-none pb-10 lg:pt-28 lg:pb-7 lg:max-w-[46.876rem] text-left tracking-tight">
              Become part of a prolific and promising team
            </h2>
            <JoinProcedure type="dark" />
          </div>
        </div>
      </div>
    </>
  )
}
