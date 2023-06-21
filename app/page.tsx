import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      <div className='bg-[url("../public/images/hero-home.jpg")] w-full bg-cover h-[690px]'>
        <Navbar />
        <h3 className="text-center text-white mt-32 unbounded-bold text-[80px]">
          {" "}
          Unleash the power <br /> of Tekk Collective.
        </h3>
      </div>



    </div>
  );
}
