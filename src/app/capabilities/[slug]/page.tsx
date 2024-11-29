import PageNavbar from "@/components/PageNavbar";
import { twMerge } from "tailwind-merge";
import Consultation from "../../../components/Consultation";
import Pointers from "../../../components/Pointers";
import { capabilitiesPagesData } from "@/data";
import RoundedLeftImage from "@/components/RoundedLeftImage";
import type { Metadata } from 'next'
import { DynamicPagePropsType } from "@/app/types";
import { removeDashAndCapitalize } from "@/utils/utils";

export const dynamicParams = false;

export async function generateMetadata({ params }: DynamicPagePropsType): Promise<Metadata>  {
  const slug = (await params).slug

  return {
    title: removeDashAndCapitalize(slug),
    description: ""
  };
}

export async function generateStaticParams() {
  return Object.keys(capabilitiesPagesData).map((pageName) => ({
    slug: pageName,
  }));
}

export default async function Page({
  params,
}: DynamicPagePropsType) {
  const slug = (await params).slug;
  const pageData = capabilitiesPagesData[slug];

  return (
    <>
      <section className="relative pb-12 mb-28">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar className="static mt-14 lg:w-full">
              <h1
                className={twMerge(
                  "text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-brown mb-1.5 tracking-tighter",
                  pageData.heroSection.color,
                )}
              >
                {pageData.heroSection.heading}
              </h1>
              <h4 className="hidden lg:block max-w-[50rem] pt-5 text-xl leading-7 font-light lg:font-normal mb-1.5">
                {pageData.heroSection.description}
              </h4>
            </PageNavbar>
          </div>
        </div>
        <RoundedLeftImage
          desktop={pageData.heroSection.images.desktop}
          mobile={pageData.heroSection.images.mobile}
          alt="Digital ventures image"
        />
        <h4 className="block max-w-[50rem] -mb-16 font-light text-xl container-padding lg:hidden">
          {pageData.heroSection.description}
        </h4>
      </section>
      <Pointers pointers={pageData.pointers} />
      <div>
        <div className="container-padding mb-7">
          <h3
            className={twMerge(
              "dot",
              pageData.consultSection.styles.headingColor,
            )}
          >
            {pageData.consultSection.heading}
          </h3>
          <h3
            className={twMerge(
              "dot",
              pageData.consultSection.styles.subHeadingColor,
            )}
          >
            {pageData.consultSection.subHeading}
          </h3>
        </div>
        <Consultation
          backgroundColor={pageData.consultSection.styles.backgroundColor}
        />
      </div>
    </>
  );
}
