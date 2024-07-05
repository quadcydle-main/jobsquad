import React from "react";
import Image from "next/image";
import icon1 from "../../../public/img/about/icon1.png";
import icon2 from "../../../public/img/about/icon2.png";
import icon3 from "../../../public/img/about/icon3.png";
import icon4 from "../../../public/img/about/icon4.png";

export const Last = () => {
  return (
    <div className="containbg">
        <h1>Why Choose Jobsquad?</h1>
        <div>
            <Image src={icon1} alt="des" />
            <p>Efficiency: Our extension automates the application process, saving you valuable time and effort.</p>
        </div>
        <div>
        <Image src={icon2} alt="des" />
        <p>Accuracy: Jobsquad applies to positions that best match your profile, increasing your chances of landing the right job.</p>
        </div>
        <div>
        <Image src={icon3} alt="des" />
        <p>User-Friendly: Our intuitive interface is easy to install and use, making job applications a breeze.</p>
        </div>
        <div>
        <Image src={icon4} alt="des" />
        <p>Support: We are committed to supporting our users with exceptional customer service and continuous improvements to our platform.</p>
        </div>
        <p>Join the Jobsquad community today and take the first step towards a more efficient and successful job search. Let us handle the applications while you focus on achieving your career goals.</p>
      
    </div>



  );
};
