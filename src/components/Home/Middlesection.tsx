import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import middleImg from "../../../public/img/home/middle.png";
import tick from "../../../public/img/home/tick.png";
import icon1 from "../../../public/img/home/icon1.png";
import icon2 from "../../../public/img/home/icon2.png";
import icon3 from "../../../public/img/home/icon3.png";


export const Middlesection = () => {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="MiddleText">
            <div className="MiddleText2">
              <p className="textimg">Sit back and relax while</p>
              <Image alt="img" src={middleImg} className="imgmid" />
            </div>
            <p className="textimg">does the work for you!</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="middle2con">
              <div className="middle2">
                <Image alt="img" className="img2" src={tick}></Image>
                <p className="textimg2">Save hundred’s of hours using JOBSquad.</p>
              </div>
              <div className="middle2">
                <Image alt="img" className="img2" src={tick}></Image>
                <p className="textimg2">We automatically fill your job applications on linkedIn.</p>
              </div>
              <div className="middle2">
                <Image alt="img" className="img2" src={tick}></Image>
                <p className="textimg2">Our extension never gets you blocked.</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 border-opacity-50    mt-20 w-4/5 mx-auto"></div>
          <br />


          {/* Items */}
          <div className="max-w-5xl mx-auto grid gap-2 pt-20   md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {/* 1st item */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="icons" alt="icon1" src={icon1} />
              <h4 className="text-lg lg:text-xl font-medium mb-2">Maximize Opportunities</h4>
              <p className="text-base lg:text-lg text-gray-500">
                Never miss out on a potential job opportunity again. Our product continuously scans LinkedIn for relevant positions, ensuring you&apos;re always in the loop and ready to take the next step in your career journey.
              </p>
            </div>

            {/* 2nd item */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="icons" alt="icon1" src={icon2} />
              <h4 className="text-lg lg:text-xl font-medium mb-2">Track Your Progress</h4>
              <p className="text-base lg:text-lg text-gray-500">
                Stay organized with our intuitive dashboard, where you can monitor the status of your applications, track responses from employers, and gain valuable insights into your job search.
              </p>
            </div>

            {/* 3rd item */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="icons" alt="icon1" src={icon3} />
              <h4 className="text-lg lg:text-xl font-medium mb-2">Customize Your Approach</h4>
              <p className="text-base lg:text-lg text-gray-500">
                Tailor your application strategy by setting specific criteria such as location, industry, or job type. LinkedIn AutoApply empowers you to refine your job search parameters, ensuring that every application reflects your unique career aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
