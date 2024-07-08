import React from "react";
import Image from "next/image";
import icon1 from "../../../public/img/about/icon1.png";
import icon2 from "../../../public/img/about/icon2.png";
import icon3 from "../../../public/img/about/icon3.png";
import icon4 from "../../../public/img/about/icon4.png";
import { Container } from "../Container";

export const Last = () => {
    return (
        <Container>
            <div className="flex justify-center items-center">
                <div className="lg:max-w-[50%] p-5">
                    <h1 className="lg:text-5xl text-3xl text-center text-custom-blue text-left p-10 lg:mb-20 font-bold">
                        Why Choose Jobsquad?
                    </h1>
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center lg:pb-5 space-x-4">
                            <Image src={icon1} alt="Efficiency icon" className="w-12 h-12 lg:w-16 lg:h-16" />
                            <p className="lg:text-lg">
                                <b>Efficiency:</b> Our extension automates the application process, saving you valuable time and effort.
                            </p>
                        </div>
                        <div className="flex items-center lg:pb-5 space-x-4">
                            <Image src={icon2} alt="Accuracy icon" className="w-12 h-12 lg:w-16 lg:h-16" />
                            <p className="lg:text-lg">
                                <b>Accuracy:</b> Jobsquad applies to positions that best match your profile, increasing your chances of landing the right job.
                            </p>
                        </div>
                        <div className="flex items-center lg:pb-5 space-x-4">
                            <Image src={icon3} alt="User-Friendly icon" className="w-12 h-12 lg:w-16 lg:h-16" />
                            <p className="lg:text-lg">
                                <b>User-Friendly:</b> Our intuitive interface is easy to install and use, making job applications a breeze.
                            </p>
                        </div>
                        <div className="flex items-center lg:pb-5 space-x-4">
                            <Image src={icon4} alt="Support icon" className="w-12 h-12 lg:w-16 lg:h-16" />
                            <p className="p-1 lg:text-lg">
                                <b>Support:</b> We are committed to supporting our users with exceptional customer service and continuous improvements to our platform.
                            </p>
                        </div>
                    </div>
                    <p className="mt-6 text-center text-lg">
                        Join the Jobsquad community today and take the first step towards a more efficient and successful job search. Let us handle the applications while you focus on achieving your career goals.
                    </p>
                </div>
            </div>
        </Container>
    );
};
