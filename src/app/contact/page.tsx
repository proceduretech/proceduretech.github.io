import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";
import Link from "next/link";
import PageBackgroundImage from "@/components/PageBackgroundImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

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
        <div className="mb-28 pr-[7vw] lg:pr-[calc(7vw*_3)]">
          <div className="rounded-r-full -mb-5 pt-[7vw] text-[#212529]">
            <div className="container-padding">
              <h3 className="mt-5">Get a Free Consultation</h3>
              <div>
                <form className="max-w-xl pt-7 lg:pt-12">
                  <div className="flex flex-wrap pr-12">
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="email" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Email"
                          type="email"
                          name="email"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#249F6B] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="Phone" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Phone"
                          type="tel"
                          name="Phone"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#249F6B] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="Name" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Name"
                          type="text"
                          name="Name"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#249F6B] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="CompanyName" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Company Name"
                          type="text"
                          name="CompanyName"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#249F6B] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <br />
                    <div className="w-6/12 mb-5 pr-5">
                      <button className="text-sm bg-green-600/50 text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none animation-easein-slow shift-to-right mt-5">
                        Go
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
                  className="text-sm font-semibold ml-5 sm:mr-10 mb-5 sm:mb-10 w-44 bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none animation-easein-slow shift-to-right"
                  href="/contact/#consult"
                >
                  Culture@Procedure
                </Link>
                <Link
                  className="text-sm font-semibold ml-5 sm:mr-10 mb-5 sm:mb-10 w-44 bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none animation-easein-slow shift-to-right"
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
  );
};

export default Contact;
