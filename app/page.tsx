/* eslint-disable @next/next/no-img-element */
// "use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
// import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="bg-black">
      <div className='bg-[url("../public/images/hero-home.jpg")] w-full bg-cover h-[690px]'>
        <Navbar />

        <h3 className="text-center text-white mt-32 unbounded-bold text-[80px]">
          Unleash the power <br /> of Tekk Collective.
          {/* <Typewriter
            options={{
              strings: ["Unleash the power"],
              autoStart: true,
              delay:"natural",
              loop: true,
              
            }}
          />
          <Typewriter
            options={{
              strings: ["of Tekk Collective."],
              autoStart: true,
              
              
            }} /> */}
        </h3>
      </div>
      <section className="bg-black px-8 flex  flex-row">
        <div className="">
          <h3 className="text-white  text-[48px] unbounded-bold pt-10">
            Break the Barriers
          </h3>
          <p className="text-white text-[20px] space-grotesk-bold mt-10">
            Tekk Collective redefines Tech consulting With futuristic <br />{" "}
            approach propelling you light years ahead if the competition.
          </p>
          <p className="text-white text-[20px] space-grotesk-bold mt-3">
            Our team of galaxy-minded exerts align your stars , <br />
            transforming your business into a blazing supernova of success.
          </p>
          <p className="text-white text-[20px] space-grotesk-bold mt-3">
            No matter how big or small your tech challenge , we’ve got the{" "}
            <br />
            cosmic solutions that turn IT problems into stardust.
          </p>
        </div>
        {/* <div className='bg-[url("../public/images/home-ab.jpg")] ml-[300px] mt-[55px] h-fit rounded-lg  bg-cover w-[250px]'>
          <img src="images/Hope.svg" alt="" className="px-10 py-10" />
        </div> */}
        {/* <div className="w-[466px] h-[355px] bg-white ml-[300px] hidden mt-[55px] relative">
          <img
            className="w-[466px] h-[355px] left-[0px] top-[0px] absolute rounded-2xl"
            src="images/Hope.svg"
            alt="fv"
          />
        </div> */}
      </section>

      <section className="px-8 bg-[url('../public/images/call-to-action.jpg')] py-20 mt-6">
        <h3 className=" text-[48px] unbounded-bold  text-white text-center ">
          {" "}
          Get started
        </h3>
        <p className="text-white text-[16px] text-center space-grotesk-bold mt-3">
          Ready to explore the tech universe with us? Beam your <br />
          business and join the Tekk Collective revolution today!
        </p>
        <div className="flex justify-center items-center mt-5">
          <a
            href="#"
            className="bg-white text-black space-grotesk-bold  rounded-sm py-4 px-10"
          >
            Contact us
          </a>
        </div>
      </section>

      <section className="px-8">
        <h3 className="text-white  text-[48px] unbounded-bold pt-10">
          Testimonials
        </h3>
      </section>
    </div>
  );
}
