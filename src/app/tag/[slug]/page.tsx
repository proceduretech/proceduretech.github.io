import { DynamicPagePropsType } from "@/app/types";
import PageNavbar from "@/components/PageNavbar";
import { blogsPageData, caseStudiesData } from "@/data";
import { removeDashAndCapitalize } from "@/utils/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: DynamicPagePropsType): Promise<Metadata>  {
  const slug = (await params).slug

  return {
    title: `${removeDashAndCapitalize(slug)} Tag`,
    description: ""
  };
}

export async function generateStaticParams() {
  const allTags = [
    ...Object.values(blogsPageData).flatMap((blog) => blog.tags),
    ...Object.values(caseStudiesData).flatMap(
      (caseStudy) => caseStudy.services,
    ),
  ];

  const uniqueTags = Array.from(new Set(allTags.map((tag) => tag.id)));

  return uniqueTags.map((id) => ({ slug: id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const filteredBlogData = Object.entries(blogsPageData)
    .filter(([, blogData]) => {
      return blogData.tags.some((tag) => tag.id === slug);
    })
    .map(([id, blogData]) => ({
      id,
      ...blogData,
    }));

  const filteredCaseStudiesData = Object.entries(caseStudiesData)
    .filter(([, caseStudyData]) => {
      return caseStudyData.services.some((tag) => tag.id === slug);
    })
    .map(([dataId, caseStudyData]) => ({
      dataId,
      ...caseStudyData,
    }));

  if (filteredBlogData.length === 0 && filteredCaseStudiesData.length === 0) {
    return notFound();
  }

  return (
    <>
      <section className="relative pb-12 lg:pb-0 lg:mb-28">
        <div className="container-padding">
          <PageNavbar className="static mt-14 lg:w-full" isNavVisible={false}>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl pt-4 mb-1.5 tracking-tighter dot">
              Results for: {slug.replace(/^./, (match) => match.toUpperCase())}
            </h1>
          </PageNavbar>
        </div>
      </section>
      <section className="mb-28">
        <div className="container-padding">
          <div>
            {filteredBlogData.map((blogData) => (
              <div
                key={blogData.id}
                className="mb-10 pb-10 border-b border-b-black/20"
              >
                <h4 className="mb-5">{blogData.heroSection.heading}</h4>
                <p className="mb-8">{blogData.subHeadings.join(" ")}</p>
                <Link
                  className="primary-button bg-white"
                  href={`/${blogData.id}`}
                >
                  Explore
                </Link>
              </div>
            ))}
            {filteredCaseStudiesData.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="mb-10 pb-10 border-b border-b-black/20"
              >
                <h4 className="mb-5">{caseStudy.description}</h4>
                <p className="mb-8">{caseStudy.content.overview.join(" ")}</p>
                <Link
                  className="primary-button bg-white"
                  href={`/case_study/${caseStudy.id}`}
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
