import PageNavbar from "@/components/PageNavbar";
import React from "react";
import { twMerge } from "tailwind-merge";
import CaseStudy from "../components/CaseStudy";
import { tabs } from "@/constants/constant";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "",
};

const Page = () => {
  return (
    <>
      <section className="relative pb-12 lg:pb-0 mb-28">
        <div className="container-padding">
          <PageNavbar className="static mt-14 lg:w-full">
            <h1
              className={twMerge(
                "text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot dot-blue",
              )}
            >
              Case Studies
            </h1>
            <h1
              className={twMerge(
                "text-5xl lg:text-6xl xl:text-7xl mb-1.5 tracking-tighter dot dot-green",
              )}
            >
              Proof in Action
            </h1>
          </PageNavbar>
        </div>
      </section>
      <section className="mb-28">
        <div className="container-padding">
          <div className="flex flex-wrap -mb-12">
            {tabs.map((data) => (
              <CaseStudy
                key={data.id}
                date={data.date}
                imgSrc={data.imgSrc}
                title={data.description}
                sector={data.name}
                services={data.services}
                link={data.href}
                className={data.className}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
