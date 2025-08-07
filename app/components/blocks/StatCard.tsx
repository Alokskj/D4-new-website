import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import GradientBar from "../ui/GradientBar";

export type StatCardProps = {
  icon: string;
  label: string;
  value: string | number;
  reverse?: boolean;
};

const StatCard = ({ icon, label, value, reverse }: StatCardProps) => {
  const gradientClass = reverse
    ? "bg-[linear-gradient(130deg,_#FFFFFF_70%,_#091B32_40%)]"
    : "bg-[linear-gradient(130deg,_#091B32_70%,_#FFFFFF_40%)]";
  return (
    <div className={cn("p-6 flex flex-col justify-between rounded-xl aspect-[3/2] shadow-2xl shadow-white/30", gradientClass)}>
      <div className="flex items-center gap-4 mr-6">
        <Image src={icon} alt={label} width={24} height={24} />
        <GradientBar />
      </div>
      <div className={cn(reverse ? "text-black": "text-white")}>
        <h3 className="gradient-text text-4xl font-bold">{value}</h3>
        <h3>{label}</h3>
      </div>
    </div>
  );
};

export default StatCard;
