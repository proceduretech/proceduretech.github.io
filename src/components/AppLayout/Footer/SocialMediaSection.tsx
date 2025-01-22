import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/procedurehq/',
    src: '/assets/linkedin-1.svg',
    alt: 'LinkedIn',
  },
  {
    href: 'https://www.youtube.com/@ProcedureHQ/featured',
    src: '/assets/youtube.svg',
    alt: 'YouTube',
  },
  {
    href: 'https://twitter.com/ProcedureHQ',
    src: '/assets/footer-twitter.svg',
    alt: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/procedure_hq/',
    src: '/assets/insta.svg',
    alt: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/ProcedureHQ',
    src: '/assets/fb-1.svg',
    alt: 'Facebook',
  },
]

const SocialMediaSection = () => {
  return (
    <>
      <h5 className="text-xl mb-12 font-bold leading-[1.2]">Connect</h5>
      <ul className="-mt-8 pt-2.5 flex space-x-3 list-none">
        {socialLinks.map((social, idx) => (
          <li key={idx} className="inline">
            <Link
              className="w-9 inline-block animation-easein"
              href={social.href}
              target="_blank"
            >
              <Image
                className="w-full align-middle transition-transform hover:scale-110"
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
  )
}

export default SocialMediaSection
