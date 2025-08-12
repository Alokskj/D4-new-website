import Image from "next/image";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="wrapper px-4 my-8 min-h-[calc(100dvh-100px)] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={"/elements/hexbg.png"} fill className="object-contain" alt="Background Image"/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <Image src={"/elements/noise.svg"} fill className="object-cover" alt="Background Image"/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 backdrop-blur-3xl rounded-2xl">
       
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="flex items-center justify-center h-full">
          <h1 className="gradient-text text-4xl md:text-5xl font-bold">Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
