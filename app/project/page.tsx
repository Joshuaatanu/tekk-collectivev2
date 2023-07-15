import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div className="bg-black bg-cover">
      <div className='bg-[url("../public/images/hero-project.jpg")] px-2 w-full bg-cover h-[690px]'>
        <Navbar />

        <h3 className="flex flex-row items-center justify-center text-white mt-32 text-justify  unbounded-bold text-[80px]">
          Unleash the power <br /> of creativity with <br /> Tekk Collective.
        </h3>
      </div>

      <section className="px-8">
        <h3 className="text-white  text-[48px] unbounded-bold pt-10">
          Our Masterpieces Unleashed
        </h3>
        <p className="text-white text-[20px] space-grotesk-bold mt-10">
          Explore our creative and groundbreaking projects that <br /> have set
          the industry alight.
        </p>
      </section>
      <section className="px-8 mt-8 space-y-16">
        <div className="flex flex-row space-x-16">
          <div className="w-[1000px] h-[270px] bg-[#d9d9d9] rounded-xl"></div>
          <div className="w-[400px] h-[270px] bg-[#d9d9d9] rounded-xl"></div>
        </div>
        <div className="flex flex-row space-x-16">
          <div className="w-[400px] h-[270px] bg-[#d9d9d9] rounded-xl"></div>
          <div className="w-[1000px] h-[270px] bg-[#d9d9d9] rounded-xl"></div>
        </div>
      </section>
    </div>
  );
}
