"use client";
import React from "react";
import { Container } from "@/components/Container";
import { subscribe } from "@/actions/subscribe"; // Adjust the import path as necessary
import toast, { Toaster } from "react-hot-toast";

export const Cta = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await subscribe(formData);
    if (response.message) {
      toast.success(response.message);
    } else {
      toast.error("Subscription failed. Please try again.");
    }
  };

  return (
    <Container>
      <Toaster />
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl gap-5 mx-auto text-black px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl bg-gradient-to-r from-[#e8f6ff] to-white shadow-custom">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-bold lg:text-3xl">Stay in the loop!</h2>
          <p className="mt-2 text-sm font-medium text-black text-opacity-90 lg:text-xl">
            Join our newsletter to get top news before anyone else.
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full lg:w-auto">
          <form onSubmit={handleSubmit} className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end max-w-xs mx-auto sm:max-w-md lg:max-w-none lg:ml-auto lg:mr-0 gap-2 sm:gap-4">
              <input
                type="email"
                name="email"
                className="w-full max-w-xs sm:w-auto appearance-none border border-[#3975EA] rounded-xl px-4 py-2 text-black bg-transparent placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Your Email"
                aria-label="Your best email…"
                required
                maxLength={100}
              />
              <button type="submit" className="btn bg-[#3975EA] text-white text-center rounded-xl px-4 py-2 hover:bg-blue-600 shadow">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
