import React from "react";
import Image from "next/image";
import WorldMapImage from "@/app/assets/images/world-map.png";
import GradientBar from "../ui/GradientBar";
import StatCard, { StatCardProps } from "../blocks/StatCard";

const Stats: StatCardProps[] = [
  {
    icon: "/icons/person.svg",
    label: "Members",
    value: "20+",
  },
  {
    icon: "/icons/deal.svg",
    label: "Tech Partners",
    value: "04+",
  },
  {
    icon: "/icons/graduate.svg",
    label: "Student Members",
    value: "75+",
  },
  {
    icon: "/icons/group.svg",
    label: "Community Partners",
    value: "15+",
  },
];

const InnovationSection = () => {
  return (
    <section>
      <h2 className="section-heading w-1/2">
        The Power of Collective Vision Drives Our Innovation
      </h2>
      <div className="flex gap-4 mt-8">
        {/* World Map  */}
        <div className="lg:w-3/5 bg-white rounded-xl p-8 py-12 min-h-80 flex items-center justify-center">
          <Image src={WorldMapImage} alt="World Map" />
        </div>
        {/* Learn By doing  */}
        <div className="lg:w-2/5 p-12 bg-[#091B32] rounded-xl flex flex-col justify-between">
          <div className="flex items-center gap-12">
            <Image
              src={"/icons/masonry.svg"}
              alt="Masonry Icon"
              width={96}
              height={96}
            />
            <GradientBar />
          </div>
          <h3 className="text-5xl font-bold gradient-text">
            Learning By Doing
          </h3>
          <p className="text-2xl">
            Unlock exclusive access to hands-on workshops, engaging discussions,
            and project showcases designed to boost your knowledge and expand
            your network.
          </p>
        </div>
      </div>
      {/* Stat Section  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {Stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default InnovationSection;
