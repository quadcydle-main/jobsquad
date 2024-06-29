import React from "react";
import { Container } from "@/components/Container";

export const Middlesection = () => {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Increase Efficiency</h2>
            <p className="text-xl md:text-2xl text-gray-500">
              Focus on what matters most &ndash; your skills and experience. Let Job Squad handle the repetitive task of filling out application forms, so you can concentrate on advancing your career.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {/* 1st item */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="currentColor" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="text-lg lg:text-xl font-medium mb-2">Maximize Opportunities</h4>
              <p className="text-base lg:text-lg text-gray-500">
                Never miss out on a potential job opportunity again. Our product continuously scans LinkedIn for relevant positions, ensuring you&apos;re always in the loop and ready to take the next step in your career journey.
              </p>
            </div>

            {/* 2nd item */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="currentColor" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="text-lg lg:text-xl font-medium mb-2">Track Your Progress</h4>
              <p className="text-base lg:text-lg text-gray-500">
                Stay organized with our intuitive dashboard, where you can monitor the status of your applications, track responses from employers, and gain valuable insights into your job search.
              </p>
            </div>

            {/* 3rd item */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="currentColor" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
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
