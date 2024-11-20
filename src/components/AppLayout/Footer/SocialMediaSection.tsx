import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/procedurehq/",
    src: "https://procedure.tech/wp-content/uploads/2023/08/linkedin-1.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@ProcedureHQ/featured",
    src: "https://procedure.tech/wp-content/uploads/2023/08/youtube.svg",
    alt: "YouTube",
  },
  {
    href: "https://twitter.com/ProcedureHQ",
    src: "https://procedure.tech/wp-content/uploads/2023/09/footer-twitter.svg",
    alt: "Twitter",
  },
  {
    href: "https://www.instagram.com/procedure_hq/",
    src: "https://procedure.tech/wp-content/uploads/2023/08/insta.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/ProcedureHQ",
    src: "https://procedure.tech/wp-content/uploads/2023/08/fb-1.svg",
    alt: "Facebook",
  },
];

const SocialMediaSection = () => {
  return (
    <>
      <h5 className="text-xl mb-12 font-medium leading-[1.2]">Connect</h5>
      <ul className="-mt-8 pt-2.5 flex space-x-3 list-none">
        {socialLinks.map((social, idx) => (
          <li key={idx} className="inline">
            <Link
              className="w-9 inline-block animation-easein-slow shift-to-right"
              href={social.href}
              target="_blank"
            >
              <Image
                className="w-full align-middle"
                width={38}
                height={38}
                src={social.src}
                alt={social.alt}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialMediaSection;