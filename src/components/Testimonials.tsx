import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";
import testImg from "../../public/img/test.png"; // Assuming test.png is your background image

export const Testimonials = () => {
  return (
    <Container>
      <div>
        <div>
          <div>
            <h2>Testimonials</h2>
          </div>
        </div>
      </div>
      
    </Container>
  );  
};

export default Testimonials;
