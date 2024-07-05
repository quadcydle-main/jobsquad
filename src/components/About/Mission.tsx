import React from "react";
import Image from "next/image";
import iconm from "../../../public/img/about/iconm.png";

export const Mission = () => {
    return (
        <div className="missionbg p-4 lg:p-8">
            <div className="flex flex-col items-start lg:items-center lg:text-center">
                <div className="hidden lg:block">
                    <Image src={iconm} alt="Missionicon" className="mb-4" />
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-left lg:text-center lg:text-white">Our Mission</h2>
                <p className="mt-2 lg:max-w-xl text-base lg:text-lg text-left lg:text-center lg:text-white">
                At Jobsquad, our mission is simple: to empower job seekers by providing them with the tools they need to find their dream jobs with ease. We strive to eliminate the barriers in the job application process, giving you more time to focus on preparing for interviews and advancing your career.
                </p>
            </div>
        </div>
    );
};
