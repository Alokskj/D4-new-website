import Image from "next/image";
import Background from "../components/Background";
import HeroImage from "../assets/images/heroimg.png";
import { BlueButton, OrangeButton } from "@/app/components/Buttons";

import d4logo from "../assets/images/d4logo.png";
import card1 from "../assets/images/heroCard1.png";
import card2 from "../assets/images/heroCard2.png";
import card3 from "../assets/images/heroCard3.png";

import bracketIcon from "../assets/icons/bracketIcon.png";
import chatIcon from "../assets/icons/chatIcon.png";
import terminalIcon from "../assets/icons/terminalIcon.png";
import mentoringImg from "../assets/images/mentoringImg.png";
import mentoring1 from "../assets/icons/mentoring1.png";
import mentoring2 from "../assets/icons/mentoring2.png";
import mentoring3 from "../assets/icons/mentoring3.png";

import Card from "../components/Card";
import { BigHeading, Heading } from "../components/Headings";
import Footer from "../components/Footer";
import InnovationSection from "../components/sections/InnovationSection";
import EventsSection from "../components/sections/EventsSection";
import CTASection from "../components/sections/CTASection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroPage() {
  return (
    <div className="relative overflow-hidden text-white ">
      <div className="wrapper z-10 relative pb-36 flex flex-col gap-12">
        <HeroSection />
        <InnovationSection />
        <EventsSection />
        <CTASection />
        {/* <InfoSection /> */}
        {/* <MentorSection /> */}
        {/* <FooterCall /> */}
      </div>

      <Background />
    </div>
  );
}

function HeroSection() {
  return (
    <div>
      <div className="min-h-[calc(100dvh-94px)] flex items-center">
        <div className="flex items-center justify-center gap-6">
          <div className="lg:w-2/3 flex flex-col lg:text-left lg:items-start text-center items-center md:gap-10 gap-10">
            <h1 className="text-[clamp(2rem,2vw+2.5rem,3.5rem)] font-bold sm:leading-[60px] leading-[50px] bg-[linear-gradient(to_left,#A46FF2,#E49976)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Innovators, Visionaries & Achievers, Together.
            </h1>
            <p className="text-sm md:text-base max-w-3xl">
              As an open-source, student-driven community, we're all about
              nurturing growth and empowering tech enthusiasts. We connect
              minds, share expertise, and welcome all skill levels. Get ready to
              reimagine tech with our dynamic events, practical sessions, and
              innovative spirit!
            </p>

            <div className="flex gap-5">
              <Button size={"lg"} asChild>
                <Link href="/coming-soon">Join Now</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/3">
            <Image className="w-[1020px]" src={HeroImage} alt="hero image" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="">
      <div className="sm:pt-32 pt-24">
        <div className="max-w-[920px]">
          <BigHeading
            title={`There are over 6404 programming exercises. From "Allergies" to "Zebra Puzzle"`}
          />
        </div>
        <div className="mt-10 flex lg:flex-row-reverse md:flex-col items-center gap-12">
          <div className="bg-blue-400 hidden md:block">imgs</div>
          <div className="flex flex-col gap-8">
            <p className="sm:text-[22px] text-[16px]">
              Learn by doing. Improve your programming skills by doing
              interesting coding tasks that help you comprehend the basics.
            </p>
            <div className="flex flex-col gap-6">
              <InfoCard
                title={"Dog Puzzle"}
                description={
                  "Which inhabitants drink water? Who owns the dog? Could you solve the Dog."
                }
                src={card1}
              />
              <InfoCard
                title={"Dog Puzzle"}
                description={
                  "Which inhabitants drink water? Who owns the dog? Could you solve the Dog."
                }
                src={card2}
              />
              <InfoCard
                title={"Dog Puzzle"}
                description={
                  "Which inhabitants drink water? Who owns the dog? Could you solve the Dog."
                }
                src={card3}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex sm:flex-row flex-col sm:gap-4 gap-1">
          <Card
            src={bracketIcon}
            title={"Write code locally, in your own space"}
            description={
              "Exercism is primarily built as a CLI-first tool. Download and submit exercises right from your terminal."
            }
          />
          <Card
            src={terminalIcon}
            title={"Use the Exercism in-browser editor"}
            description={
              "Exercism is primarily built as a CLI-first tool. Download and submit exercises right from your terminal."
            }
          />
          <Card
            src={chatIcon}
            title={"Get automated analysis on your code"}
            description={
              "Exercism is primarily built as a CLI-first tool. Download and submit exercises right from your terminal."
            }
          />
        </div>
      </div>
      {/* <BlurRight top={2350} /> */}
    </div>
  );
}

function InfoCard({ src, title, description }: any) {
  return (
    <div className="bg-[#091B32] rounded-lg shadow-sm max-w-[820px]">
      <div className="p-5 flex items-center gap-6">
        <div>
          <Image className="w-[110px] min-w-[40px]" src={src} alt="card 1" />
        </div>
        <div className="">
          <h3 className="sm:text-[25px] text-[20px] font-semibold">{title}</h3>
          <p className="sm:text-[18px] text-[15px] font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

function MentorSection() {
  return (
    <div>
      <div className="sm:pt-32 pt-28">
        <div className="flex items-center justify-center gap-24">
          <div className="flex md:flex-row flex-col md:items-center gap-10">
            <div className="">
              <Image
                className="lg:max-w-[520px] max-w-[320px]"
                src={mentoringImg}
                alt="img"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <BigHeading
                  title={
                    "Deepen your knowledge with human mentoring, for free."
                  }
                />
              </div>
              <p className="sm:text-[26px] md:text-[20px] text-[16px]">
                Discover new and exciting ways to approach an exercise by
                getting mentored on it. Become more familiar with the
                conventions, idioms and opinions of a particular programming
                language.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <div>
            <Heading title={"Why mentoring?"} />
          </div>
          <div className="flex md:flex-row flex-col sm:gap-7 gap-4 pt-8">
            <Card
              src={mentoring1}
              title={"You don't know what you don't know"}
              description={
                "The most difficult aspect of learning a new language is failing to recognise your own knowledge deficiencies. Our mentors can look at your code and quickly identify concepts you're unfamiliar with, allowing you to advance by gaining new information."
              }
            />
            <Card
              src={mentoring2}
              title={"Learn language-specific conventions"}
              description={
                "Being fluent in a language is more than just being able to write code in it; it also means being able to think in that language. Our mentors will help you change your thinking so that you can produce idiomatic code."
              }
            />
            <Card
              src={mentoring3}
              title={"Learning with others is fun"}
              description={
                "Receiving input from real people is a really interesting method to learn. Becoming a mentor and providing feedback yourself is an even greater step forward. So complete the circle—be mentored and mentor "
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterCall() {
  return (
    <div>
      <div className="py-24">
        <div className="flex lg:flex-row flex-col sm:items-center gap-14">
          <div className="flex flex-col gap-3">
            <div>
              <Image className="w-[120px]" src={d4logo} alt="d4 logo" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[28px]">
                Code practice and mentorship for everyone
              </h3>
              <p className="font-light">
                Develop fluency in 70 programming languages with our unique
                blend of learning, practice and mentoring. Exercism is fun,
                effective and 100% free, forever.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <OrangeButton label={"Join"} />
            <OrangeButton label={"Explore"} />
          </div>
        </div>
      </div>
    </div>
  );
}
