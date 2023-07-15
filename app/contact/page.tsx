import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function printFormattedDate(date: Date): string {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${day},${year}`;
}

// Example usage
const date = new Date();
const formattedDate = printFormattedDate(date);
// console.log(formattedDate); // Output: Sunday, June 18, 2023

export default function page() {
  return (
    <div className="bg-black bg-cover  overflow-hidden">
      <div className='bg-[url("../public/images/hero-contact.jpg")] px-2 w-full bg-cover h-[690px]'>
        <Navbar />

        <h3 className="text-center text-white mt-32 space-grotesk-bold text-[170px]">
          CONNECT
        </h3>
        <div>
          <ul className="flex flex-row justify-center space-x-28 text-white unbounded-extrabold">
            <li>Reach Tekk Collective</li>
            <li>Join Us</li>
            <li>{formattedDate}</li>
          </ul>
        </div>
      </div>
      <section className="bg-black mt-10">
        {" "}
        <h3 className="text-white text-center  text-[48px] unbounded-bold pt-10">
          GET IN TOUCH
        </h3>
        <p className="space-grotesk-bold text-[16px] text-white justify-center text-center">
          Ready to explore the tech universe with us? Beam your <br />{" "}
          business?. Fill the form below!
        </p>
      </section>

      <section className="px-8">
        <div className="flex lg:flex-row flex-col ">
          <form
            action="https://api.web3forms.comm/submit"
            className="flex lg:flex-col flex-col space-y-4"
            method="POST"
          >
            <input type="hidden" name="access_key" value="" />
            <input
              type="email"
              name="email"
              placeholder="name@email.com"
              required
              className="bg-black border-white border rounded-md space-grotesk-regular text-[16px] text-[#C9C9C9] px-4 py-2"
            />
            <input
              type="text"
              name="name"
              placeholder="name"
              required
              className="bg-black border-white border rounded-md  space-grotesk-regular text-[16px] text-[#C9C9C9] px-4 py-2"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-black border-white border rounded-md  space-grotesk-regular text-[16px] text-[#C9C9C9] px-4 py-2"
            />

            <textarea
              name="message"
              placeholder="message"
              className="w-[390px] h-[231px] text-white bg-black border-white border rounded-md px-4 pt-2 "
              required
            ></textarea>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />
            <button
              type="submit"
              className="text-black space-grotesk-bold text-[16px] px-4 py-2 rounded-3xl bg-white"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
