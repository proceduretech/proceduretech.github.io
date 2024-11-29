import PageNavbar from "@/components/PageNavbar";
import { aboutPageData } from "@/data";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TeamCard from "../components/TeamCard";
import { DynamicPagePropsType } from "@/app/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(aboutPageData).map((pageName) => ({
    slug: pageName,
  }));
}

export default async function Page({
  params,
}: DynamicPagePropsType) {
  const slug = (await params).slug;
  const pageData = aboutPageData[slug];

  return (
    <>
      <section className="relative pb-12 lg:pb-0 mb-28">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar className="static mt-14 lg:w-full">
              <h1
                className={twMerge(
                  "text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot",
                  pageData.heroSection.style.nameColor,
                )}
              >
                {pageData.heroSection.name}
              </h1>
              <h4 className="max-w-3xl pt-5 mb-1.5 text-xl font-normal">
                Co-Founder and CTO
              </h4>
            </PageNavbar>
          </div>
        </div>
        <div className="mt-28 -mb-12 lg:mb-0 lg:mt-12 lg:pl-[7vw]">
          <div
            className={twMerge(
              "flex flex-wrap rounded-none pt-12 lg:pt-0 lg:flex-nowrap justify-evenly items-center lg:rounded-l-full bg-blue",
              pageData.profileSection.backgroundColor,
            )}
          >
            <div className="max-w-xl px-[7vw] lg:px-0 lg:ml-[4%]">
              <h3 className="text-2xl lg:text-4xl font-light mb-1.5">
                {pageData.profileSection.heading}
              </h3>
              <p className="text-xl mt-12 font-light mb-2.5">
                {pageData.profileSection.hashTags}
              </p>
            </div>
            <Image
              className="max-w-full lg:max-w-md self-end"
              width={800}
              height={800}
              src={pageData.profileSection.imageUrl}
              alt="profile photo"
            />
          </div>
        </div>
      </section>
      <section className="mb-28">
        <div className="container-padding">
          <div className="max-w-4xl">
            <h4 className="text-xl mb-14 font-semibold">
              {pageData.profileSection.subHeading}
            </h4>
            {pageData.profileSection.paragraphs.map((data, index) => (
              <p key={index} className="text-xl mb-8">
                {data}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mb-28">
        {pageData.teamMembersData.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </section>
    </>
  );
}
