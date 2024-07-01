"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

import Social from "../../public/img/icon1.png";

export const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact Us", href: "/#contact" },
    { name: "FAQs", href: "/#faqs" },
  ];

  return (
    <div className="flex flex-row item-center justify-center w-full p-0 m-0 ">
      <nav className="container relative flex flex-col  p-10 lg:flex-row  bg-blue  items-center  w-full justify-center lg:justify-between ">
        {/* Logo */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-col items-left justify-center w-full lg:w-auto mb-4 lg:mb-0">
                <Link href="/" legacyBehavior>
                  <a className="flex items-center lg:space-x-2 text-2xl font-medium text-indigo-500">
                    <Image
                      src="/img/logo.png"
                      alt="N"
                      width="130"
                      height="90"
                      className="lg:ml-10"
                    />
                  </a>
                </Link>
              </div>
            </>
          )}
        </Disclosure>

        {/* Menu for mobile */}
        <div className="flex flex-col items-start justify-start lg:hidden">
          <ul className="py-6">
            {navigation.map((menu, index) => (
              <li className="mb-3" key={index}>
                <Link href={menu.href} legacyBehavior>
                  <a className="flex flex-col px-4 py-2 text-lg items-start justify-start font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
            


        {/* Menu for desktop */}
        <div className="hidden text-center lg:flex litems-center text-center  justify-center">
          <ul className="items-center justify-end flex-1 text-center pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href} legacyBehavior>
                  <a className="inline-block px-4 py-2 text-center text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social icons */}
        <div className="flex flex-row lg:flex-row gap-3 lg:gap-6 items-start lg:items-center justify-left mt-6 lg:mr-10 lg:mt-0">
          <Image alt="social" src={Social} width={30} height={30} />
          <Image alt="social" src={Social} width={30} height={30} />
          <Image alt="social" src={Social} width={30} height={30} />
        </div>

      </nav>
    </div>
  );
};
