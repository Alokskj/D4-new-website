import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export type EventCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  reverse?: boolean;
};

const EventCard = ({
  image,
  title,
  description,
  date,
  reverse,
}: EventCardProps) => {
  const gradientClass = reverse
    ? "bg-[linear-gradient(135deg,_#FFFFFF_30%,_#091B32_30%)]"
    : "bg-[linear-gradient(135deg,_#091B32_30%,_#FFFFFF_30%)]";

  return (
    <div className="relative flex items-center w-full">
      {/* Timeline connector and date for desktop */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center relative">
          <div className="w-4 h-4 bg-primary rounded-full shadow-lg"></div>
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 px-3 py-1  text-primary text-sm font-medium rounded-full whitespace-nowrap",
              reverse ? "right-8" : "left-8"
            )}
          >
            {date}
          </div>
        </div>
      </div>

      {/* Card container */}
      <div
        className={cn(
          "w-full lg:w-[calc(50%-2rem)] shadow-xl shadow-white/10 overflow-hidden",
          reverse ? "lg:ml-auto" : ""
        )}
      >
        <div
          className={cn(
            "p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 rounded-xl shadow-2xl shadow-white/10",
            gradientClass
          )}
        >
          {/* Image */}
          <div className="relative size-48 shrink-0 overflow-hidden rounded-xl">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          {/* Content */}
          <div
            className={cn(
              "flex flex-col gap-2 flex-1",
              reverse ? "text-white" : "text-black"
            )}
          >
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              {title}
            </h3>
            <p className="text-sm md:text-base opacity-90">{description}</p>

            {/* Date for mobile/tablet */}
            <div className="lg:hidden mt-2">
              <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
