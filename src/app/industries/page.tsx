import PageNavbar from "@/components/PageNavbar";
import IndustriesTabs from "./components/IndustriesTabs";
import Consultation from "@/components/Consultation";
import OurClients from "@/components/ClientsSection";
import IndustriesType from "./components/IndustriesType";
import BackgroundImage from "../../components/PageBackgroundImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "",
};

const Industries = () => {
  return (
    <>
      <section className="relative">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-red mb-1.5 tracking-tighter">
                Propelling You to
                <br />
                Stay a Step Ahead
              </h1>
              <h4 className="max-w-md pt-5 text-xl leading-7 font-light lg:font-normal -mb-16 lg:mb-0">
                In this rapidly evolving digital landscape, our
                Think-Build-Measure approach is designed to meet the Digital
                Transformation needs of various industry segments. From
                harnessing new and emerging technologies, streamlining existing
                ones to helping your products thrive, we help businesses of all
                sizes score crucial wins in today’s tech-driven future.
              </h4>
            </PageNavbar>
          </div>
        </div>
        <BackgroundImage
          desktopImage="/assets/industries-banner.jpg"
          mobileImage="/assets/mob-industries-banner.jpg"
          alt="Industries Banner"
        />
      </section>
      <IndustriesType />
      <OurClients />
      <div className="py-16 lg:pt-32 lg:pb-36">
        <IndustriesTabs />
      </div>
      <div>
        <div className="container-padding mb-7">
          <h3 className="dot dot-green">We explore</h3>
          <h3 className="dot dot-ochre">We innovate</h3>
        </div>
        <Consultation backgroundColor="#1DA069" />
      </div>
    </>
  );
};

export default Industries;
