import CapabilitiesTabs from "./components/CapabilitiesTabs";
import PageNavbar from "@/components/PageNavbar";
import PageBackgroundImage from "@/components/PageBackgroundImage";
import Consultation from "../../components/Consultation";
import CapabilitiesNavigation from "./components/CapablitiesNavigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "",
};

const Capabilities = () => {
  return (
    <>
      <section className="relative">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-green mb-1.5 tracking-tighter">
                Produce Your
                <br />
                Roadmap to Success
              </h1>
              <h4 className="max-w-md pt-5 text-xl leading-7 font-light lg:font-normal -mb-16 lg:mb-0">
                We integrate strategy, design and software engineering to help
                your business define its digital future and take your products
                to the next level. We love to innovate so that we can meet the
                changing needs of our clients’ businesses—and forge a new path
                together.
              </h4>
            </PageNavbar>
          </div>
        </div>
        <PageBackgroundImage
          desktopImage="/assets/capabilities-banner.jpg"
          mobileImage="/assets/mob-capabilities-banner.jpg"
          alt={"Capabilities Banner"}
        />
      </section>
      <section>
        <div className="container-padding">
          <h3 className="text-3xl text-gray-500 font-light mb-12">
            Our Capabilities
          </h3>
          <CapabilitiesNavigation />
        </div>
      </section>
      <div className="py-16 lg:pt-32 lg:pb-36">
        <CapabilitiesTabs />
      </div>
      <div>
        <div className="container-padding mb-7">
          <h3 className="dot dot-green">We think</h3>
          <h3 className="dot dot-ochre">Therefore we build</h3>
        </div>
        <Consultation backgroundColor="#1DA069" />
      </div>
    </>
  );
};

export default Capabilities;
