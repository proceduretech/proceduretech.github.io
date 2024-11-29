import PageNavbar from "@/components/PageNavbar";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "",
};

const policyItems = [
  {
    text: (
      <>
        Your privacy is important to us. Procedure Technologies Private Limited
        respects your privacy regarding any information we may collect from you
        across our website,{" "}
        <a
          className="underline text-blue-500 animation-easein-slow"
          href="https://www.procedure.tech"
        >
          https://www.procedure.tech
        </a>{" "}
        and other sites we own and operate.
      </>
    ),
  },
  {
    text: "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.",
  },
  {
    text: "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.",
  },
  {
    text: "We don’t share any personally identifying information publicly or with third parties, except when required to by law.",
  },
  {
    text: "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.",
  },
  {
    text: "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.",
  },
  {
    text: "Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.",
  },
  {
    text: "Cookie Information: To enhance your online experience and track website performance, our website uses cookies. It’s a small text file that gets placed in your computer hard drive and can be retrieved later. Cookies do not tell us who you are.",
  },
  { text: "This policy is effective as of 01-September-2023." },
];

const page = () => {
  return (
    <>
      <section className="relative pb-12 lg:pb-0">
        <div className="container-padding">
          <div className="relative">
            <PageNavbar isNavVisible={false} className="static mt-14 lg:w-full">
              <h1
                className={
                  "text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-red mb-1.5 tracking-tighter"
                }
              >
                Privacy Policy
              </h1>
            </PageNavbar>
          </div>
        </div>
      </section>
      <section className="mb-36 mt-10">
        <div className="container-padding">
          <ul className="font-light tracking-tight mb-5 pl-5 list-disc">
            {policyItems.map((item, index) => (
              <li key={index} className="mb-2.5">
                {item.text}
              </li>
            ))}
          </ul>
          <div className="w-full">
            <h3 className="text-base font-semibold mt-10 mb-2.5">
              Changes to this Policy
            </h3>
            <p className="mb-8 text-base font-light">
              This policy will be updated subject to any changes in information
              collection, activities performed, or any applicable regulations.
              You are encouraged to review the privacy policy whenever you visit
              the website, to make sure that you understand how any personal
              information you provide will be used.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
