import HoverImage from "@/app/components/HoverImage";
import PageNavbar from "@/components/PageNavbar";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PhotoSlider from "../components/PhotoSlider";
import Pointers from "@/components/Pointers";
import { lifeProcedureData } from "@/data";
import { DynamicPagePropsType } from "@/app/types";
import { removeDashAndCapitalize } from "@/utils/utils";
import { Metadata } from "next/types";

export const dynamicParams = false;

export async function generateMetadata({ params }: DynamicPagePropsType): Promise<Metadata>  {
  const slug = (await params).slug

  return {
    title: removeDashAndCapitalize(slug),
    description: ""
  };
}

export async function generateStaticParams() {
  return Object.keys(lifeProcedureData).map((pageName) => ({
    slug: pageName,
  }));
}

export default async function Page({
  params,
}: DynamicPagePropsType) {
  const slug = (await params).slug;
  const pageData = lifeProcedureData[slug];

  return (
    <>
      <section className="relative pb-12 lg:pb-0 mb-28">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar className="static mt-14 lg:w-full">
              <h1
                className={twMerge(
                  "text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot",
                  pageData.heroSection.style.headingColor,
                )}
              >
                {pageData.heroSection.heading}
              </h1>
              <h1
                className={twMerge(
                  "text-5xl lg:text-6xl xl:text-7xl mb-1.5 tracking-tighter dot",
                  pageData.heroSection.style.subHeadingColor,
                )}
              >
                {pageData.heroSection.subHeading}
              </h1>
            </PageNavbar>
          </div>
        </div>
      </section>
      <section className="-mt-24 lg:mt-0 mb-28">
        <div
          className={twMerge(
            "flex items-center justify-between overflow-hidden h-auto pt-12 lg:pt-0 m-0 lg:h-96 px-[7vw] lg:rounded-r-full lg:mr-[calc(7vw*_3)]",
            pageData.profileOne.color,
          )}
        >
          <div className="mx-auto p-0 lg:m-0">
            <h4 className="text-3xl mb-5">{pageData.profileOne.name}</h4>
            <p className="max-w-[22.5rem] font-light mb-8">
              {pageData.profileOne.description}
            </p>
          </div>
          <HoverImage
            img1={pageData.profileOne.imageUrl}
            img2={pageData.profileOne.imageUrl}
            className="m-auto lg:m-0 lg:even:ml-[7vw] lg:odd:mr-[7vw] max-w-[25rem] max-h-full self-end"
          />
        </div>
        <div className="block h-auto overflow-hidden lg:ml-[calc(7vw*_3)]">
          <Image
            className="rounded-l-full"
            width={1920}
            height={600}
            src={pageData.sectionImageOne.desktop}
            alt="desktop image for mobile"
          />
          <Image
            className="hidden"
            width={1920}
            height={600}
            src={pageData.sectionImageOne.mobile}
            alt="desktop image for mobile"
          />
        </div>
        <div className="block h-auto overflow-hidden lg:mr-[calc(7vw*_3)]">
          <Image
            className="rounded-r-full"
            width={1920}
            height={600}
            src={pageData.sectionImageTwo.desktop}
            alt="desktop image for mobile"
          />
          <Image
            className="hidden"
            width={1920}
            height={600}
            src={pageData.sectionImageTwo.mobile}
            alt="desktop image for mobile"
          />
        </div>
        <div
          className={twMerge(
            "flex items-center flex-row-reverse justify-between overflow-hidden h-auto pt-12 lg:pt-0 m-0 lg:h-96 px-[7vw] lg:rounded-l-full lg:ml-[calc(7vw*_3)]",
            pageData.profileTwo.color,
          )}
        >
          <div className="mx-auto p-0 lg:m-0">
            <h4 className="text-3xl mb-5">{pageData.profileTwo.name}</h4>
            <p className="max-w-[22.5rem] font-light mb-8">
              {pageData.profileTwo.description}
            </p>
          </div>
          <HoverImage
            img1={pageData.profileTwo.imageUrl}
            img2={pageData.profileTwo.imageUrl}
            className="m-auto lg:m-0 lg:even:ml-[7vw] lg:odd:mr-[7vw] max-w-[25rem] max-h-full self-end"
          />
        </div>
      </section>
      <Pointers
        pointers={pageData.pointers}
        eachElementClassName="w-full lg:w-[28%] mr-0 lg:mr-[5.3%] mb-12 lg:mb-[5%]"
      />
      <section className="mb-28">
        <PhotoSlider photoData={pageData.photoSliders} />
      </section>
    </>
  );
}
