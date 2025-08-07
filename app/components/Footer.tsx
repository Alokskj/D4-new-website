import Image from "next/image";
import d4logo from "../assets/images/d4logo.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const SocialLinks = [
  {
    icon: "/icons/whatsapp.svg",
    link: "https://chat.whatsapp.com/Khwy3LEyjdX4Kx8VJ1MXmW",
  },

  {
    icon: "/icons/x.svg",
    link: "https://x.com/D4community",
  },
  {
    icon: "/icons/discord.svg",
    link: "https://discord.com/invite/RPpYB8JpUQ",
  },
  {
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/d4community",
  },
  {
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/company/d4community/",
  },
];

export default function Footer() {
  return (
    <footer className="bottom-0 z-10 relative  bg-[#0E0C15]/80  backdrop-blur-md">
      <div className="container py-8 px-4">
        {/*
                todo:
                 have to work on footer keeping it hidden in mobile view for now 
                 take refrence from appwrite website
                 */}
        <div className="xl:flex justify-center hidden">
          <div className="flex gap-32 items-start flex-shrink">
            <div className="flex flex-col  items-center gap-2">
              <div className="relative size-48">
                <Image
                  src={d4logo}
                  alt="d4 logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex gap-6 items-center">
                {SocialLinks.map((social) => (
                  <Link key={social.link} href={social.link} target="_blank">
                    <Image
                      src={social.icon}
                      alt="social icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <FooterLinks
              heading={"Legal & Policies"}
              link1={"Terms Of Usage"}
              link2={"Privacy Policy"}
              link3={"Cookie Policy"}
              link4={"Code of Conduct"}
              link5={"Accessibility Statement"}
            />

            <FooterLinks
              heading={"Get Involved"}
              link1={"D4 Insider"}
              link2={"Contribute"}
              link3={"Mentor"}
              link4={"Donate"}
            />

            <FooterLinks
              heading={"About D4"}
              link1={"About D4 Community"}
              link2={"Our Team"}
              link3={"Contribute"}
              link4={"Partners"}
              link5={"Individual Support"}
            />

            <FooterLinks
              heading={"Get Help"}
              link1={"Getting Started"}
              link2={"D4's Docs"}
              link3={"FAQs"}
            />
          </div>
        </div>

        <div className="xl:hidden">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center gap-2 self-start">
              <Image className="max-w-[60px]" src={d4logo} alt="d4 logo" />
              <p className="font-semibold pt-[4px] text-[22px]">D4 Community</p>
            </div>
            <div className="px-4">
              <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Legal & Policies</AccordionTrigger>
                  <AccordionContent>
                    <FooterLinks
                      link1={"Terms Of Usage"}
                      link2={"Privacy Policy"}
                      link3={"Cookie Policy"}
                      link4={"Code of Conduct"}
                      link5={"Accessibility Statement"}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Get Involved</AccordionTrigger>
                  <AccordionContent>
                    <FooterLinks
                      link1={"D4 Insider"}
                      link2={"Contribute"}
                      link3={"Mentor"}
                      link4={"Donate"}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>About D4</AccordionTrigger>
                  <AccordionContent>
                    <FooterLinks
                      link1={"About D4 Community"}
                      link2={"Our Team"}
                      link3={"Contribute"}
                      link4={"Partners"}
                      link5={"Individual Support"}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Get Help</AccordionTrigger>
                  <AccordionContent>
                    <FooterLinks
                      link1={"Getting Started"}
                      link2={"D4's Docs"}
                      link3={"FAQs"}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#091B32]">
        <div className="max-w-7xl mx-auto sm:text-[18px] text-[16px] font-light py-5 px-4 flex lg:flex-row flex-col lg:justify-between lg:items-center gap-8 self-start">
            <p>Designed By D4 Community</p>
          <p>© Copyright @ D4 Community {new Date().getFullYear()} </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ heading, link1, link2, link3, link4, link5 }: any) {
  return (
    <nav>
      <div>
        {heading ? (
          <h2 className="font-medium text-[20px] pb-4">{heading}</h2>
        ) : null}
        <div className="font-light flex flex-col sm:text-[16px] text-[14px] gap-2">
          <a>{link1}</a>
          <a>{link2}</a>
          <a>{link3}</a>
          <a>{link4}</a>
          <a>{link5}</a>
        </div>
      </div>
    </nav>
  );
}
