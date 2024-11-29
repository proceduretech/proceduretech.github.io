import PageNavbar from "@/components/PageNavbar";
import { blogsPageData } from "@/data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Author from "./components/Author";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import { DynamicPagePropsType } from "../types";
import { Metadata } from "next/types";
import { removeDashAndCapitalize } from "@/utils/utils";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(blogsPageData).map((pageName) => ({
    slug: pageName,
  }));
}

export async function generateMetadata({ params }: DynamicPagePropsType): Promise<Metadata>  {
  const slug = (await params).slug

  return {
    title: removeDashAndCapitalize(slug),
    description: ""
  };
}

export default async function Page({
  params,
}: DynamicPagePropsType) {
  const slug = (await params).slug;
  const pageData = blogsPageData[slug];

  return (
    <>
      <section className="relative pb-12 lg:pb-0">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar
              textColorType="white"
              className="w-full sm:w-[90%] text-white lg:w-[90%]"
            >
              <h1
                className={twMerge(
                  "text-5xl lg:text-6xl xl:text-7xl pt-4 dot mb-1.5 tracking-tighter",
                )}
              >
                {pageData.heroSection.heading}
              </h1>
            </PageNavbar>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            className=" max-w-full "
            width={1920}
            height={599}
            src={pageData.heroSection.images.desktop}
            alt="Blog Header image"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            className="block max-w-full w-full lg:hidden"
            width={800}
            height={1400}
            src={pageData.heroSection.images.mobile}
            alt="Blog Header image"
          />
        </div>
        <div className="absolute opacity-70 bottom-24 lg:bottom-[4vw] z-[3] text-lg text-white">
          <div className="container-padding">
            {`${pageData.heroSection.date} | ${pageData.heroSection.name}`}
          </div>
        </div>
      </section>
      <section className="">
        <div className="container-padding">
          <div className="mt-[7vw] flex flex-wrap pb-7 lg:border-b lg:border-b-black/20">
            <LeftSection
              subHeadings={pageData.subHeadings}
              content={pageData.content}
            />
            <div className="block lg:hidden ml-[calc(-7vw)] pt-5 pb-16 -mt-10 mx-auto cursor-default pointer-events-none">
              <Author authorData={pageData.author} />
            </div>
            <RightSection
              latestPosts={pageData.latestPosts}
              tags={pageData.tags}
            />
          </div>
        </div>
      </section>
      <div className="hidden my-0 mx-auto py-16 px-0 cursor-default pointer-events-none lg:block">
        <div className="container-padding">
          <Author authorData={pageData.author} />
        </div>
      </div>
    </>
  );
}
