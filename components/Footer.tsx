/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#444444] mt-20 py-10">
      <div className="flex lg:flex-row flex-col lg:space-x-80 space-y-4 ml-20 lg:ml-[25%] text-white">
        <div>
          <h5 className="space-grotesk-bold text-[16px] lg:mt-4">Company</h5>
          <ul className="space-grotesk-regular">
            <li>Careers</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="space-grotesk-bold text-[16px]">Services</h5>
          <ul className="space-grotesk-regular">
            <li>Consulting</li>
            <li>Design</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h5 className="space-grotesk-bold text-[16px]">Contact</h5>
          <ul className="space-grotesk-regular">
            <li>FeedBack</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-4 mt-14">
        <img src="images/twitter.svg" height="27px" width="24px" alt="" />
        <img src="images/instagram.svg" height="27px" width="24px" alt="" />
        <img src="images/facebook.svg" height="27px" width="24px" alt="" />
        <img src="images/github.svg" height="27px" width="24px" alt="" />
      </div>
      <h5
        className="space-grotesk-bold text-[14px] text-center text-white
         lg:mt-4 mt-4"
      >
        &copy; 2023 Tekk Collective. All rights reserved.
      </h5>
    </footer>
  );
}
