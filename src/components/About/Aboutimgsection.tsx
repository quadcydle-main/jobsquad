import React from "react";
import Image from "next/image";
import imgab from "../../../public/img/about/imgab.png";

export const Aboutimgsection = () => {
  return (
    <div className="abg">
      <div className="relative flex flex-col lg:flex-row w-full h-200 p-8 lg:p-20">
        <div className="flex-1 text-left lg:pr-10 lg:pt-10 lg:pl-10">
          <h1 className="text-4xl text-white pt-10 pb-5 font-bold lg:pt-20 lg:pb-5 lg:text-6xl">ABOUT US</h1>
          <p className="max-w-xl text-left text-md pb-10 text-white">
            Welcome to JOBSquad, your ultimate partner in the job search journey. We are a team of passionate innovators dedicated to transforming the way professionals find and apply for jobs on LinkedIn.
            <br /><br />
            Our mission is simple: to empower job seekers by leveraging advanced technology to simplify and enhance the job application process.
          </p>
        </div>
        <div className="lg:flex-1 flex justify-end items-center ">
          <Image alt="abtimg" src={imgab} className="abtimg" />
        </div>
      </div>
    </div>



  );
};
