import BlogCard from "@/components/BlogCard";
import PageNavbar from "@/components/PageNavbar";
import { blogsData } from "@/data";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
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
              Resources
            </h1>
            <h1
              className={twMerge(
                "text-5xl lg:text-6xl xl:text-7xl mb-1.5 tracking-tighter dot dot-red",
              )}
            >
              Blogs & Insights
            </h1>
          </PageNavbar>
        </div>
      </section>
      <section className="mb-28">
        <div className="container-padding">
          <div className="flex flex-wrap -mb-12">
            {blogsData.map((blog) => (
              <BlogCard
                key={blog.title}
                date={blog.date}
                imgSrc={blog.imgSrc}
                title={blog.title}
                description={blog.description}
                link={blog.link}
                imgClassName={blog.imgClassName}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
