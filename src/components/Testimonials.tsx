import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

// Import your images
import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid1">
        {/* Testimonial 1 */}
        <div className="grid2">
          <div className="flex pt-10 justify-center mb-4">
            <Image src={userOneImg} alt="UserOne" className="rounded-full" width={80} height={80} />
          </div>
          <div className="p-6 text-gray-300 pb-10 relative z-10 text-center">
            <p className="text-lg mb-4">&quot;Testimonial 1 content here.&quot;</p>
            <div className="border-b-2 border-gray-300 w-4/5 mb-2 mx-auto"></div>
            <p className="font-semibold text-gray-400">John Doe</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="grid2">
          <div className="flex pt-10 justify-center mb-4">
            <Image src={userTwoImg} alt="UserTwo" className="rounded-full" width={80} height={80} />
          </div>
          <div className="p-6 text-gray-300 pb-10 relative z-10 text-center">
            <p className="text-lg mb-4">&quot;Testimonial 2 content here.&quot;</p>
            <div className="border-b-2 border-gray-300 w-4/5 mb-2 mx-auto"></div>
            <p className="font-semibold text-gray-400">Jane Smith</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="grid2">
          <div className="flex pt-10 justify-center mb-4">
            <Image src={userThreeImg} alt="UserThree" className="rounded-full" width={80} height={80} />
          </div>
          <div className="p-6 text-gray-300 pb-10 relative z-10 text-center">
            <p className="text-lg mb-4">&quot;Testimonial 3 content here.&quot;</p>
            <div className="border-b-2 border-gray-300 w-4/5 mb-2 mx-auto"></div>
            <p className="font-semibold text-gray-400">Mike Johnson</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
