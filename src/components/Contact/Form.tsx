import React from "react";
import { Container } from "@/components/Container";

export const Form = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-5 mx-auto text-black px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl formbg ">
        <div className="flex-grow text-center justify-center align-center lg:text-left">
          <p>Logo</p>
          <p className="text-custom-blue">call us at:</p>
          <p> +1 (585) 733-6042</p>
          <br></br>
          <p>Logo</p>
          <p className="text-custom-blue "> Email us:</p>
          <p>info@jobsquad.com</p>
          <br></br>
          
          <p className="text-custom-blue " >Social Media</p>
          <div>
            Social Icons
          </div>
        </div>
        <div className="lg:w-5 hidden lg:flex lg:h-80 lg:border-l-2 lg:border-custom-blue"></div>
        
        <div className="relative flex flex-col lg:flex-col justify-left items-left w-full lg:w-auto">
          {/* CTA form */}
          <h1 className="text-custom-blue text-3xl ">Send us a message</h1>
          <p>Need help? Fill out the form below, and one of our support
          team members will get back to you as soon as possible.</p>
          <form className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-col justify-center sm:justify-end max-w-xs mx-auto sm:max-w-md lg:max-w-none lg:ml-auto lg:mr-0 gap-2 sm:gap-4">
              <input
                type="email"
                className="w-full max-w-xs sm:w-auto appearance-none border border-[#3975EA] rounded-xl px-4 py-2 text-black bg-transparent placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Your best email…"
                aria-label="Your best email…"
              />
              <input
                type="email"
                className="w-full max-w-xs sm:w-auto appearance-none border border-[#3975EA] rounded-xl px-4 py-2 text-black bg-transparent placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Your best email…"
                aria-label="Your best email…"
              />
              <input
                type="text"
                className="w-full max-w-xs sm:w-auto appearance-none border border-[#3975EA] rounded-xl px-4 py-2 text-black bg-transparent placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Your best email…"
                aria-label="Your best email…"
              />
              <a className="btn bg-custom-blue text-white text-center rounded-xl px-4 py-2 hover:bg-blue-600 shadow" href="#0">Subscribe</a>
            </div>
            {/* Success message */}
            {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
          </form>
        </div>
      </div>
    </Container>
  );
};
