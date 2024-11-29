import PageNavbar from "@/components/PageNavbar";
import { caseStudiesData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import DownloadForm from "./components/DownloadForm";
import ContentSection from "./components/ContentSection";
import { Metadata } from "next";
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
  return Object.keys(caseStudiesData).map((pageName) => ({
    slug: pageName,
  }));
}

export default async function Page({
  params,
}: DynamicPagePropsType) {
  const slug = (await params).slug;
  const pageData = caseStudiesData[slug];

  if (!pageData) {
    return notFound();
  }

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
                {pageData.description}
              </h1>
            </PageNavbar>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            className=" max-w-full "
            width={1920}
            height={599}
            src={pageData?.heroSection?.desktop}
            alt="Blog Header image"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            className="block max-w-full w-full lg:hidden"
            width={800}
            height={1400}
            src={pageData?.heroSection?.mobile}
            alt="Blog Header image"
          />
        </div>
      </section>
      <section className="">
        <div className="container-padding">
          <div className="mt-[7vw] flex flex-wrap pb-7 lg:border-b lg:border-b-black/20">
            <ContentSection pageData={pageData} />
            <DownloadForm />
          </div>
        </div>
      </section>
      <section className="relative my-28 pl-[7vw]">
        <Image
          className="hidden max-w-full rounded-l-full lg:block"
          width={1920}
          height={599}
          src="/assets/table-tennis.webp"
          alt="Digital ventures image"
        />
        <Image
          className="block max-w-full rounded-l-full lg:hidden"
          width={800}
          height={517}
          src="/assets/mob-table-tennis-v3.webp"
          alt="Digital ventures image"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 pl-[calc(7vw_*_6)] sm:pl-0 max-w-lg lg:max-w-xl">
          <div className="container-padding">
            <p className="text-lg mb-5 lg:text-2xl text-white lg:mb-7">
              Read our other case studies to find out how our holistic approach
              towards strategy and innovation wins the game every time.
            </p>
            <Link
              className="primary-button bg-white"
              href="/industries/case-studies/"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
