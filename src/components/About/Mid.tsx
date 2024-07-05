import React from "react";
import Image from "next/image";
import des from "../../../public/img/about/des.png";

export const Mid = () => {
  return (
    <div className="containbg">
      <div className="relative flex flex-col lg:flex-row w-full h-200 p-8 lg:p-20">
        <div className="flex-1 text-left lg:pr-10 lg:pt-10 lg:pl-10">
          <h1 className="text-4xl text-custom-blue pt-10 pb-5 font-bold lg:pt-20 lg:pb-5 lg:text-6xl">Our Story</h1>
          <p className="max-w-xl text-left text-md pb-20 text-black">
          JOBSquad was born out of the frustration many job seekers face: the time-consuming and often overwhelming task of searching for and applying to multiple job listings. <br></br><br></br> Recognizing the need for a more efficient solution, our team of experts in AI, software development, and career coaching came together to create a tool that automates and streamlines the job application process.
          </p>
        </div>
        <div className="lg:flex-1 flex justify-end items-center ">
          <Image alt="abtimg2" src={des} className="abtimg2" />
        </div>
      </div>
    </div>



  );
};
