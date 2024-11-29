import Pointers from "@/components/Pointers";
import Consultation from "@/components/Consultation";
import PageNavbar from "@/components/PageNavbar";
import RoundedLeftImage from "@/components/RoundedLeftImage";
import { industriesPagesData } from "@/data";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";
import { DynamicPagePropsType } from "@/app/types";
import { removeDashAndCapitalize } from "@/utils/utils";

export async function generateMetadata({ params }: DynamicPagePropsType): Promise<Metadata>  {
  const slug = (await params).slug

  return {
    title: removeDashAndCapitalize(slug),
    description: ""
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(industriesPagesData).map((pageName) => ({
    slug: pageName,
  }));
}

export default async function Page({
  params,
}: DynamicPagePropsType) {
  const slug = (await params).slug;
  const pageData = industriesPagesData[slug];

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
          alt={pageData.heroSection.heading}
        />
        <h4 className="block max-w-[50rem] -mb-16 font-light text-xl container-padding lg:hidden">
          {pageData.heroSection.description}
        </h4>
      </section>
      <Pointers
        pointers={pageData.pointers}
        eachElementClassName="w-full lg:w-[28%] mr-0 lg:mr-[5.3%] mb-12 lg:mb-[5%]"
      />
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
