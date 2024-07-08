import Image from 'next/image'
import React from "react";
import { Container } from "@/components/Container";

import call from "../../../public/img/contact/call.svg";
import mail from "../../../public/img/contact/mail.svg";
import lin from "../../../public/img/contact/lin.svg";
import x from "../../../public/img/contact/x.svg";
import ins from "../../../public/img/contact/ins.svg";


export const Form = () => {
  return (
    <Container  >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-5 mx-auto text-black px-7 py-7 lg:px-12 lg:py-12 formbg" style={{ borderRadius: '30px', boxShadow: 'none' }}>
        <div className="flex flex-col text-center w-[30%] justify-center items-center">
          <Image src={call} alt="image" className="mx-auto" />
          <p className="text-custom-blue">Call us at:</p>
          <p>+1 (585) 733-6042</p>
          <br />
          <Image src={mail} alt="image" className="mx-auto" />
          <p className="text-custom-blue">Email us:</p>
          <p>info@jobsquad.com</p>
          <br />
          <p className="text-custom-blue">Social Media</p>
          <div className="flex flex-row justify-center gap-2">
            <Image src={lin} alt="image" className="mx-auto" />
            <Image src={x} alt="image" className="mx-auto" />
            <Image src={ins} alt="image" className="mx-auto" />
          </div>
        </div>

        <div className="lg:w-5 hidden lg:flex lg:h-80 lg:w-[5%] lg:border-l-2 lg:border-custom-blue"></div>

        <div className="relative flex flex-col w-[65%] lg:flex-col lg:pl-10 lg:mr-10 justify-left items-left w-full lg:w-auto">
          {/* CTA form */}
          <h1 className="text-custom-blue font-bold text-3xl lg:text-4xl lg:pb-5 ">Send us a message</h1>
          <p className='text-normal lg:max-w-xl'>Need help? Fill out the form below, and one of our support
            team members will get back to you as soon as possible.</p>
          <form className="w-full lg:w-auto pt-10">
            <div className="flex flex-col sm:flex-col justify-center sm:justify-end max-w-xs mx-auto sm:max-w-md lg:max-w-none lg:ml-auto lg:mr-0 gap-2 sm:gap-4">
              <input
                type="text"
                className="w-full max-w-lg sm:w-auto appearance-none border border-[#3975EA] rounded-xl px-4 py-2 text-black bg-transparent placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Your name..."
                aria-label="Your best email…"
              />
              <input
                type="email"
                className="w-full max-w-lg sm:w-auto appearance-none border border-[#3975EA] rounded-xl px-4 py-2 text-black bg-transparent placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Your Email…"
                aria-label="Your best email…"
              />
              <input
                type="text"
                className="w-full max-w-lg sm:w-auto appearance-none border border-[#3975EA] rounded-xl px-4 py-8 text-black bg-transparent placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Message…"
                aria-label="Your message…"
              />

              <a className="btn bg-custom-blue text-white w-[150px] text-center rounded-xl px-4 py-2 hover:bg-blue-600 shadow" href="#0">SUBMIT</a>
            </div>
            {/* Success message */}
            {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
          </form>
        </div>
      </div>
    </Container>
  );
};
